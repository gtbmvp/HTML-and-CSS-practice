import Swiper from "./partials/swiper-bundle.esm.browser.js";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return ("0" + number).slice(-2);
    },
    renderFraction: function (currentClass) {
      return '<span class="' + currentClass + '"></span>';
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ############ functional programming test ############
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.body.querySelector(".burger");
  const menu = document.body.querySelector(".header__nav");
  const header = document.body.querySelector(".header");

  const promoWrapper = document.body.querySelector(".promo__wrapper");
  const promoBtn = document.body.querySelector(".promo__btn");
  const promoPic = document.body.querySelector(".promo__image");

  let bodyMargin = false;
  let burgerMargin = false;
  let rebuild = false;

  build();

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("menu--active");

    document.body.classList.toggle("overflow-lock");

    burger.style.marginRight = burgerMargin ? "" : getScrollbarWidth() + "px";
    burgerMargin = !burgerMargin;

    document.body.style.marginRight = bodyMargin
      ? ""
      : getScrollbarWidth() + "px";
    bodyMargin = !bodyMargin;
  });

  menu.addEventListener("click", (event) => {
    event.preventDefault();

    if (!event.target.closest(".menu__link")) return;

    const gotoElem = document.querySelector(event.target.dataset.goto);
    const gotoElemTop =
      gotoElem.getBoundingClientRect().top +
      window.scrollY -
      document.querySelector(".header").offsetHeight;

    window.scrollTo({
      top: gotoElemTop,
      behavior: "smooth",
    });

    deActive();
  });

  window.addEventListener("resize", () => {
    deActive();
    build();
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > header.offsetHeight) {
      header.classList.add("header--nontransparent");
    } else {
      header.classList.remove("header--nontransparent");
    }
  });

  function build() {
    if (document.body.clientWidth + getScrollbarWidth() < 767.98) {
      if (!rebuild) {
        promoBtn.before(promoPic);
        rebuild = true;
      }
    } else {
      if (rebuild) {
        promoWrapper.append(promoPic);
        rebuild = false;
      }
    }
  }
  function deActive() {
    if (burger.classList.contains("burger--active")) {
      burger.classList.remove("burger--active");
      menu.classList.remove("menu--active");

      document.body.classList.remove("overflow-lock");

      burger.style.marginRight = "";
      document.body.style.marginRight = "";
      burgerMargin = false;
      bodyMargin = false;
    }
  }
});

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

// ############ object-oriented programming test ############
// window.addEventListener("DOMContentLoaded", () => {
//   const burger = document.body.querySelector(".burger");
//   const menu = document.body.querySelector(".header__nav");
//   const header = document.body.querySelector(".header");

//   const promoWrapper = document.body.querySelector(".promo__wrapper");
//   const promoBtn = document.body.querySelector(".promo__btn");
//   const promoPic = document.body.querySelector(".promo__image");

//   class Builder {
//     constructor() {
//       this.bodyMargin = false;
//       this.burgerMargin = false;
//       this.rebuild = false;
//     }

//     init() {
//       this.build();

//       document.body.addEventListener("click", (event) => {
//         if (event.target.closest(".burger")) {
//           burger.classList.toggle("burger--active");
//           menu.classList.toggle("menu--active");

//           document.body.classList.toggle("overflow-lock");

//           burger.style.marginRight = this.burgerMargin
//             ? ""
//             : this.getScrollbarWidth() + "px";
//           this.burgerMargin = !this.burgerMargin;

//           document.body.style.marginRight = this.bodyMargin
//             ? ""
//             : this.getScrollbarWidth() + "px";
//           this.bodyMargin = !this.bodyMargin;
//         }
//         if (event.target.closest(".menu__link")) {
//           event.preventDefault();

//           const gotoElem = document.querySelector(event.target.dataset.goto);
//           const gotoElemTop =
//             gotoElem.getBoundingClientRect().top +
//             window.scrollY -
//             document.querySelector(".header").offsetHeight;

//           window.scrollTo({
//             top: gotoElemTop,
//             behavior: "smooth",
//           });

//           this.deActive();
//         }
//       });

//       window.addEventListener("resize", () => {
//         this.deActive();
//         this.build();
//       });

//       window.addEventListener("scroll", () => {
//         if (window.scrollY > header.offsetHeight) {
//           header.classList.add("header--nontransparent");
//         } else {
//           header.classList.remove("header--nontransparent");
//         }
//       });
//     }

//     build() {
//       if (document.body.clientWidth + this.getScrollbarWidth() < 767.98) {
//         if (!this.rebuild) {
//           promoBtn.before(promoPic);
//           this.rebuild = true;
//         }
//       } else {
//         if (this.rebuild) {
//           promoWrapper.append(promoPic);
//           this.rebuild = false;
//         }
//       }
//     }
//     deActive() {
//       if (burger.classList.contains("burger--active")) {
//         burger.classList.remove("burger--active");
//         menu.classList.remove("menu--active");

//         document.body.classList.remove("overflow-lock");

//         burger.style.marginRight = "";
//         document.body.style.marginRight = "";
//         this.burgerMargin = false;
//         this.bodyMargin = false;
//       }
//     }

//     getScrollbarWidth() {
//       // Creating invisible container
//       const outer = document.createElement("div");
//       outer.style.visibility = "hidden";
//       outer.style.overflow = "scroll"; // forcing scrollbar to appear
//       outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
//       document.body.appendChild(outer);

//       // Creating inner element and placing it in the container
//       const inner = document.createElement("div");
//       outer.appendChild(inner);

//       // Calculating difference between container's full width and the child width
//       const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

//       // Removing temporary elements from the DOM
//       outer.parentNode.removeChild(outer);

//       return scrollbarWidth;
//     }
//   }
//   const builderTest = new Builder();
//   builderTest.init();
// });
