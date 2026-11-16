// LotMind site: menu on phones, the chat bubble, and the Plans page package switch.
(function () {
  var BOOK = 'mailto:jeff@lotmind.ai?subject=Book%20a%20LotMind%20call';

  // Phone menu
  var header = document.querySelector('.site-header');
  var menuBtn = document.querySelector('.menu-toggle');
  if (header && menuBtn) {
    menuBtn.addEventListener('click', function () {
      var open = header.classList.toggle('menu-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Chat bubble. Until Lotti's LotMind agent is live, messages open an email to book a call.
  var root = document.querySelector('.chat-root');
  if (root) {
    var panel = root.querySelector('[data-chat-panel]');
    var bubble = root.querySelector('button[aria-expanded]');
    var isOpen = function () { return !panel.hidden && getComputedStyle(panel).display !== 'none'; };
    root.querySelectorAll('[data-chat-toggle]').forEach(function (b) {
      b.addEventListener('click', function () {
        var open = !isOpen();
        root.classList.remove('chat-start-open');
        panel.hidden = !open;
        if (bubble) bubble.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open) { var input = root.querySelector('input'); if (input) input.focus(); }
      });
    });
    var send = function (text) {
      var body = text ? '&body=' + encodeURIComponent(text) : '';
      window.location.href = BOOK + body;
    };
    root.querySelectorAll('[data-chat-chip]').forEach(function (b) {
      b.addEventListener('click', function () { send('I resell: ' + b.textContent.trim()); });
    });
    var form = root.querySelector('[data-chat-form]');
    if (form) form.addEventListener('submit', function (e) {
      e.preventDefault();
      send(form.querySelector('input').value.trim());
    });
  }

  // Plans page: Wholesale / Retail switch
  document.querySelectorAll('[data-pick]').forEach(function (b) {
    b.addEventListener('click', function () {
      var pick = b.getAttribute('data-pick');
      document.querySelectorAll('[data-pkg]').forEach(function (el) {
        el.hidden = el.getAttribute('data-pkg') !== pick;
      });
      var same = document.querySelector('[data-pkg="' + pick + '"] [data-pick="' + pick + '"]');
      if (same) same.focus();
    });
  });
})();
