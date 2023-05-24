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
swiper.on("slideChange", function () {
  const activSlide = swiper.slides[swiper.activeIndex + 1];
  const color = activSlide.dataset.color;
  const swiperButton = document.querySelector(".swiper-button");
  const bullets = document.querySelectorAll(".swiper-pagination-bullet");
  bullets.forEach((bullet) => {
    bullet.style.backgroundColor = "black";
  });
  const bulletActiv = document.querySelector(
    ".swiper-pagination-bullet-active"
  );

  swiperButton.style.color = color;
  swiperButton.style.borderColor = color;
  bulletActiv.style.backgroundColor = color;
  console.log(color);
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

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const nav = document.querySelector(".nav-top");

gsap.to(nav, {
  opacity: 1,
  duration: 0.2,
  scrollTrigger: {
    trigger: document.body,
    start: "top+=800",
    end: "bottom",
    toggleActions: "play none none reverse",
  },
});
