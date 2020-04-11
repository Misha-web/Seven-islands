$(document).ready(function() {

	$(".js-tab-trigger").click(function(){
		let id = $(this).attr('data-tab'),
		content = $('.js-tab-content[data-tab="'+ id +'"]');

		$(".js-tab-trigger.active").removeClass("active");
		$(this).addClass("active");

		$(".js-tab-content.active").removeClass("active");
		content.addClass("active");
	});

	$(".slider").slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	$(".skills__slider").slick({
		arrows: false,
		autoplay: true,
		infinite: true,
		slidesToShow: 6,
		autoplaySpeed: 1000,
		responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 614,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 414,
			settings: {
				slidesToShow: 1,
			}
		},
		]
	});

	$(".awards__slider").slick({
		infinite: true,
		slidesToShow: 3,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				sliderToScroll: 1,
			}
		},
		{
			breakpoint: 614,
			settings: {
				slidesToShow: 1,
			}
		},
		]
	});

	$(".header__button").click(function(){
		$('.popup').toggleClass('show');
	});

	$(".close").click(function(){
		$('.popup').removeClass('show');
	});

	// Map

	let awards = $('.awards');
	let	awardsTop = awards.offset().top;
	$(window).bind('scroll', function() {
		let windowTop = $(this).scrollTop();
		if (windowTop > awardsTop) {
			$('.footer__map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1715.370201374641!2d40.521817216288!3d64.53644298377304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44183681aa449a41%3A0x84c7599b6e00d489!2z0L_RgNC-0YHQvy4g0KfRg9C80LHQsNGA0L7QstCwLdCb0YPRh9C40L3RgdC60L7Qs9C-LCAzOSwgMjgsINCQ0YDRhdCw0L3Qs9C10LvRjNGB0LosINCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjywgMTYzMTAw!5e0!3m2!1sru!2sua!4v1586511267819!5m2!1sru!2sua" allowfullscreen="" aria-hidden="false" tabindex="12"></iframe>')
			$(window).unbind('scroll');
		}
	});

});



