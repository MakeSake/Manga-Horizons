const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
let theme = localStorage.getItem('theme') || 'day';
function applyTheme() {
  body.classList.remove('day', 'night');
  body.classList.add(theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'day' ? '🌙 Dark Mode' : '☀️ Light Mode';
  }
}
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    theme = theme === 'day' ? 'night' : 'day';
    localStorage.setItem('theme', theme);
    applyTheme();
  });
}
applyTheme();
