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
const header__bottom_swiper = new Swiper(".header__bottom_swiper", {
    slidesPerView: 'auto',
    spaceBetween: `${remToPx(0.8)}rem`,
});

$('.header__search_input').on('input', function(){
    if($(this).val()) {
        $('.header').addClass('active')
        if (screen.width < 769) {
            $('body').addClass('lock')
        }
    } else {
        $('.header').removeClass('active')
    }
})
$('.header__search_input').on( "focus", function() {
    $('.header').addClass('active')
    if (screen.width < 769) {
        $('body').addClass('lock')
    }
});
$('.header__search_blur, .header__search-cancel').on( "click", function() {
    $('.header').removeClass('active')
    if (screen.width < 769) {
        $('body').removeClass('lock')
    }
});
$('.header__search-cancel').on( "click", function() {
    $('.header').removeClass('active')
    $('.header__search_input').val('')
    if (screen.width < 769) {
        $('body').removeClass('lock')
    }
});
