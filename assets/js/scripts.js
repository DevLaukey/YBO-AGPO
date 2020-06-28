$("#hover1").click(function() {
    $("#show1").show();
    $("#hover1").hide();
});

$("#show1").click(function() {
    $("#show1").hide();
    $("#hover1").show();
});
$("#hover2").click(function() {
    $("#show2").show();
    $("#hover2").hide();
});
$("#show2").click(function() {
    $("#show2").hide();
    $("#hover2").show();
});
$("#hover3").click(function() {
    $("#show3").show();
    $("#hover3").hide();
});
$("#show3").click(function() {
    $("#show3").hide();
    $("#hover3").show();
});
$("#hover4").click(function() {
    $("#show4").show();
    $("#hover4").hide();
});
$("#show4").click(function() {
    $("#show4").hide();
    $("#hover4").show();
});
$("#hover5").click(function() {
    $("#show5").show();
    $("#hover5").hide();
});
$("#show5").click(function() {
    $("#show5").hide();
    $("#hover5").show();
});
$("#hover6").click(function() {
    $("#show6").show();
    $("#hover6").hide();
});
$("#show6").click(function() {
    $("#show6").hide();
    $("#hover6").show();
});
$("#hover7").click(function() {
    $("#show7").show();
    $("#hover7").hide();
});
$("#show7").click(function() {
    $("#show7").hide();
    $("#hover7").show();
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