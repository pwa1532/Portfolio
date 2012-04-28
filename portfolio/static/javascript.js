
$("#all").click(function(){
	$("#projectNav li").css("background-color", "#F1F1F1");
	$("#projectNav li").css("color", "#486F82");
	$("#projectNav li").hover(function() {$(this).css("background-color", "#D1D1D1");}, function() {$(this).css("background-color", "#F1F1F1");});
	$("#all").css("background-color", "#486F82");
	$("#all").css("color", "#F1F1F1");
	$("#all").unbind('mouseenter').unbind('mouseleave');
	appear("#pervasive");
	appear("#quicken");
	appear("#socialu");
	appear("#pec");
	appear("#lecture_tools");
	appear("#adler");
	appear("#steps");
	appear("#infovis");
});

$("#all").click();

function disappear(box){
	$(box).parent().animate({opacity:0.0},500, function(){
		$(box).parent().slideUp(500);
	});
}

function appear(box){
	$(box).parent().delay(500).slideDown(500, function(){
		$(box).parent().animate({opacity:1.0},500);
	});
}


$("#development").click(function(){
	$("#projectNav li").css("background-color", "#F1F1F1");
	$("#projectNav li").css("color", "#486F82");
	$("#projectNav li").hover(function() {$(this).css("background-color", "#D1D1D1");}, function() {$(this).css("background-color", "#F1F1F1");});
	$("#development").css("background-color", "#486F82");
	$("#development").css("color", "#F1F1F1");
	$("#development").unbind('mouseenter').unbind('mouseleave');
	disappear("#quicken");
	disappear("#socialu");
	disappear("#pec");
	disappear("#commcap");
	disappear("#pervasive");
	appear("#lecture_tools");
	appear("#adler");
	appear("#steps");
	appear("#infovis");
});
$("#design").click(function(){
	$("#projectNav li").css("background-color", "#F1F1F1");
	$("#projectNav li").css("color", "#486F82");
	$("#projectNav li").hover(function() {$(this).css("background-color", "#D1D1D1");}, function() {$(this).css("background-color", "#F1F1F1");});
	$("#design").css("background-color", "#486F82");
	$("#design").css("color", "#F1F1F1");
	$("#design").unbind('mouseenter').unbind('mouseleave');
	disappear("#lecture_tools");
	disappear("#pec");
	disappear("#steps");
	appear("#pervasive");
	appear("#quicken");
	appear("#adler");
	appear("#commcap");
	appear("#socialu");
	appear("#infovis");

});
$("#evaluation").click(function(){
	$("#projectNav li").css("background-color", "#F1F1F1");
	$("#projectNav li").css("color", "#486F82");
	$("#projectNav li").hover(function() {$(this).css("background-color", "#D1D1D1");}, function() {$(this).css("background-color", "#F1F1F1");});
	$("#evaluation").css("background-color", "#486F82");
	$("#evaluation").css("color", "#F1F1F1");
	$("#evaluation").unbind('mouseenter').unbind('mouseleave');
	disappear("#lecture_tools");
	disappear("#steps");
	disappear("#commcap");
	disappear("#infovis");
	appear("#pervasive");
	appear("#quicken");
	appear("#socialu");
	appear("#pec");
	appear("#adler");
});

$("#steps").click(function(){
	window.location.href = "steps.html";
});

$("#lecture_tools").click(function(){
	window.location.href = "lecture_tools.html";
});

$("#adler").click(function(){
	window.location.href = "adler.html";
});

$("#pec").click(function(){
	window.location.href = "pec.html";
});

$("#quicken").click(function(){
	window.location.href = "quicken.html";
});

$("#socialu").click(function(){
	window.location.href = "socialu.html";
});

$("#commcap").click(function(){
	window.location.href = "commcap.html";
});

$("#infovis").click(function(){
	window.location.href = "infovis.html";
});

$("#pervasive").click(function(){
	window.location.href = "pervasive.html";
});

$(".contact .input").focus(function(){
	if($(this).css("color") == "rgb(85, 85, 85)"){
		$(this).css("color", "#333");
		$(this).val("");
	}
});

$("#send_message").click(function(){
	var email = $(".contact #email").val();
	var subject = $(".contact #subject").val();
	var message = $(".contact #message").val();
	$.get("sendMessage",
		{
			email: email,
			subject: subject,
			message: message
		},
		function(data) {
			window.location = "index.html";
		},
		'html');
	});
