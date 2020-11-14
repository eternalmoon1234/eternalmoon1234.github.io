const pancake = document.getElementsByClassName("pancake")[0];
const navbarContent = document.getElementsByClassName("navbar-content")[0];

pancake.addEventListener("click", () => {
  navbarContent.classList.toggle("active");
});
