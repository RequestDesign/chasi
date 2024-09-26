import $ from "jquery";
$('.profile__form_item input').on('input', function(evt) {
	let $this = $(this);
	let $parent = $this.parent();
	let $placeholder = $parent.find('.profile__form_name');

	$this.removeClass('invalid');

	if ($this.val()) {
		$placeholder.addClass('active');
	} else {
		$placeholder.removeClass('active');
	}
});

$('.dropdown_top').on('click', function(evt) {
	// $(this).closest('.dropdown').toggleClass('open')
	// $('.dropdown__blur').toggleClass('open')


	$('.dropdown__blur').toggleClass('open')
	$(this).closest('.dropdown').find('.dropdown_bottom').slideToggle()
	$(this).closest('.dropdown').toggleClass('open')

	$('.dropdown_top').not(this).each(function () {
		// $('.characteristic').removeClass('open')
		$(this).closest('.dropdown').find('.dropdown_bottom').slideUp()
		$(this).closest('.dropdown').removeClass('open')
	   
	});

});

$(document).on('click', function (e) {
	// if ($(e.target).closest(".dropdown").length === 0) {
		if (e.target.classList.contains('dropdown__blur') || ($(e.target).closest(".dropdown").length === 0 && window.innerWidth>768)){
		$(".dropdown").removeClass('open')
		$('.dropdown__blur').removeClass('open')
		$(".dropdown").find('.dropdown_bottom').slideUp()
	}
});