import $ from "jquery";
import Swiper from "swiper";
import "swiper/css";

//show chat on dialog click
$(function () {
    if (window.innerWidth < 769) {
        $(".chat__switcher-content").hide();

        $(".chat__dialogs__item").on("click", function () {
            $(".chat__switcher-content").hide();
            let switcherValue = $(this).data("switcher");
            $('.chat__switcher-content[data-content="' + switcherValue + '"]').show();
            $(".chat__dialog").css("right", "0%");

            let activeMessagesContainer = $('.chat__switcher-content[data-content="' + switcherValue + '"]').find(".chat__dialog__messages");
            activeMessagesContainer.addClass("active");
            activeMessagesContainer.scrollTop(activeMessagesContainer.prop("scrollHeight"));
            updateButtonVisibility();
        });

        $(".btn--close-dialog").on("click", function () {
            $(".chat__dialog").css("right", "-100%");
        });
    } else {
        $(".chat__switcher-content").hide();
        $('.chat__switcher-content[data-content="dialogFirstVisit"]').show();

        $(".chat__dialogs__item").on("click", function () {
            $(".chat__switcher-content").hide();
            let switcherValue = $(this).data("switcher");
            $('.chat__switcher-content[data-content="' + switcherValue + '"]').show();
            let activeMessagesContainer = $('.chat__switcher-content[data-content="' + switcherValue + '"]').find(".chat__dialog__messages");
            activeMessagesContainer.addClass("active");
            activeMessagesContainer.scrollTop(activeMessagesContainer.prop("scrollHeight"));
            updateButtonVisibility();
        });
    }
});

//add photo
$(".input--add-photo").on("change", function () {
    let input = this;
    let thumbnailsContainer = $(this).closest(".chat__dialog__footer").find(".chat__dialog__thumbnails-container .swiper-wrapper");

    if (input.files && input.files.length > 0) {
        for (let i = 0; i < input.files.length; i++) {
            let file = input.files[i];
            let reader = new FileReader();
            let thumb = $('<div class="chat__dialog__thumbnail swiper-slide"></div>');

            reader.onload = function (e) {
                thumb.append(
                    '<img class="chat__dialog__thumbnail__img" src="' +
                        e.target.result +
                        '" alt="Thumbnail" /><button class="chat__dialog__thumbnail__btn-delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M8 8L16 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 8L8 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
                );
                input.value = "";
                updateButtonVisibility();
                if (thumb.length > 0) {
                    updateSwiper(thumbnailsContainer);
                }
            };

            reader.readAsDataURL(file);
            thumbnailsContainer.append(thumb);
            thumbnailsContainer.closest(".chat__dialog__messages.active").scrollTop(thumbnailsContainer.closest(".chat__dialog__messages.active").prop("scrollHeight"));

            const $dialog = $(".chat__switcher-content:visible");
            const $sendButton = $dialog.find(".btn--send");
            $sendButton.show();

            if (thumb.length === 0) {
                $sendButton.hide();
            } else {
                $sendButton.show();
            }
        }
    }
});

//delete photo
$(document).on("click", ".chat__dialog__thumbnail__btn-delete", function (e) {
    e.preventDefault();
    $(this).closest(".chat__dialog__thumbnail").remove();
    updateButtonVisibility();
});

//show/hide send message btn
const updateButtonVisibility = function () {
    const $dialog = $(".chat__switcher-content:visible");
    const $messageTextarea = $dialog.find(".chat__dialog__textarea");
    const $sendButton = $dialog.find(".btn--send");
    const thumbnailsContainer = $dialog.find(".chat__dialog__thumbnails-container");

    if ($messageTextarea.length === 0) {
        return;
    }

    function toggleSendButton() {
        const text = $messageTextarea.val().trim();
        const thumbs = thumbnailsContainer.find(".chat__dialog__thumbnail");

        if (text !== "" || thumbs.length > 0) {
            $sendButton.show();
        } else {
            $sendButton.hide();
        }
    }

    toggleSendButton();

    $messageTextarea.off("input").on("input", toggleSendButton);
    const observer = new MutationObserver(toggleSendButton);
    observer.observe(thumbnailsContainer[0], { childList: true, subtree: true });
};

//swiper
function updateSwiper(thumbnailsContainer) {
    const swiperContainer = thumbnailsContainer.closest(".chat__dialog__thumbnails-container");

    if (swiperContainer.swiper) {
        swiperContainer.swiper.destroy();
    }

    new Swiper(swiperContainer[0], {
        slidesPerView: "auto",
    });
}