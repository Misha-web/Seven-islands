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
});


