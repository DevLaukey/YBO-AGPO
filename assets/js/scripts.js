$("#hover1").click(function() {
    $("#hover1").css("color", "red");
});

$("#hover2").click(function() {
    $("#hover2").css("color", "red");
});


$("#hover3").click(function() {
    $("#hover3").css("color", "red");
});

$("#hover4").click(function() {
    $("#hover4").css("color", "red");
});

$("#hover5").click(function() {
    $("#hover5").css("color", "red");
});

$("#hover6").click(function() {
    $("#hover6").css("color", "red");
});

$("#hover7").click(function() {
    $("#hover7").css("color", "red");
});

$("#hover8").click(function() {
    $("#hover8").css("color", "red");
});

$("#hover9").click(function() {
    $("#hover9").css("color", "red");
});

$("#hover10").click(function() {
    $("#hover10").css("color", "red");
});

$("#hover11").click(function() {
    $("#hover11").css("color", "red");
});

$("#hover12").click(function() {
    $("#hover12").css("color", "red");
});

$("#hover13").click(function() {
    $("#hover13").css("color", "red");
});

// here
// Carousel hover popup

// end of carousel hover popup

//hide menu on scroll********
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}
//*****************
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
