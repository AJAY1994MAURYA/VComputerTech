// Simple Router
function navigateTo(route) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  if (route === '/') {
    loadHome();
  } else {
    loadNotFound();
  }
}

// Home Page
function loadHome() {
  const root = document.getElementById('root');
  const homeContent = document.createElement('div');
  homeContent.className = 'container';
  homeContent.innerHTML = `<h1>Welcome to VComputerTech!</h1><p>This is the home page.</p>`;
  root.appendChild(homeContent);
}

// Not Found Page
function loadNotFound() {
  const root = document.getElementById('root');
  const notFoundContent = document.createElement('div');
  notFoundContent.className = 'container';
  notFoundContent.innerHTML = `<h1>404 - Page Not Found</h1>`;
  root.appendChild(notFoundContent);
}

// Initialize app
window.addEventListener('load', () => navigateTo('/'));
