// Navbar
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
})

document.querySelectorAll('.nav-links').forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
))

// Preloader
setTimeout(function(){ 
    document.getElementById('preloader').style.display = 'none';
}, 2000); // it will remove after 2 seconds