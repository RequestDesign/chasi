import $ from "jquery";

$(function () {
    $('[data-modal="currency"]').on('click', (e) => {
        e.preventDefault()
        if ($(window).width() < 769) {
            $(".currency-modal").addClass("active");
            $("body").addClass("lock");
            $(".bottom-sheet-wrapper").addClass("active");
        } else {
            $(".currency-list").slideToggle();
            $(".btn--price svg").toggleClass("open");
            $("body").removeClass("lock");
        }
    });
});