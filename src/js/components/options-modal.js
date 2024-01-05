import $ from "jquery";

$(function () {
    $('[data-modal="options-modal"]').on("click", () => {
        $(".options-modal").addClass("active");
        $(".options-modal-wrapper").addClass("active");
    });

    $(".options-modal__item").on("click", () => {
      $(".options-modal").removeClass("active");
      $(".options-modal-wrapper").removeClass("active");
      $('body').removeClass('lock');
    });
});
