// Theme Switcher for homepage and manga/read pages
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Determine initial theme from localStorage or default to day
let theme = localStorage.getItem('theme') || 'day';

function applyTheme() {
  body.classList.remove('day', 'night');
  body.classList.add(theme);

  // Update button text/icon
  if (themeToggle) {
    themeToggle.textContent = theme === 'day' ? '🌙 Dark Mode' : '☀️ Light Mode';
  }
}

// Toggle theme on button click
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    theme = theme === 'day' ? 'night' : 'day';
    localStorage.setItem('theme', theme);
    applyTheme();
  });
}

// On page load, apply theme from localStorage
applyTheme();
