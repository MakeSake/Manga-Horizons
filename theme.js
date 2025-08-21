<script>
(() => {
  const STORAGE_KEY = 'theme';
  const root = document.documentElement;

  // Load saved theme or fall back to system preference
  let theme =
    localStorage.getItem(STORAGE_KEY) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day');

  function updateToggleLabels() {
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      const isDay = theme === 'day';
      btn.textContent = isDay ? '🌙 Dark Mode' : '☀️ Light Mode';
      btn.setAttribute('aria-label', isDay ? 'Switch to dark mode' : 'Switch to light mode');
    });
  }

  function applyTheme(next = theme) {
    theme = next;
    root.classList.remove('day', 'night');
    root.classList.add(theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateToggleLabels();
  }

  // Apply immediately so the theme shows before paint
  applyTheme(theme);

  // Click handler for any theme toggle button
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-theme-toggle]');
    if (!btn) return;
    applyTheme(theme === 'day' ? 'night' : 'day');
  });

  // Update labels once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateToggleLabels);
  } else {
    updateToggleLabels();
  }

  // Watch for new buttons being added (e.g. SPA navigation)
  const mo = new MutationObserver(updateToggleLabels);
  mo.observe(document.body, { childList: true, subtree: true });
})();
</script>

