import $ from "jquery";

if($(".adv-card__on-check").length > 0) {
    $(".pop-up").addClass("showed");
    setTimeout(() => {
        $(".pop-up").removeClass("showed");
        $('.adv-card__header').css('margin-bottom', '0rem');
    }, 5000);

    $(".pop-up").find("svg").on("click", () => {
        $(".pop-up").removeClass("showed");
        $('.adv-card__header').css('margin-bottom', '0rem');
    });
}
