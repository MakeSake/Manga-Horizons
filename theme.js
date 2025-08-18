function setTheme(mode) {
  document.body.classList.toggle('dark-mode', mode === 'dark');
  localStorage.setItem('theme', mode);
}

function toggleTheme() {
  const current = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
}

// On page load, set theme based on localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setTheme('dark');
  }
  // Attach event to theme toggle button if present
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }
});