const burger = document.querySelector(".burger");
const navLink = document.querySelector(".nav_link");

//NAV BURGER FUNCTION
burger.addEventListener("click", () => {
  navLink.classList.toggle("navBarActive");
  burger.classList.toggle("toggle");
});
