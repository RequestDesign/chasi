import $ from "jquery";

$(function () {
    $('[data-modal="options"]').on("click", () => {
        $(".options-modal").addClass("active");
        $(".bottom-sheet-wrapper").addClass("active");
    });

    $(".options-modal .bottom-sheet__item").on("click", () => {
      $(".options-modal").removeClass("active");
      $(".bottom-sheet-wrapper").removeClass("active");
      $('body').removeClass('lock');
    });
});