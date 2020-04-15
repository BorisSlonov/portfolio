
$(document).ready(function() {

    $('.main-btn').removeClass('d-none');
    $('.header').removeClass('d-none');
    $('.main').removeClass('d-none');
    $('.footer').removeClass('d-none');
    $('.header-content__h2').removeClass('d-none');
    $('.header-content__tech').removeClass('d-none');

});




typed1 = new Typed('#typed2', {
    strings: ['Slonov Boris', 'Web Dev', 'from Saint P'],
    typeSpeed: 80,
    backSpeed: 50,
    fadeOut: true,
    loop: true,
    startDelay: 7000,
    cursorChar: '_'
});


let typed2 = new Typed('#typed3', {
    strings: ['Hello!', 'Im Slonov Boris', 'Web Developer'],
    typeSpeed: 30,
    backSpeed: 40,
    fadeOut: false,
    loop: false,
    cursorChar: ''
});

let typed3 = new Typed('#typed4', {
    strings: ['Have a Nice Day!', 'Just Smile!:)', 'Slonov Boris'],
    typeSpeed: 80,
    backSpeed: 50,
    fadeOut: false,
    loop: false,
    cursorChar: ''
});

