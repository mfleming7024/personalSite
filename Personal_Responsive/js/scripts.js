var randColor = "";

$("header a").each(function(index){
    var that = $(this);

    that.hover(function(){
        if ($(window).width() > 500) {
            randColor = 'rgb('
                + (Math.floor(Math.random() * 256)) + ','
                + (Math.floor(Math.random() * 256)) + ','
                + (Math.floor(Math.random() * 256)) + ')';

            var that = $(this);

            that.find("h1").stop().animate({height: 0, opacity: 0});
            that.find("h2").stop().animate({height: $(this).height(), color: randColor});
        } else {
            //mobile
        }
    }, function(){
        if ($(window).width() > 500) {
            var that = $(this);

            that.find("h1").stop().animate({height: $(this).height(), opacity: 1});
            that.find("h2").stop().animate({height: 0});
        } else {
            //mobile
        }
    });
});

//Fade in effect
$("#profilepic_tile").hide().delay(50).fadeIn();
$("#phone_tile").hide().delay(200).fadeIn();
$("#name_tile").hide().delay(300).fadeIn();
$("#about_tile").hide().delay(400).fadeIn();

//Facebook Animation
$("#linkedin_tile").hide().delay(500).fadeIn().on("mouseenter", function(){
	var that = $(this);
	
	that.find("img").stop().animate({"width": "100%", "padding-top": "0", opacity: 0}, "fast");
	that.find("h2").stop().animate({opacity: 1});
}).on("mouseleave", function(){
	var that = $(this);
	
    that.stop().animate({"backgroundColor": "#01529d"});
	that.find("img").stop().animate({"width": "140px", "padding-top": "35px", opacity: 1});
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

var color;

//My Work Tile Animation
$(".work_tile").on("mouseenter", function(){
	var that = $(this);
	
    //used to reset bg to previous color
	color = that.css("background-color");
	
    that.find("h1").stop().animate({"color": "#00BFFF"}, "fast");
	that.find(".macbook").stop().animate({opacity: 0}, "fast");
	that.find(".hidden").stop().animate({opacity: 1}, "fast");
	that.stop().animate({"backgroundColor": "#22568f"}, "fast");
}).on("mouseleave", function(){
	var that = $(this);
	
    that.find("h1").stop().animate({"color": "#ffffff"}, "fast");
	that.find(".macbook").stop().animate({opacity: 1}, "fast");
	that.find(".hidden").stop().animate({opacity: 0}, "fast");
	that.stop().animate({"backgroundColor": color}, "fast");
});










