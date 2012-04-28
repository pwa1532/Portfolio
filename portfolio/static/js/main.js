/*
 * Image preview script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */
 
this.imagePreview = function(){	
	/* CONFIG */
		
		xOffset = 10;
		yOffset = 30;
		
		
		$("a.preview").click(function(e){
			var id = $(e.currentTarget).attr("id");
			console.log(id);
			var i = 0;
			var newId = $(this).attr("href");
			//id.charAt(id.length - 1);
			//while (i < id.length - 1){
			//	newId += id.charAt(i);
			//	i++;
			//}
			console.log(newId);
			$(newId).css("position", "absolute");
			$(newId).css("z-index", "100");
			$(newId).toggle();
			$(newId).click(function(e){ $(this).css("display", "none");});
		});
		
		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result
		
	/* END CONFIG */
	/*
	$("a.preview").hover(function(e){
		this.t = this.title;
		this.title = "";	
		var c = (this.t != "") ? "<br/>" + this.t : "";
		$("body").append("<p id='preview'><img src='"+ this.href +"' alt='Image preview' />"+ c +"</p>");								 
		$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");						
    },
	function(){
		this.title = this.t;	
		$("#preview").remove();
    });	
	$("a.preview").mousemove(function(e){
		$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});		
*/	
};


// starting the script on page load
$(document).ready(function(){
	imagePreview();
});