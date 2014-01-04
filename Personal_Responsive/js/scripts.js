$("header a").each(function(index){
	var that = $(this);
	
	that.hover(function(){
		var randColor = 'rgb('
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ')';
            
		var that = $(this);

		that.find("h1").stop().animate({height: 0, opacity: 0});
		that.find("h2").stop().animate({height: $(this).height(), color: randColor});
	}, function(){
		var that = $(this);
		
		that.find("h1").stop().animate({height: $(this).height(), opacity: 1});
		that.find("h2").stop().animate({height: 0});
	});
});

//Fade in effect
$("#profilepic_tile").hide().delay(50).fadeIn();
$("#phone_tile").hide().delay(200).fadeIn();
$("#name_tile").hide().delay(300).fadeIn();
$("#about_tile").hide().delay(400).fadeIn();

//Facebook Animation
$("#fb_tile").hide().delay(500).fadeIn().on("mouseenter", function(){
	var that = $(this);
	
	that.find("img").stop().animate({left: 30});
	that.find("h2").stop().delay(200).animate({opacity: 1});
}).on("mouseleave", function(){
	var that = $(this);
	
	that.find("img").stop().delay(200).animate({left: "40%"});
	that.find("h2").stop().animate({opacity: 0});
});

//Email Animation
$("#email_tile").hide().delay(600).fadeIn().on("mouseenter", function(){
	var that = $(this);
	
	that.find("img").stop().animate({opacity: 0}, "fast");
	that.find("h2").stop().animate({opacity: 1});
}).on("mouseleave", function(){
	var that = $(this);
	
	that.find("img").stop().animate({opacity: 1});
	that.find("h2").stop().animate({opacity: 0}, "fast");
});

var documentBG = $("html");
var color;

//My Work Tile Animation
$(".work_tile").on("mouseenter", function(){
	var that = $(this);
	
	color = that.css("background-color");
	
	that.find(".macbook").stop().animate({opacity: 0}, "fast");
	that.find(".hidden").stop().animate({opacity: 1}, "fast");
	that.stop().animate({"backgroundColor": "#22568f"}, "fast");
}).on("mouseleave", function(){
	var that = $(this);
	
	that.find(".macbook").stop().animate({opacity: 1}, "fast");
	that.find(".hidden").stop().animate({opacity: 0}, "fast");
	that.stop().animate({"backgroundColor": color}, "fast");
});










