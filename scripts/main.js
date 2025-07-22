// main.js
// Placeholder for future interactivity (e.g., nav toggles, sliders) 
document.addEventListener('DOMContentLoaded', function() {
  const accountArea = document.getElementById('account-area');
  if (!accountArea) return;
  const userData = localStorage.getItem('herculesUser');
  if (userData) {
    const user = JSON.parse(userData);
    let icon = '';
    let label = '';
    switch (user.userType) {
      case 'client':
        icon = '<span style="font-size:1.5rem;vertical-align:middle;">👤</span>';
        label = 'Client';
        break;
      case 'professional':
        icon = '<span style="font-size:1.5rem;vertical-align:middle;">🧑‍💼</span>';
        label = 'Professional';
        break;
      case 'admin':
        icon = '<span style="font-size:1.5rem;vertical-align:middle;">🛡️</span>';
        label = 'Admin';
        break;
      default:
        icon = '<span style="font-size:1.5rem;vertical-align:middle;">👤</span>';
        label = 'User';
    }
    accountArea.innerHTML = `<div class="account-info" style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 1.2rem;background:#f5e9da;border-radius:2rem;font-weight:700;">${icon}<span>${label}</span></div>`;
  } else {
    accountArea.innerHTML = '<a href="login.html" class="btn btn-login">Login</a>';
  }
}); 