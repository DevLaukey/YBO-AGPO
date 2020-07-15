$("#hover1").click(function() {
    $("#show1").show();
    $("#hover1").hide();
    $("#show1").css("color", "black");
});

$("#show1").click(function() {
    $("#show1").hide();
    $("#hover1").show();
    $("#hover1").css("color", "red");
});
$("#hover2").click(function() {
    $("#show2").show();
    $("#hover2").hide();
    $("#show2").css("color", "black");
});
$("#show2").click(function() {
    $("#show2").hide();
    $("#hover2").show();
    $("#hover2").css("color", "red");
});
$("#hover3").click(function() {
    $("#show3").show();
    $("#hover3").hide();
    $("#show3").css("color", "black");
});
$("#show3").click(function() {
    $("#show3").hide();
    $("#hover3").show();
    $("#hover3").css("color", "red");
});
$("#hover4").click(function() {
    $("#show4").show();
    $("#hover4").hide();
    $("#show4").css("color", "black");
});
$("#show4").click(function() {
    $("#show4").hide();
    $("#hover4").show();
    $("#hover4").css("color", "red");
});
$("#hover5").click(function() {
    $("#show5").show();
    $("#hover5").hide();
    $("#show5").css("color", "black");
});
$("#show5").click(function() {
    $("#show5").hide();
    $("#hover5").show();
    $("#hover5").css("color", "red");
});
$("#hover6").click(function() {
    $("#show6").show();
    $("#hover6").hide();
    $("#show6").css("color", "black");
});
$("#show6").click(function() {
    $("#show6").hide();
    $("#hover6").show();
    $("#hover6").css("color", "red");
});
$("#hover7").click(function() {
    $("#show7").show();
    $("#hover7").hide();
    $("#show7").css("color", "black");
});
$("#show7").click(function() {
    $("#show7").hide();
    $("#hover7").show();
    $("#hover7").css("color", "red");
});
$("#hover8").click(function() {
    $("#show8").show();
    $("#hover8").hide();
    $("#show8").css("color", "black");
});
$("#show8").click(function() {
    $("#show8").hide();
    $("#hover8").show();
    $("#hover8").css("color", "red");
});
$("#hover9").click(function() {
    $("#show9").show();
    $("#hover9").hide();
    $("#show9").css("color", "black");
});
$("#show9").click(function() {
    $("#show9").hide();
    $("#hover9").show();
    $("#hover9").css("color", "red");
});
$("#hover10").click(function() {
    $("#show10").show();
    $("#hover10").hide();
    $("#show10").css("color", "black");
});
$("#show10").click(function() {
    $("#show10").hide();
    $("#hover10").show();
    $("#hover10").css("color", "red");
});
$("#hover11").click(function() {
    $("#show11").show();
    $("#hover11").hide();
    $("#show11").css("color", "black");
});
$("#show11").click(function() {
    $("#show11").hide();
    $("#hover11").show();
    $("#hover11").css("color", "red");
});
$("#hover12").click(function() {
    $("#show12").show();
    $("#hover12").hide();
    $("#show12").css("color", "black");
});
$("#show12").click(function() {
    $("#show12").hide();
    $("#hover12").show();
    $("#hover12").css("color", "red");
});
$("#hover13").click(function() {
    $("#show13").show();
    $("#hover13").hide();
    $("#show13").css("color", "black");
});
$("#show13").click(function() {
    $("#show13").hide();
    $("#hover13").show();
    $("#hover13").css("color", "red");
});
// here
// Carousel hover popup

// end of carousel hover popup
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