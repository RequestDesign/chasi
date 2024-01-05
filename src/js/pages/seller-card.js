import $ from "jquery";
$('.seller-card-modal__stars').find('label').on('click', function(evt) {
    let $this = $(this);
    let index = $this.index();
    let $switcher = $this.closest('.seller-card-modal__content');
    let $switcher_container = $switcher.find('.seller-card-modal__container');
    let $switcher_contents = $switcher_container.find('.seller-card-modal__box');
    $this.siblings('.star').removeClass('active');
    $this.addClass('active');
    $switcher_contents.removeClass('active')
    $($switcher_contents[Math.trunc(index/2)]).addClass('active');
    $('.seller-card-modal__top').addClass('active')
});

$('.seller-card-modal__tag').find('input').on('change', function(evt) {
    if($(this).closest('.seller-card-modal__tags').find('input:checked').length) {
        $(this).closest('.seller-card-modal__form').find('.btn__green').prop("disabled", false);
    } else {
        $(this).closest('.seller-card-modal__form').find('.btn__green').prop("disabled", true);
    }
});
