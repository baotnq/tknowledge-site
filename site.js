// Copy buttons and tabs. Generated pages load this; edit here, not in the pages.
(function () {
  function copyText(text, btn) {
    function done() { var t = btn.textContent; btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = t; }, 1500); }
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done, function () {}); return; }
    var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) {} document.body.removeChild(ta);
  }
  Array.prototype.forEach.call(document.querySelectorAll('button.copy'), function (b) {
    b.addEventListener('click', function () {
      var id = b.getAttribute('data-copy');
      var text = id ? document.getElementById(id).textContent
                    : b.parentNode.querySelector('span').textContent.replace(/^“|”$/g, '');
      copyText(text, b);
    });
  });

  // Tabs switch in place. Pricing tabs also put their panel in the hash (#pricing-team …) so a link opens that tab.
  var all = [];
  Array.prototype.forEach.call(document.querySelectorAll('[role="tablist"]'), function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    var hashed = !!list.closest('#pricing');
    function select(tab, setHash) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (setHash && hashed && history.replaceState) history.replaceState(null, '', '#' + tab.getAttribute('aria-controls'));
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t, true); });
      t.addEventListener('keydown', function (e) {
        var j = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
        if (j === null) return;
        var n = tabs[(j + tabs.length) % tabs.length]; select(n, true); n.focus(); e.preventDefault();
      });
      if (hashed) all.push({ tab: t, select: select });
    });
    // The served page shows every panel; tabs take over only once this runs.
    select(tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0] || tabs[0], false);
  });
  function fromHash() {
    all.forEach(function (x) {
      if ('#' + x.tab.getAttribute('aria-controls') === location.hash) { x.select(x.tab, false); document.getElementById('pricing').scrollIntoView(); }
    });
  }
  window.addEventListener('hashchange', fromHash);
  fromHash();
})();
