import $ from "jquery";

let timer;
let duration = 60;

export function startTimer() {
    let linkElement = $('.send-code-again');
    let timerElement = $('.send-code-again .time');

    if (timerElement.length === 0) {
        timerElement = $('<span class="time">01:00</span>');
        linkElement.append(timerElement);
    }

    duration = 60;

    timer = setInterval(function () {
        if (duration > 0) {
            duration--;
            let minutes = Math.floor(duration / 60);
            let seconds = duration % 60;
            timerElement.text(minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0'));
        } else {
            clearInterval(timer);
            linkElement.addClass('active');
            linkElement.text("Отправить код повторно");
            timerElement.text("");
        }
    }, 1000);
}

export function resetTimer() {
    destroyTimer();
    startTimer();
}

export function destroyTimer() {
    clearInterval(timer);
    $('.send-code-again .time').text("01:00");
    $('.send-code-again').removeClass('active');
}

$(document).on('click', '.send-code-again.active', function () {
    let linkElement = $('.send-code-again');
    linkElement.removeClass('active');
    linkElement.text("Отправить код повторно через ");
    resetTimer();
});

$('.modal-back, .modal-exit').on('click', function () {
    if ($(this).closest('.reset-password-modal').length) {
        destroyTimer();
    }
    if ($(this).closest('.change-tel-modal').length) {
        destroyTimer();
    }
    if ($(this).closest('.change-email-modal').length) {
        destroyTimer();
    }
});