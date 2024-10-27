let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/* Typing text code */

var typed = new Typed('.multiple-text', {
    strings: ['Frontend Development', 'Graphic Design', 'Multimedia', 'Backend Development (soon)'],
    typeSpeed: 80,
    backspeed: 80,
    backdelay: 1200,
    loop: true,
  });

