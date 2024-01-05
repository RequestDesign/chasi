import $ from "jquery";

$(function () {
    const promotionPayment = $(".promotion__payment");
    const promotionMobInfo = $(".promotion__info_mob");
    const confirmPaymentBtn = $("#btnConfitmPayment");
    const publishBtn = $("#btnPublishAdv");
    const continueBtnInfo = $("#btnContinueInfo");
    const continueBtn = $("#btnContinuePayment");
    const noPromotionCheckbox = $(".promotion__no-promotion__input-wrapper input");
    const tariffCheckbox = $('.promotion__tariff__input-wrapper input');
    const promInfo = $('.promotion__info');
    const checkboxes = tariffCheckbox.add(noPromotionCheckbox);
    const btnBack = $(".btn--go-back");
    const btnBackInfo = $(".btn--go-back_info");

    //hide all btns except publishBtn
    promotionPayment.hide();
    confirmPaymentBtn.hide();
    continueBtn.hide();
    promotionMobInfo.hide();
    continueBtnInfo.hide();
    promInfo.hide();

    //tariffCheckbox event listener
    tariffCheckbox.on("change", function () {
        if (!window.matchMedia("(max-width: 768px)").matches) {
            //desktop
            promotionPayment.toggle(this.checked);
            confirmPaymentBtn.toggle(this.checked);
            publishBtn.hide();
            promInfo.show()
        } else {
            //mobile
            publishBtn.hide(this.checked);
            continueBtnInfo.toggle(this.checked);

            continueBtnInfo.on("click", function () {
                continueBtnInfo.hide()
                continueBtn.show();
                promotionMobInfo.show();

                const promFirstPage = $(".promotion__header:first, .promotion__top, .promotion__tariff, .promotion__no-promotion");
                promFirstPage.hide();

                btnBackInfo.on("click", function () {
                    continueBtnInfo.show();
                    continueBtn.hide()
                    promotionMobInfo.hide();
                    promFirstPage.show();
                });
            });

            continueBtn.on("click", function () {
                continueBtn.hide()
                promotionMobInfo.hide();
                confirmPaymentBtn.show();
                promotionPayment.show();

                btnBack.on("click", function () {
                    continueBtn.show();
                    promotionMobInfo.show();
                    confirmPaymentBtn.hide();
                    promotionPayment.hide();
                });
            });
        }
    });

    //noPromotionCheckbox event listener
    noPromotionCheckbox.on("change", function () {
        if (this.checked) {
            promotionPayment.hide();
            confirmPaymentBtn.hide();
            continueBtn.hide();
            publishBtn.show();
            promInfo.hide()
        }
    });

    // if no checkboxes checked
    // checkboxes.on("change", function () {
    //     if (!tariffCheckbox.prop("checked") && !noPromotionCheckbox.prop("checked")) {
    //         publishBtn.show();
    //     }
    // });
});