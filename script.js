const hamburger = document.querySelector('.hamburger');
const phonenav = document.querySelector('.phone-navbar');
const mainContent = document.getElementById('main-content');
hamburger.addEventListener("click" , function(){
    hamburger.classList.toggle("active");
    phonenav.classList.toggle("active");
    mainContent.classList.toggle("active");


});

const phoneNavLinks = document.querySelectorAll('.phone-navbar ul li a');
phoneNavLinks.forEach ( link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove("active");
        phonenav.classList.remove("active");
        mainContent.classList.remove("active");
    });
});