import $ from "jquery";

$(function () {
    $(".btn--price").on("click", () => {
        if ($(window).width() < 769) {
            $(".currency-modal").addClass("active");
            $("body").addClass("lock");
            $(".options-modal-wrapper").addClass("active");
        } else {
            $(".currency-list").slideToggle();
            $(".btn--price svg").toggleClass("open");
        }
    });
});
