$(document).ready(function() {
	$(".slider").not(":first").hide();
	$(".projects__wrapper .projects__header-tab").click(function(){
		$(".projects__wrapper .projects__header-tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".slider").hide().eq($(this).index()).fadeIn();
		$(".slider").slick("refresh");
	}).eq(0).addClass("active");

	$(".slider").slick({
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive:[
		{
			breakpoint: 880,
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
		},
		]
	});

	$(".skills__slider").slick({
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive:[
		{
			breakpoint: 880,
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
		},
		]
	});

});



