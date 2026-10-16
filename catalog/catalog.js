// Catalog filters. The entries are in the page already (build/build.py renders
// them from /v1/catalog); this only narrows what is shown and copies the
// "Add to your store" text. Without JavaScript every entry stays visible.
(function () {
  var AXES = ['who', 'what', 'when', 'where'];
  var items = Array.prototype.slice.call(document.querySelectorAll('li.entry'));
  var oldSection = document.getElementById('old-entries');
  var count = document.getElementById('count');
  var q = document.getElementById('q'), old = document.getElementById('old');

  function values(li, a) { return (li.getAttribute('data-' + a) || '').split(' ').filter(Boolean); }

  AXES.forEach(function (a) {
    var seen = {};
    items.forEach(function (li) { values(li, a).forEach(function (v) { seen[v] = 1; }); });
    var sel = document.querySelector('select[data-axis="' + a + '"]');
    Object.keys(seen).sort().forEach(function (v) { var o = document.createElement('option'); o.value = o.textContent = v; sel.appendChild(o); });
  });

  function show() {
    var want = {};
    AXES.forEach(function (a) { want[a] = document.querySelector('select[data-axis="' + a + '"]').value; });
    var words = q.value.trim().toLowerCase();
    var shown = 0, current = 0;
    items.forEach(function (li) {
      var isOld = li.classList.contains('old');
      if (!isOld) current++;
      var ok = (!isOld || old.checked) && AXES.every(function (a) { return !want[a] || values(li, a).indexOf(want[a]) >= 0; }) &&
        (!words || li.textContent.toLowerCase().indexOf(words) >= 0);
      li.hidden = !ok;
      if (ok) shown++;
    });
    if (oldSection) oldSection.hidden = !old.checked;
    count.textContent = shown + ' shown · ' + current + ' current entries in the catalog';
  }

  function copyText(text, btn) {
    function done() { var t = btn.textContent; btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = t; }, 1500); }
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done, function () {}); return; }
    var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) {} document.body.removeChild(ta);
  }
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest('button.copy');
    if (b) copyText(b.parentNode.querySelector('span').textContent, b);
  });

  document.getElementById('filters').hidden = false;
  Array.prototype.forEach.call(document.querySelectorAll('#filters select, #filters input'), function (el) {
    el.addEventListener(el.type === 'search' ? 'input' : 'change', show);
  });
  show();
  if (location.hash) { var el = document.getElementById(location.hash.slice(1)); if (el) { if (el.classList.contains('old')) { old.checked = true; show(); } el.scrollIntoView(); } }
})();
