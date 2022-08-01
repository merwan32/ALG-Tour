navbar = document.querySelector('.navbar');
navbarUl = document.querySelector('.navbar nav ul');
wilayas = document.querySelectorAll('.wilayas');
wilaya = wilayas[0];
repas = wilayas[1];
btn1 = wilaya.querySelectorAll('button')[0];
btn2 = wilaya.querySelectorAll('button')[1];
btn3 = repas.querySelectorAll('button')[0];
btn4 = repas.querySelectorAll('button')[1];
numbers = document.querySelectorAll('.num');
home = document.querySelectorAll('.navbar ul a');
socialbtn = document.querySelector('.social .contact');
social = document.querySelector('.social');
socialicon = document.querySelector('.social .soc');

at = 1 ;
at1 = 1 ;


ul = true ;
let socialTst = true ;


function myfunction() {
    if (ul) {
        navbar.style.background = '#881088';
        navbarUl.style.left = '0px';
        ul = false;
    } else {
        navbar.style.background = 'transparent';
        navbarUl.style.left = '-100vw';
        ul = true;
    }
}
window.onscroll = function () {
if (window.pageYOffset > 0) {
    navbar.classList.add('active');
    navbarUl.style.top = '60px';
} else {
    navbar.classList.remove('active');
    navbarUl.style.top = '100px';
}
if (window.pageYOffset > 2210) {
    home[0].classList.remove('active');
    home[1].classList.remove('active');
    home[2].classList.remove('active');
    home[4].classList.add('active');
}else  if (window.pageYOffset > 1450) {
    home[0].classList.remove('active');
    home[1].classList.remove('active');
    home[4].classList.remove('active');
    home[2].classList.add('active');
}else if (window.pageYOffset > 750) {
    home[0].classList.remove('active');
    home[2].classList.remove('active');
    home[1].classList.add('active');
}else {
    home[1].classList.remove('active');
    home[0].classList.add('active');
    home[2].classList.remove('active');
    home[4].classList.remove('active');
}
}


function right() {
    if (at == 1) {
        wilaya.style.marginLeft = '-62.5vw';
        btn1.style.cursor ='pointer';
        at++;
    }else {
        wilaya.style.marginLeft = '-125vw';
        btn2.style.cursor ='no-drop';
    }
}
function left() {
    if (at==2){
        wilaya.style.marginLeft = '-62.5vw';
        at--;
    }else {
        wilaya.style.marginLeft = '0vw';
        btn1.style.cursor ='no-drop';
    }
}

function right1() {
    if (at1 == 1) {
        repas.style.marginLeft = '-35vw';
        btn3.style.cursor ='pointer';
        at1++;
    }else {
        repas.style.marginLeft = '-70vw';
        btn4.style.cursor ='no-drop';
    }
}
function left1() {
    if (at1==2){
        repas.style.marginLeft = '-35vw';
        at1--;
    }else {
        repas.style.marginLeft = '0vw';
        btn3.style.cursor ='no-drop';
    }
}



jQuery(document).ready(function( $ ) {

    $('.num').counterUp({
      delay: 10,
      time:   1000,
      triggerOnce:true
    })
});


socialbtn.onclick = ()=> {
    if (socialTst) {
        social.style.width ='300px';
        socialicon.style.display = 'flex';
        socialTst = false;
    } else {
        social.style.width ='50px';
        socialicon.style.display = 'none';
        socialTst = true;
    }
}