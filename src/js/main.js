import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
