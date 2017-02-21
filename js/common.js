$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Stellar
	$.stellar({
		verticalOffset: 250
	});

	//Waypoint
	$('.sect-1__icon-wrap').waypoint(function() {
		
		this.element.classList.remove('hidded');		
		this.element.classList.add('fadeIn');		
	}, {offset: '70%'});

	$('.main-visual__circle').waypoint(function() {
		
		this.element.classList.remove('hidded');		
		this.element.classList.add('swing');		
	}, {offset: '70%'});
	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	//Owl
	$('.owl-carousel').owlCarousel({
		items: 1
	});

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
