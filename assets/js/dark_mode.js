$(document).ready(function() {
    const mode_toggle = document.getElementById("light-toggle");

    mode_toggle.addEventListener("click", function() {
        toggleTheme(localStorage.getItem("theme"));
        mode_toggle.classList.add("spin");
        setTimeout(function() { mode_toggle.classList.remove("spin"); }, 500);
    });
});
