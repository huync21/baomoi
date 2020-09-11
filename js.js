const a=document.getElementsByClassName("nav__menu");
let b=document.getElementsByClassName("nav__menu-full");
a[0].addEventListener("click",function(){
    
    b[0].classList.toggle("show-navbar");
})