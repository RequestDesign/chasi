import Swiper from "swiper";
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectFade,
	EffectCoverflow,
	Thumbs,
	EffectCreative,
	Mousewheel,
} from "swiper/modules";

import $ from "jquery";

function remToPx(remValue) {
    // Получаем текущий базовый размер шрифта (font-size) из элемента <html>
    var htmlFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
    );

    // Переводим значение из rem в px
    var pxValue = remValue * htmlFontSize;

    // Округляем значение до целых пикселей (по желанию)
    return Math.round(pxValue) + "px";
}

const main_page__swiper_small = new Swiper(".main-page__swiper-small", {
    modules: [Pagination],
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: `${remToPx(2)}rem`,
    pagination: {
        el: ".main-page__swiper-small_pagination",
    },
});
const main_page__big_swiper = new Swiper(".main-page__big_swiper", {
    modules: [Pagination],
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: `${remToPx(2)}rem`,
    pagination: {
        el: ".main-page__big_pagination",
    },
});

$('.like').on('click', function (evt) {
    $(this).toggleClass('like_liked')
})

if($('.main-page__right').length) {
    let programs_show

    function programsShow() {
        const cards = document.querySelectorAll('.main-page__advertisement')
        if (screen.width < 769) {
            cards.forEach(card => {
                card.classList.add('swiper-slide')
            })
            programs_show = new Swiper('.main-page__add_swiper', {
                modules: [Navigation, Pagination],
                slidesPerView: 1,
                spaceBetween: `${remToPx(1)}rem`,
                pagination: {
                    el: ".main-page__add_pagination",
                },
            });
        } else {
            cards.forEach(card => {
                card.classList.remove('swiper-slide')
              })
            if(programs_show) {
                programs_show.destroy()
                programs_show = undefined
            }
        }
    }
    
    programsShow();
    
    $(window).resize(function () {
        programsShow();
    });
}
$('.main-page__item_delete').on('click', function (evt) {
    $(this).closest('.main-page__item').remove()
})