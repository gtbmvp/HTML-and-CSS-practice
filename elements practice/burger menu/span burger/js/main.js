(function () {
  const burger = document.body.querySelector(".burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
  });
})();
