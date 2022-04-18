(function () {
  const burger = document.body.querySelector(".header__burger");
  const burgerMenu = document.body.querySelector(".header__menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    body.classList.toggle("lock");
  });
})();
