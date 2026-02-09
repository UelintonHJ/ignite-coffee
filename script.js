const menuButton = document.getElementById("menu-btn");
const nav = document.querySelector(".header__nav");

function toggleMenu() {
    const isOpen = nav.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", isOpen);
}

function closeMenu() {
    nav.classList.remove("active");
    menuButton.setAttribute("aria-expanded", false);
}

menuButton.addEventListener("click", toggleMenu);

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
});
