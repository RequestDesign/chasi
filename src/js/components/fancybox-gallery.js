import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import $ from "jquery";


let initFancybox = function (galleryTitle) {
    $(function () {
        Fancybox.bind(`[data-fancybox='${galleryTitle}']`, {
            idle: false,
            Carousel: {
                transition: "slide",
            },
            Thumbs: {
                type: "classic",
            },
            Toolbar: {
                display: {
                    middle: [,'infobar'],
                    left: ["back"],
                    right: ["close"],
                },
                items: {
                    infobar: {
                        tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>из<span data-fancybox-count></span></div>',
                    },
                    back: {
                        tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="#031E16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
                    },
                },
                
            },
            on: {
                init: function () {
                    $(".fancybox-bg").fadeIn();
                },
                close: function () {
                    $(".fancybox-bg").fadeOut();
                },
            },
        });
    
        $(".fancybox-bg").on("click", function () {
            Fancybox.close();
        });
    }); 
}

initFancybox('swiper-gallery')
initFancybox('swiper-gallery-1')
initFancybox('swiper-gallery-2')
initFancybox('swiper-gallery-3')
initFancybox('swiper-gallery-4')
initFancybox('swiper-gallery-5')
initFancybox('swiper-gallery-6')
initFancybox('swiper-gallery-7')
initFancybox('swiper-gallery-8')
initFancybox('swiper-gallery-9')
initFancybox('swiper-gallery-10')