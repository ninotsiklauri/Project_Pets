//--------------------------------dark mode-------------------------------------
var darkMode = document.querySelector('button.drk');
var right = document.querySelector('div.right');
var left = document.querySelector('div.left');
var header = document.querySelector('div.header');
var midd = document.querySelector('div.midd');
var leftmenue = document.querySelectorAll('div.leftmenue');
var slider = document.querySelector('div.slider');
var photocontainer = document.querySelector('div.photocontainer');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    right.classList.toggle('darkleft');
    left.classList.toggle('darkleft');
    header.classList.toggle('darkheader');
    midd.classList.toggle('darkmidd');
    for (let i = 0; i < leftmenue.length; i++) {
        leftmenue[i].classList.toggle('darkleftmenue');
    };
    slider.classList.toggle('slide1dark');
    photocontainer.classList.toggle('slide1dark');
})
//----------------------------------slider1--------------------------------------
function currentPhoto(n) {
    showPhotos(slideIndex = n);
}
function showPhotos(n) {
    var x = document.getElementsByClassName("photo");
    var wolfdog = document.getElementById("wolfdog");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (var i = 0; i < 5; i++) {
        x[i].style.display = "none";
        wolfdog.style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}