$(function () {
  $(".header__slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./img/svg/icons.svg#arrow-prev" class="svg-arrow-prev-dims" alt="arrow-prev"/></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./img/svg/icons.svg#arrow-next" class="svg-arrow-next-dims" alt="arrow-next"/></button>',
    vertical: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          autoplay: true,
        },
      },
    ],
  });

  $(".product__content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product__list",
    fade: true,
    arrows: false,
  });
  $(".product__list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product__content",
    focusOnSelect: true,
    vertical: true,
    centerMode: true,
    prevArrow:
      '<button type="button" class="product-prev"><img src="./img/svg/icons.svg#arrow-prev-black" class="svg-arrow-prev-black-dims" alt="arrow-prev-black"/></button>',
    nextArrow:
      '<button type="button" class="product-next"><img src="./img/svg/icons.svg#arrow-next-black" class="svg-arrow-next-black-dims" alt="arrow-next-black"/></button>',
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          vertical: false,
          centerMode: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575.98,
        settings: {
          vertical: false,
          centerMode: false,
          arrows: false,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });

  $(".menu__btn").on("click", () => {
    $(".menu__list").toggleClass("menu__list--active");
  });

  const burger = document.body.querySelector(".burger");
  const menuList = document.body.querySelector(".menu__list");
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
    menuList.classList.toggle("menu__list--active");
  });

  const lang = document.body.querySelector(".header__lang");
  const langOptions = document.body.querySelectorAll(".header__lang-link");
  lang.addEventListener("click", () => {
    langOptions.forEach((elem) => {
      elem.classList.toggle("header__lang-link--active");
    });
  });
});
