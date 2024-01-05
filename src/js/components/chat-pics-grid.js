import $ from "jquery";

$(function () {
    $(".chat__dialog__message--photo").each(function () {
        let numPhotos = $(this).find(".chat__dialog__message__image-wrapper").length;
        let windowWidth = $(window).width();

        if (numPhotos === 1) {
            $(this).css({
                "grid-template-rows": "1fr",
            });

            if (windowWidth < 769) {
                $(this).css({
                    "grid-template-columns": "46.4rem",
                    height: "34.2rem",
                });
            } else {
                $(this).css({
                    "grid-template-columns": "30.2rem",
                    height: "22.4rem",
                });
            }
        } else if (numPhotos === 2) {
            $(this).css({
                "grid-template-columns": "repeat(2, 1fr)",
                "grid-template-rows": "1fr",
            });

            if (windowWidth < 769) {
                $(this).css({
                    height: "22rem",
                });
            } else {
                $(this).css({
                    height: "16rem",
                });
            }
        } else if (numPhotos === 3) {
            $(this).css({
                "grid-template-columns": "repeat(2, 1fr)",
                "grid-template-rows": "repeat(2, 1fr)",
            });

            $(this).find(".chat__dialog__message__image-wrapper:eq(0)").css({
                "grid-row": "auto / span 2",
            });

            if (windowWidth < 769) {
                $(this).find(".chat__dialog__message__image-wrapper:gt(0)").css({
                    height: "21.9rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(0)").css({
                    height: "44rem",
                });
            } else {
                $(this).find(".chat__dialog__message__image-wrapper:gt(0)").css({
                    height: "16.3rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(0)").css({
                    height: "32.8rem",
                });
            }
        } else if (numPhotos === 4) {
            if (windowWidth < 769) {
                $(this).css({
                    "grid-template-columns": "repeat(2, 1fr)",
                    "grid-template-rows": "repeat(2, 21.9rem)",
                });
            } else {
                $(this).css({
                    "grid-template-columns": "repeat(2, 1fr)",
                    "grid-template-rows": "repeat(2, 16.3rem)",
                });
            }
        } else if (numPhotos === 5) {
            $(this).find(".chat__dialog__message__image-wrapper:lt(2)").css({
                "grid-column": "auto / span 3",
            });
            $(this).find(".chat__dialog__message__image-wrapper:gt(1)").css({
                "grid-column": "auto / span 2",
            });
            if (windowWidth < 769) {
                $(this).css({
                    "grid-template-columns": "repeat(6, 1fr)",
                    "grid-template-rows": "repeat(2, 21.9rem)",
                });
            } else {
                $(this).css({
                    "grid-template-columns": "repeat(6, 1fr)",
                    "grid-template-rows": "repeat(2, 16rem)",
                });
            }
        } else if (numPhotos === 6) {
            $(this).css({
                "grid-template-columns": "repeat(2, 1fr)",
            });
            if (windowWidth < 769) {
                $(this).css({
                    "grid-template-rows": "repeat(3, 21.2rem)",
                });
            } else {
                $(this).css({
                    "grid-template-rows": "repeat(3, 16rem)",
                });
            }
        } else if (numPhotos === 7) {
            $(this).css({
                "grid-template-columns": "repeat(6, 1fr)",
                "grid-template-rows": "repeat(3, 16rem)",
            });
            $(this).find(".chat__dialog__message__image-wrapper:lt(4)").css({
                "grid-column": "auto / span 3",
            });
            $(this).find(".chat__dialog__message__image-wrapper:gt(3)").css({
                "grid-column": "auto / span 2",
            });

            if (windowWidth < 769) {
                $(this).css({
                    "grid-template-rows": "repeat(3, 21.2rem)",
                });
            } else {
                $(this).css({
                    "grid-template-rows": "repeat(3, 16rem)",
                });
            }
        } else if (numPhotos === 8) {
            $(this).css({
                "grid-template-columns": "repeat(6, 1fr)",
            });

            $(this).find(".chat__dialog__message__image-wrapper:lt(2)").css({
                "grid-column": "auto / span 3",
            });
            $(this).find(".chat__dialog__message__image-wrapper:gt(1)").css({
                "grid-column": "auto / span 2",
            });

            if (windowWidth < 769) {
                $(this).css({
                    "grid-template-rows": "repeat(3, 21.2rem)",
                });
            } else {
                $(this).css({
                    "grid-template-rows": "repeat(3, 16rem)",
                });
            }
        } else if (numPhotos === 9) {
            $(this).css({
                "grid-template-columns": "repeat(3, 1fr)",
            });

            if (windowWidth < 769) {
                $(this).css({
                    "grid-template-rows": "repeat(3, 21.2rem)",
                });
            } else {
                $(this).css({
                    "grid-template-rows": "repeat(3, 16rem)",
                });
            }
        } else if (numPhotos === 10) {
            $(this).css({
                "grid-template-columns": "repeat(12, 1fr)",
            });
            $(this).find(".chat__dialog__message__image-wrapper:lt(6)").css({
                "grid-column": "auto / span 4",
            });
            $(this).find(".chat__dialog__message__image-wrapper:gt(5):lt(9)").css({
                "grid-column": "auto / span 3",
            });

            if (windowWidth < 769) {
                $(this).css({
                    "grid-template-rows": "repeat(3, 21.2rem)",
                });
            } else {
                $(this).css({
                    "grid-template-rows": "repeat(3, 16rem)",
                });
            }
        }
    });
});