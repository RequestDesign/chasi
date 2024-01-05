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
	$(this).closest('.dropdown').toggleClass('open')
	$('.dropdown__blur').toggleClass('open')
});

$(document).on('click', function (e) {
	if ($(e.target).closest(".dropdown").length === 0) {
		$(".dropdown").removeClass('open')
		$('.dropdown__blur').removeClass('open')
	}
});