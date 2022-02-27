const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close");
const body = document.querySelector("body");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const navbarLinks = document.querySelector(".navbar__container");
const fadeAnime = document.querySelectorAll('.fade');
const fadeText = document.querySelectorAll('.fade-text');


hamburger.addEventListener("click", () => {
    document.querySelector(".nav_toggle--open").style.display = "none";
    document.querySelector(".nav_toggle--close").style.display = "block";
    navbarLinks.style.display = "block";
    overlay.style.display = "block";
    overlay.style.opacity = "0.7";
    // fadeAnime.forEach(function(element) {
    //     element.classList.add('fade-in');
    //     element.classList.remove('fade-out');
    // });
    fadeText.forEach((element) => {
        element.classList.add('fadeIn');
    });
});

closeBtn.addEventListener("click", () => {
    document.querySelector(".nav_toggle--close").style.display = "none";
    document.querySelector(".nav_toggle--open").style.display = "block";
    navbarLinks.style.display = "none";
    overlay.style.display = "none";
    overlay.style.opacity = "0";
    // fadeAnime.forEach(function(element) {
    //     element.classList.remove('fade-in');
    //     element.classList.add('fade-out');
    // });
    fadeText.forEach((element) => {
        element.classList.remove('fadeIn');
    });
});