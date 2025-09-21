const menuToggle = document.getElementById("menu-toggle");
const sideNav = document.getElementById("side-nav");
const closeNav = document.getElementById("close-nav");
const overlay = document.getElementById("overlay");
const yearSpan = document.getElementById("year");

menuToggle.addEventListener("click", () => {
  sideNav.classList.add("open");
  overlay.classList.add("show");
});

closeNav.addEventListener("click", () => {
  sideNav.classList.remove("open");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  sideNav.classList.remove("open");
  overlay.classList.remove("show");
});

yearSpan.textContent = new Date().getFullYear();
