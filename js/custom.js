$(document).ready(function () {
	// navigation click actions	

	$('.scroll-link').on('click', function (event) {
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 1000);
	});
	// scroll to top action
	$('.scroll-top').on('click', function (event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 1000);
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});
	
	// scroll fade in
	$('.fadeInStart').animate({
		'opacity': '1'
	}, 500);

	$(function () {
		$(window).scroll(function () {

			$('.page-section').each(function (i) {

				var top_of_object = $(this).position().top;
				var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
				var bottom_of_window = bottom_of_window - 100;

				if (bottom_of_window > top_of_object) {

					$(this).animate({ 'opacity': '1' }, 1000);

				}
			});

		});
	});

	// scroll function
	function scrollToID(id, speed) {
		var offSet = 60; //sesuai margin-top si heightHeader
		var targetOffset = $(id).offset().top - offSet;
		var mainNav = $('#main-nav');
		$('html,body').animate({ scrollTop: targetOffset }, 750);
		if (mainNav.hasClass("open")) {
			mainNav.css("height", "1px").removeClass("in").addClass("collapse");
			mainNav.removeClass("open");
		}
	}
	if (typeof console === "undefined") {
		console = {
			log: function () { }
		};
	}

});


