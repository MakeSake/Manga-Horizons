const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "🌙 Dark Mode";
} else {
  toggleButton.textContent = "☀️ Light Mode";
}

// Toggle theme
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "🌙 Dark Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "☀️ Light Mode";
  }
});
