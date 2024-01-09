import $ from "jquery";

$(function () {
	$(".profile__faq_top").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("active")) {
			$(".profile__faq_bottom").slideUp(400);
			$(".profile__faq_top").removeClass("active");
		}

		$this.toggleClass("active");
		$this.next().slideToggle();
	});
})