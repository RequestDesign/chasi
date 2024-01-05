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
                    height: "34.2rem",
                });
            } else {
                $(this).css({
                    height: "22.4rem",
                });
            }
        } else if (numPhotos === 3) {
            $(this).css({
                "grid-template-columns": "repeat(3, 1fr)",
                "grid-template-rows": "1fr",
            });

            if (windowWidth < 769) {
                $(this).css({
                    height: "21.2rem",
                });
            } else {
                $(this).css({
                    height: "16rem",
                });
            }
        } else if (numPhotos === 4) {
            $(this).css({
                "grid-template-columns": "repeat(3, 1fr)",
                "grid-template-rows": "auto auto",
            });
            $(this).find(".chat__dialog__message__image-wrapper:eq(3)").css({
                "grid-column": "auto / span 3",
            });

            if (windowWidth < 769) {
                $(this).find(".chat__dialog__message__image-wrapper:lt(3)").css({
                    height: "21.2rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(3)").css({
                    height: "34.2rem",
                });
            } else {
                $(this).find(".chat__dialog__message__image-wrapper:lt(3)").css({
                    height: "16rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(3)").css({
                    height: "22.4rem",
                });
            }
        } else if (numPhotos === 5) {
            $(this).css({
                "grid-template-columns": "repeat(6, 1fr)",
                "grid-template-rows": "auto auto",
            });

            $(this).find(".chat__dialog__message__image-wrapper:lt(3)").css({
                "grid-column": "auto / span 2",
            });
            $(this).find(".chat__dialog__message__image-wrapper:eq(3)").css({
                "grid-column": "auto / span 3",
            });
            $(this).find(".chat__dialog__message__image-wrapper:eq(4)").css({
                "grid-column": "auto / span 3",
            });

            if (windowWidth < 769) {
                $(this).find(".chat__dialog__message__image-wrapper:lt(3)").css({
                    height: "21.2rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(3)").css({
                    height: "22.4rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(4)").css({
                    height: "22.4rem",
                });
            } else {
                $(this).find(".chat__dialog__message__image-wrapper:lt(3)").css({
                    height: "16rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(3)").css({
                    height: "22.4rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(4)").css({
                    height: "22.4rem",
                });
            }
        } else if (numPhotos === 6) {
            $(this).css({
                "grid-template-columns": "repeat(3, 1fr)",
            });
            if (windowWidth < 769) {
                $(this).css({
                    "grid-template-rows": "repeat(2, 21.2rem)",
                });
            } else {
                $(this).css({
                    "grid-template-rows": "repeat(2, 16rem)",
                });
            }
        } else if (numPhotos === 7) {
            $(this).css({
                "grid-template-columns": "repeat(12, 1fr)",
                "grid-template-rows": "auto auto",
            });
            $(this).find(".chat__dialog__message__image-wrapper:lt(4)").css({
                "grid-column": "auto / span 3",
            });
            $(this).find(".chat__dialog__message__image-wrapper:eq(4)").css({
                "grid-column": "auto / span 4",
            });
            $(this).find(".chat__dialog__message__image-wrapper:eq(5)").css({
                "grid-column": "auto / span 4",
            });
            $(this).find(".chat__dialog__message__image-wrapper:eq(6)").css({
                "grid-column": "auto / span 4",
            });

            if (windowWidth < 769) {
                $(this).find(".chat__dialog__message__image-wrapper:lt(4)").css({
                    width: "14.85rem",
                    height: "21.2rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(4)").css({
                    width: "19.86rem",
                    height: "21.2rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(5)").css({
                    width: "19.86rem",
                    height: "21.2rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(6)").css({
                    width: "19.86rem",
                    height: "21.2rem",
                });
            } else {
                $(this).find(".chat__dialog__message__image-wrapper:lt(4)").css({
                    width: "12.45rem",
                    height: "16rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(4)").css({
                    width: "16.6rem",
                    height: "16rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(5)").css({
                    width: "16.6rem",
                    height: "16rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:eq(6)").css({
                    width: "16.6rem",
                    height: "16rem",
                });
            }
        } else if (numPhotos === 8) {
            $(this).css({
                "grid-template-columns": "repeat(6, 1fr)",
            });
            $(this).find(".chat__dialog__message__image-wrapper:lt(6)").css({
                "grid-column": "auto / span 2",
            });
            $(this).find(".chat__dialog__message__image-wrapper:eq(6)").css({
                "grid-column": "auto / span 3",
            });
            $(this).find(".chat__dialog__message__image-wrapper:eq(7)").css({
                "grid-column": "auto / span 3",
            });

            if (windowWidth < 769) {
                $(this).css({
                    "grid-template-rows": "21.2rem 21.2rem 21.2rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:lt(6)").css({
                    width: "19.86rem",
                });
            } else {
                $(this).css({
                    "grid-template-rows": "16rem 16rem 16rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:lt(6)").css({
                    width: "16.6rem",
                });
            }
        } else if (numPhotos === 9) {
            $(this).css({
                "grid-template-columns": "repeat(12, 1fr)",
            });
            $(this).find(".chat__dialog__message__image-wrapper:lt(4)").css({
                "grid-column": "auto / span 3",
            });
            $(this).find(".chat__dialog__message__image-wrapper:gt(3):lt(7)").css({
                "grid-column": "auto / span 4",
            });
            $(this).find(".chat__dialog__message__image-wrapper:eq(7)").css({
                "grid-column": "auto / span 6",
            });
            $(this).find(".chat__dialog__message__image-wrapper:eq(8)").css({
                "grid-column": "auto / span 6",
            });

            if (windowWidth < 769) {
                $(this).css({
                    "grid-template-rows": "21.2rem 21.2rem 21.2rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:lt(4)").css({
                    width: "14.85rem",
                });
            } else {
                $(this).css({
                    "grid-template-rows": "16rem 16rem 16rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:lt(4)").css({
                    width: "12.45rem",
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
                    "grid-template-rows": "21.2rem 21.2rem 21.2rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:lt(6)").css({
                    width: "19.86rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:gt(5):lt(9)").css({
                    width: "14.85rem",
                });
            } else {
                $(this).css({
                    "grid-template-rows": "16rem 16rem 16rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:lt(6)").css({
                    width: "16.6rem",
                });
                $(this).find(".chat__dialog__message__image-wrapper:gt(5):lt(9)").css({
                    width: "12.45rem",
                });
            }
        }
    });
});