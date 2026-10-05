(() => {
  const candidate = new URLSearchParams(location.search).get('code') ?? location.pathname.split('/').filter(Boolean).at(-1);
  const code = (candidate ?? '').trim().toUpperCase();
  const status = document.getElementById('status');
  if (!/^[A-F0-9]{8}$/.test(code)) {
    status.textContent = 'This join link is incomplete. Ask the coach for a new link.';
    return;
  }
  const configured = document.querySelector('meta[name="myteamos-web-app"]').content;
  if (!configured) return;
  try {
    const target = new URL(configured);
    if (target.protocol !== 'https:') return;
    target.hash = `/join/${code}`;
    const button = document.getElementById('web');
    button.href = target.href;
    button.hidden = false;
    status.textContent = 'Use the email address you want the coach to recognise.';
  } catch { /* Keep the honest unconfigured state. */ }
})();
