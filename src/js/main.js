import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
  },
  breakpoints: {
    575: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const button = document.querySelector(".nav-button");
const navContainer = document.querySelector(".nav");
const backgroundEffect = document.querySelector(".nav-background-effect");
const body = document.querySelector("body");

let openMenu = function () {
  navContainer.classList.toggle("activ");
  backgroundEffect.classList.toggle("activ");
  body.classList.toggle("activ");
};

button.addEventListener("click", openMenu);
backgroundEffect.addEventListener("click", openMenu);
