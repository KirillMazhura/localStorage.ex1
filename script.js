document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("theme-switch");
    const themeStylesheet = document.getElementById("theme-stylesheet");
    const themeSwitchers = document.querySelectorAll(".theme-switcher");

    // Перевірка, чи вже була обрана тема та встановлення її
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        themeStylesheet.href = savedTheme;
        themeSwitch.checked = savedTheme.includes("dark");
    }

    // Обробник зміни теми при кліку на перемикач
    themeSwitch.addEventListener("change", function () {
        if (themeSwitch.checked) {
            themeStylesheet.href = "dark-theme.css";
            localStorage.setItem("theme", "dark-theme.css");
        } else {
            themeStylesheet.href = "light-theme.css";
            localStorage.setItem("theme", "light-theme.css");
        }
    });

    // Обробник для вибору теми при кліку на посилання
    themeSwitchers.forEach(function (switcher) {
        switcher.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedTheme = switcher.getAttribute("data-theme");
            themeStylesheet.href = selectedTheme;
            localStorage.setItem("theme", selectedTheme);
            themeSwitch.checked = selectedTheme.includes("dark");
        });
    });
});
