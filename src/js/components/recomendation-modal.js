import $ from "jquery";

$(function () {
    $("[data-modal='recomendation']").on("click", () => {
        $(".recomendation-modal").addClass("active");
    });
});