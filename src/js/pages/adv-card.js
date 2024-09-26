import Swiper from "swiper";
import "swiper/css";
import 'swiper/css/pagination';
import { Thumbs, Pagination, Navigation } from "swiper/modules";
import $ from "jquery";

function remToPx(remValue) {
  var htmlFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  var pxValue = remValue * htmlFontSize;
  return Math.round(pxValue) + "px";
}

const swiperThumbnail = new Swiper(".swiper-thumbnail", {
  direction: 'vertical',
  slidesPerView: 6,
  freeMode: false,
  spaceBetween: `${remToPx(1.2)}rem`,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  watchOverflow: true,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-thumbnail ~ .swiper-button-next",
    prevEl: ".swiper-thumbnail ~ .swiper-button-prev"
  },
});

const swiper = new Swiper(".adv-card__swiper", {
  modules: [Thumbs, Pagination],
  spaceBetween: `${remToPx(1.2)}rem`,
  thumbs: {
    swiper: swiperThumbnail,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});

//Show seller's phone
$(function () {
  const btnShowNumer = $('.btn--show-number');
  const sellerPhone = $('#sellerPhone')
  btnShowNumer.on('click', function () {
    btnShowNumer.addClass('open')
    sellerPhone.text('+7 (000) 123-45-67')
  })
})

//If no .adv-card__buttons--mobile reduce margin bottom 
$(function() {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function checkWindowSize() {
        if (mediaQuery.matches) {
            if ($('.adv-card__buttons--mobile').length === 0) {
                $('.adv-card').css('margin-bottom', '4.8rem');
            } else {
                $('.adv-card').css('margin-bottom', '35rem');
            }
        } else {
            $('.adv-card').css('margin-bottom', '');
        }
    }
    checkWindowSize();
});