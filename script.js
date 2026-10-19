const themeButton = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️ Light Mode";
}
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});
// Project filtering
const projectFilter = document.getElementById("project-filter");
const projectCards = document.querySelectorAll(".project-card");
projectFilter.addEventListener("change", function () {
    const selectedFilter = projectFilter.value;
    projectCards.forEach(function (card) {
        const projectCategory = card.dataset.category;
        if (selectedFilter === "all" ||
            selectedFilter === projectCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});