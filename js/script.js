$(window).on("load",  ()=>{
	$(".loader .inner").fadeOut(500, ()=>{
		$(".loader").fadeOut(750);
	});
})


$(document).ready(function() {

	$('#slides').superslides({
		animation:"fade",
		play:3000,
		pagination:false
	});

	var typed = new Typed(".typed", {
		strings:["Master of Engineer" ,"Enjoy coding", "Enjoy life"],
		typeSpeed:80,
		loop:true,
		startDelay:1000,
		showCursor:false
	});


	$("#navgation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop:targetPosition- 50}, "slow");
	});

	const nav =$('#navgation');
	const navTag=nav.offset().top;

	$(window).on("scroll", stickyNavgation);

	function stickyNavgation(){
		const body = $("body");

		if($(window).scrollTop()>= navTag){
			body.addClass("fixedNav");
			body.css("padding-top", nav.outerHeight());
		}
		else{
			body.removeClass("fixedNav");
			body.css("padding-top", 0);
		}
	}
	
});