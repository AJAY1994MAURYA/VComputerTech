function showToast(message) {
  const toaster = document.getElementById('toaster');
  toaster.textContent = message;
  toaster.style.display = 'block';
  setTimeout(() => {
    toaster.style.display = 'none';
  }, 3000);
}

// Show a sample toast after 2 seconds
setTimeout(() => showToast('Welcome to VComputerTech!'), 2000);
