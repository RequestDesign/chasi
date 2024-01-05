import $ from "jquery";

$('[data-modal="unpublish"]').on('click', () => {
    $('.unpublish-modal').addClass('active');
});

$('.btn--unpublish--modal').on('click', function () {
    $('.modal').removeClass('active');
	$('body').removeClass('lock');

    $('.pop-up').addClass('showed')
		setTimeout(()=> {
			$('.pop-up').removeClass('showed')
		}, 5000);
})
