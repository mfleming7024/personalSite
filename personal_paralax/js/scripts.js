jQuery(document).ready(function ($) {
    
    //Generating the random dots for the dot paralax
    var images = $("#slide3 img");
    var wHeight = $(window).height();
	var wWidth = $(window).width();
    images.each(function(){
	    var that = $(this);
	    var randomScale = Math.random() * 250;
	    that.css({
	    	"width": randomScale,
		    "position": "absolute",
		    "top": Math.random() * wHeight + "px",
		    "left": Math.random() * wWidth + "px",
		    "opacity": Math.random() * 1
	    });
	    var randomRange = Math.random() * 1.5 + 0.5;
	    console.log(randomRange);
	    $(this).attr("data-stellar-ratio", randomRange);
    });
    
    //initialise Stellar.js
    $(window).stellar();
    
});