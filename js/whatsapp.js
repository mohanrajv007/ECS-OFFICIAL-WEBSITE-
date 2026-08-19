/* ============================================================
   WHATSAPP CLICK-TO-CHAT — self-contained floating button.
   Injects its own markup + scoped styles; no other file needs
   to change beyond one <script> include per page.
   ============================================================ */
(function () {
  'use strict';

  // TODO: replace with the firm's real WhatsApp number (country code + number, no spaces/+/dashes).
  var PHONE = '910000000000';
  var PRESET_MESSAGE = 'Hello, I would like to know more about Excelsior Consultancy Services.';

  var css =
    '.eca-wa{position:fixed;left:26px;bottom:26px;z-index:200;width:56px;height:56px;' +
    'border-radius:50%;background:#25D366;color:#FCFCFB;border:1px solid rgba(22,22,26,.08);' +
    'display:flex;align-items:center;justify-content:center;cursor:pointer;text-decoration:none;' +
    'box-shadow:0 6px 20px rgba(22,22,26,.2),0 1px 3px rgba(22,22,26,.12);' +
    'transition:transform .35s ease,box-shadow .35s ease}' +
    '.eca-wa:hover{transform:translateY(-2px);box-shadow:0 10px 26px rgba(22,22,26,.26)}' +
    '.eca-wa svg{width:28px;height:28px}' +
    '@media (max-width:480px){.eca-wa{left:16px;bottom:16px;width:52px;height:52px}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var link = document.createElement('a');
  link.className = 'eca-wa';
  link.href = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(PRESET_MESSAGE);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'Chat with us on WhatsApp');
  link.innerHTML =
    '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">' +
    '<path d="M16.02 3C9.4 3 4 8.36 4 14.96c0 2.36.66 4.56 1.8 6.44L4 29l7.78-1.74a12.9 12.9 0 0 0 4.24.72h.01c6.62 0 12.02-5.36 12.02-11.96C28.05 8.42 22.65 3 16.02 3Zm0 21.86h-.01a10 10 0 0 1-3.86-.77l-.5-.22-4.65 1.03 1.06-4.5-.24-.5a9.85 9.85 0 0 1-1.51-5.24c0-5.46 4.46-9.9 9.94-9.9 5.47 0 9.9 4.44 9.9 9.9 0 5.47-4.46 10.2-9.63 10.2ZM21.4 17.5c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.14-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.43a8.7 8.7 0 0 1-1.6-1.98c-.17-.29-.02-.44.12-.59.13-.13.29-.34.44-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.65-1.57-.89-2.15-.24-.57-.48-.49-.65-.5h-.56c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.16 2.95c.14.19 2 3.06 4.86 4.29.68.29 1.2.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z"/>' +
    '</svg>';

  document.body.appendChild(link);
})();
