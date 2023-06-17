function change_page_home() {
    console.log("a")

    document.getElementById("home").style.display = "revert"
    console.log(document.getElementById("home").style.display)

    document.getElementById("quemsomos").style.display = "none"
    console.log(document.getElementById("quemsomos").style.display)
    document.getElementById("apoiadores").style.display = "none"
    console.log(document.getElementById("apoiadores").style.display)
    document.getElementById("buy-content").style.display = "none"
    console.log(document.getElementById("buy-content").style.display)
    document.getElementById("termos").style.display = "none"
    console.log(document.getElementById("termos").style.display)
}
function change_page_wwa() {
    document.getElementById("quemsomos").style.display = "revert"
    
    document.getElementById("home").style.display = "none"
    document.getElementById("apoiadores").style.display = "none"
    document.getElementById("buy-content").style.display = "none"
    document.getElementById("termos").style.display = "none"
}
function change_page_partner() {
    document.getElementById("apoiadores").style.display = "flex"
    
    document.getElementById("quemsomos").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("buy-content").style.display = "none"
    document.getElementById("termos").style.display = "none"
}
function change_page_buy() {
    document.getElementById("buy-content").style.display = "revert"
    
    document.getElementById("quemsomos").style.display = "none"
    document.getElementById("apoiadores").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("termos").style.display = "none"
}
function change_page_termos() {
    document.getElementById("termos").style.display = "revert"
    
    document.getElementById("quemsomos").style.display = "none"
    document.getElementById("apoiadores").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("buy-content").style.display = "none"
}





function desmuteVideo(video) {
    video.muted = !video.muted
}
var slidePosition = 1

function plusSlides(n) {
    slideShow(slidePosition += n);
}

function currentSlide(n) {
    slideShow(slidePosition = n);
}

function slideShow() {
    var slides = document.getElementsByClassName("c_image");
    var circles = document.getElementsByClassName("dots");
    if (slidePosition >= slides.length) {
        slides[slidePosition-1].style.display = "none";
        circles[slidePosition-1] = circles[slidePosition-1].className.replace(" enable", "");
        slidePosition = 0;
    }
    else if(slidePosition < 0) {
        slides[slidePosition+1].style.display = "none";
        circles[slidePosition+1] = circles[slidePosition+1].className.replace(" enable", "");
        slidePosition = slides.length
    } 
    else {
        circles[slidePosition-1] = circles[slidePosition-1].className.replace(" enable", "");
        slides[slidePosition-1].style.display = "none";
    }

    slides[slidePosition].style.display = "block";
    circles[slidePosition].className += " enable";
} 
window.addEventListener("load", function() {
    slideShow()
    change_page_home()
})
setInterval(function() {
    slidePosition += 1;
    slideShow();
}, 5000);