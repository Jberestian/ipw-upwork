  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    
    // Load saved theme or fallback to light
    const currentTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", currentTheme);

    // Update button text based on the current theme
    toggleButton.textContent = currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

    // Toggle theme on button click
    toggleButton.addEventListener("click", () => {
      const newTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.body.setAttribute("data-theme", newTheme);

      // Save theme to localStorage
      localStorage.setItem("theme", newTheme);

      // Update button text
      toggleButton.textContent = newTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    });
  });
