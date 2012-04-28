$(document).ready(function() {



	//$("#10w").hover();



	/*
	$(document).pngFix();
	
	$("#iphone").animate({ 
        left: "0px"
      }, 600 );
      
    $("li.switch1").hover(function(){
    	$("#switcher #pill").stop(true, true);
		$("#switcher #pill").animate( { left: "2px" }, 250);
		$(".scroll").animate( { left: "0px" }, 350);
		$("#steps li.step1").fadeIn("slow");
		$("#steps li.step2").fadeOut("fast");
		$("#steps li.step3").fadeOut("fast");
		$("#steps li.step4").fadeOut("fast");
	},
		function(){$(this).addClass("done");
	});

	$("li.switch2").hover(function(){
		$("#switcher #pill").stop(true, true);
		$("#switcher #pill").animate( { left: "92px" }, 250);
		$(".scroll").animate( { left: "-400px" }, 350);
		$("#steps li.step1").fadeOut("fast");
		$("#steps li.step2").fadeIn("slow");
		$("#steps li.step3").fadeOut("fast");
		$("#steps li.step4").fadeOut("fast");
	},
		function(){$(this).addClass("done");
	});
	
	$("li.switch3").hover(function(){
		$("#switcher #pill").stop(true, true);
		$("#switcher #pill").animate( { left: "184px" }, 250);
		$(".scroll").animate( { left: "-800px" }, 350);
		$("#steps li.step1").fadeOut("fast");
		$("#steps li.step2").fadeOut("fast");
		$("#steps li.step3").fadeIn("slow");
		$("#steps li.step4").fadeOut("fast");
	},
		function(){$(this).addClass("done");
	});
	
	$("li.switch4").hover(function(){
		$("#switcher #pill").stop(true, true);
		$("#switcher #pill").animate( { left: "274px" }, 250);
		$(".scroll").animate( { left: "-1200px" }, 350);
		$("#steps li.step1").fadeOut("fast");
		$("#steps li.step2").fadeOut("fast");
		$("#steps li.step3").fadeOut("fast");
		$("#steps li.step4").fadeIn("slow");
	},
		function(){$(this).addClass("done");
	});
	
	$('#screenshots a#one').fancyZoom({directory: '/img/'});
	$('#screenshots a#two').fancyZoom({directory: '/img/'});
	$('#screenshots a#three').fancyZoom({directory: '/img/'});
	
	$('#screenshots2 a#one').fancyZoom({directory: '/img/'});
	$('#screenshots2 a#two').fancyZoom({directory: '/img/'});
	$('#screenshots2 a#three').fancyZoom({directory: '/img/'});
	
	$('#screenshots3 a#one').fancyZoom({directory: '/img/'});
	$('#screenshots3 a#two').fancyZoom({directory: '/img/'});
	$('#screenshots3 a#three').fancyZoom({directory: '/img/'});
	
	$('#screenshots4 a#one').fancyZoom({directory: '/img/'});
	$('#screenshots4 a#two').fancyZoom({directory: '/img/'});
	$('#screenshots4 a#three').fancyZoom({directory: '/img/'});
	
	$('#screenshots5 a#one').fancyZoom({directory: '/img/'});
	$('#screenshots5 a#two').fancyZoom({directory: '/img/'});
	$('#screenshots5 a#three').fancyZoom({directory: '/img/'});
	
	$('#screenshots6 a#one').fancyZoom({directory: '/img/'});
	$('#screenshots6 a#two').fancyZoom({directory: '/img/'});
	$('#screenshots6 a#three').fancyZoom({directory: '/img/'});
	
	
	
	$("input.sign-name").focus(function(){
		if ( $(this).val() == "Enter your name")
        $(this).val('');
	});
	$("input.sign-name").blur(function(){
		if ( $(this).val() == "")
		$(this).val('Enter your name');
	});
	
	$("input.sign-email").focus(function(){
		if ( $(this).val() == "Enter your email address")
        $(this).val('');
	});
	$("input.sign-email").blur(function(){
		if ( $(this).val() == "")
		$(this).val('Enter your email address');
	});
	
	$("#head span a").hover(function(){
		$(this).children().stop(true, true);
    	$(this).children().fadeIn("fast");
	},
		function(){$(this).children().fadeOut("fast");
	});
	
	$("#head strong").hover(function(){
		$(this).stop(true, true);
    	$(this).fadeTo("fast", 0.8);
	},
		function(){$(this).fadeTo("fast", 1.0);
	});
	
	$("#head h1 a").hover(function(){
		$(this).children().stop(true, true);
    	$(this).children().fadeIn("fast");
	},
		function(){$(this).children().fadeOut("fast");
	});
	
	/*$('#screenshots a#one').hover(function(){
			$("#screenshots img").stop(true, true);
			$('#screenshots a#two img, #screenshots a#three img, #screenshots a#four img').fadeTo("fast", 0.4);
		},
		function(){
			$('#screenshots a#two img, #screenshots a#three img, #screenshots a#four img').fadeTo("slow", 1.0);
		}
	);
	
	$('#screenshots a#two').hover(function(){
			$("#screenshots img").stop(true, true);
			$('#screenshots a#one img, #screenshots a#three img, #screenshots a#four img').fadeTo("fast", 0.4);
		},
		function(){
			$('#screenshots a#one img, #screenshots a#three img, #screenshots a#four img').fadeTo("slow", 1.0);
		}
	);
	
	$('#screenshots a#three').hover(function(){
			$("#screenshots img").stop(true, true);		
			$('#screenshots a#one img, #screenshots a#two img, #screenshots a#four img').fadeTo("fast", 0.4);
		},
		function(){
			$('#screenshots a#one img, #screenshots a#two img, #screenshots a#four img').fadeTo("slow", 1.0);
		}
	);
	
	$('#screenshots a#four').hover(function(){
			$("#screenshots img").stop(true, true);
			$('#screenshots a#one img, #screenshots a#two img, #screenshots a#three img').fadeTo("fast", 0.4);
		},
		function(){
			$('#screenshots a#one img, #screenshots a#two img, #screenshots a#three img').fadeTo("slow", 1.0);
		}
	);
	*/
});