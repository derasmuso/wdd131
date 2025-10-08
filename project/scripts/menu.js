const button = document.getElementById("menu");
const nav = document.getElementById("mainNav");

button.addEventListener("click", () => {
    nav.classList.toggle("hidden");
});