function setTheme(mode) {
  document.body.classList.toggle('dark-mode', mode === 'dark');
  localStorage.setItem('theme', mode);
  // Update button text/icon
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = mode === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode';
  }
}

function getCurrentTheme() {
  return document.body.classList.contains('dark-mode') ? 'dark' : 'light';
}

function toggleTheme() {
  const current = getCurrentTheme();
  setTheme(current === 'dark' ? 'light' : 'dark');
}

// On page load, set theme based on localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme === 'dark' ? 'dark' : 'light');
  // Attach event to theme toggle button if present
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }
});
