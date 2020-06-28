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
// here
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