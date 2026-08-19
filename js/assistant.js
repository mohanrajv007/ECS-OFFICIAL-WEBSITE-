/* ============================================================
   AI ADVISORY ASSISTANT — self-contained widget.
   Injects its own markup + scoped styles so nothing on the
   existing pages has to be touched beyond one <script> include.
   ============================================================ */
(function () {
  'use strict';

  var ENDPOINT = '/api/chat';

  var css =
    '.eca-btn{position:fixed;right:26px;bottom:26px;z-index:200;width:60px;height:60px;' +
    'border-radius:50%;background:#16161A;color:#FCFCFB;border:1px solid rgba(252,252,251,.18);' +
    'display:flex;align-items:center;justify-content:center;cursor:pointer;' +
    'box-shadow:0 6px 20px rgba(22,22,26,.22),0 1px 3px rgba(22,22,26,.12);' +
    'transition:transform .35s ease,background .35s ease;font-family:Inter,sans-serif}' +
    '.eca-btn:hover{transform:translateY(-2px);background:#2E5F55}' +
    '.eca-btn svg{width:24px;height:24px}' +
    '.eca-panel{position:fixed;right:26px;bottom:98px;z-index:200;width:min(384px,calc(100vw - 40px));' +
    'height:min(560px,calc(100vh - 150px));background:#FCFCFB;border:1px solid rgba(22,22,26,.13);' +
    'border-radius:14px;box-shadow:0 18px 50px rgba(22,22,26,.18),0 2px 8px rgba(22,22,26,.08);' +
    'display:flex;flex-direction:column;overflow:hidden;opacity:0;transform:translateY(14px) scale(.98);' +
    'pointer-events:none;transition:opacity .3s ease,transform .3s ease;font-family:Inter,sans-serif}' +
    '.eca-panel.eca-open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}' +
    '.eca-head{background:#16161A;color:#FCFCFB;padding:18px 20px;display:flex;flex-direction:column;gap:2px}' +
    '.eca-head b{font-family:Fraunces,serif;font-weight:300;font-size:16px;letter-spacing:.02em}' +
    '.eca-head span{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:rgba(252,252,251,.55)}' +
    '.eca-close{position:absolute;top:16px;right:16px;background:none;border:0;color:rgba(252,252,251,.7);' +
    'cursor:pointer;font-size:18px;line-height:1;padding:4px}' +
    '.eca-close:hover{color:#FCFCFB}' +
    '.eca-body{flex:1;overflow-y:auto;padding:18px 16px;display:flex;flex-direction:column;gap:12px;background:#FCFCFB}' +
    '.eca-msg{max-width:86%;padding:10px 13px;border-radius:10px;font-size:14px;line-height:1.6;font-weight:300}' +
    '.eca-msg.eca-user{align-self:flex-end;background:#16161A;color:#FCFCFB;border-bottom-right-radius:3px}' +
    '.eca-msg.eca-bot{align-self:flex-start;background:#F2F1ED;color:#16161A;border-bottom-left-radius:3px}' +
    '.eca-msg.eca-note{align-self:center;color:#7C7C82;font-size:12px;background:none;padding:2px}' +
    '.eca-typing span{display:inline-block;width:5px;height:5px;border-radius:50%;background:#7C7C82;margin-right:3px;' +
    'animation:eca-blink 1.2s infinite ease-in-out}' +
    '.eca-typing span:nth-child(2){animation-delay:.2s}.eca-typing span:nth-child(3){animation-delay:.4s}' +
    '@keyframes eca-blink{0%,80%,100%{opacity:.25}40%{opacity:1}}' +
    '.eca-form{display:flex;gap:8px;padding:12px;border-top:1px solid rgba(22,22,26,.09);background:#FCFCFB}' +
    '.eca-input{flex:1;border:1px solid rgba(22,22,26,.15);border-radius:8px;padding:10px 12px;font-size:14px;' +
    'font-family:Inter,sans-serif;font-weight:300;resize:none;max-height:80px}' +
    '.eca-input:focus{outline:1px solid #2E5F55;outline-offset:0}' +
    '.eca-send{background:#16161A;color:#FCFCFB;border:0;border-radius:8px;padding:0 16px;font-size:13px;cursor:pointer;' +
    'transition:background .3s ease}' +
    '.eca-send:hover{background:#2E5F55}' +
    '.eca-send:disabled{opacity:.4;cursor:default}' +
    '@media (max-width:480px){.eca-panel{right:12px;bottom:88px}.eca-btn{right:16px;bottom:16px}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var btn = document.createElement('button');
  btn.className = 'eca-btn';
  btn.setAttribute('aria-label', 'Open advisory assistant');
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.6 8.6 0 0 1-3.1-.6L4 21l1.4-4.2A8.4 8.4 0 1 1 21 11.5Z"/></svg>';

  var panel = document.createElement('div');
  panel.className = 'eca-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Excelsior advisory assistant');
  panel.innerHTML =
    '<div class="eca-head">' +
    '<b>Excelsior Advisory Assistant</b>' +
    '<span>Ask about our services</span>' +
    '<button class="eca-close" type="button" aria-label="Close assistant">&times;</button>' +
    '</div>' +
    '<div class="eca-body" id="eca-body">' +
    '<div class="eca-msg eca-bot">Good day. I can walk you through our advisory services — TEV studies, ' +
    'valuation, FEMA advisory, Virtual CFO and more — or help you scope your enquiry before you speak with our team. ' +
    'How may I assist you?</div>' +
    '</div>' +
    '<form class="eca-form" id="eca-form">' +
    '<textarea class="eca-input" id="eca-input" rows="1" maxlength="1000" placeholder="Type your question…" required></textarea>' +
    '<button class="eca-send" id="eca-send" type="submit">Send</button>' +
    '</form>';

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  var body = panel.querySelector('#eca-body');
  var form = panel.querySelector('#eca-form');
  var input = panel.querySelector('#eca-input');
  var sendBtn = panel.querySelector('#eca-send');
  var closeBtn = panel.querySelector('.eca-close');

  var history = [];
  var busy = false;
  var opened = false;

  function toggle(open) {
    opened = typeof open === 'boolean' ? open : !opened;
    panel.classList.toggle('eca-open', opened);
    btn.setAttribute('aria-expanded', String(opened));
    if (opened) setTimeout(function () { input.focus(); }, 150);
  }

  btn.addEventListener('click', function () { toggle(); });
  closeBtn.addEventListener('click', function () { toggle(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && opened) toggle(false);
  });

  function addMsg(text, cls) {
    var el = document.createElement('div');
    el.className = 'eca-msg ' + cls;
    el.textContent = text;
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
    return el;
  }

  function setBusy(state) {
    busy = state;
    sendBtn.disabled = state;
    input.disabled = state;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (busy) return;
    var text = input.value.trim();
    if (!text) return;

    addMsg(text, 'eca-user');
    history.push({ role: 'user', content: text });
    input.value = '';
    setBusy(true);

    var typing = document.createElement('div');
    typing.className = 'eca-msg eca-bot eca-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ messages: history }),
    })
      .then(function (res) {
        if (!res.ok) throw new Error('bad status');
        return res.json();
      })
      .then(function (data) {
        typing.remove();
        var reply = data && data.reply ? data.reply : "I'm sorry, something went wrong.";
        addMsg(reply, 'eca-bot');
        history.push({ role: 'assistant', content: reply });
      })
      .catch(function () {
        typing.remove();
        addMsg(
          "I'm unable to respond right now — please reach us directly via the Enquiries section below.",
          'eca-note'
        );
      })
      .finally(function () {
        setBusy(false);
        input.focus();
      });
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      form.requestSubmit();
    }
  });
})();
