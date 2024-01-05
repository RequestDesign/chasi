import $ from "jquery";

$(function () {
    $('.creating-adv__switcher-content').hide();
    $('.creating-adv__switcher-content[data-content="cardsAwaiting"]').show();

    $('.switcher-cards').on('click', function () {
        $('.switcher-cards').removeClass('switcher-cards--active');
        $(this).addClass('switcher-cards--active');
        $('.creating-adv__switcher-content').hide();
        let switcherValue = $(this).data('switcher');
        $('.creating-adv__switcher-content[data-content="' + switcherValue + '"]').show();
    })
})

$(document).on('click', function(e) {
    if (!$(e.target).closest('.creating-adv__card__options').length) {
        $('.creating-adv__card__options').hide();
    }
});

$(".btn--edit").on('click', function(e){
    e.stopPropagation();
    $('.creating-adv__card__options').not($(this).siblings('.creating-adv__card__options')).hide();
    $(this).siblings('.creating-adv__card__options').toggle();
});
