if (!sessionStorage.alreadyClicked) {


    window.onload = function TypeText() {

        new Typed('#typed2', {
            strings: ['Boris Slonov'],
            typeSpeed: 80,
            backSpeed: 20,
            fadeOut: true,
            loop: false,
            startDelay: 7600,
            cursorChar: '_'
        });

        // strings: ['_', ' ', 'Hello!', 'Im Boris Slonov', 'Web Developer'],
    
    
    
        new Typed('#typed3', {
            typeSpeed: 30,
            backSpeed: 25,
            fadeOut: false,
            loop: false,
            strings: ['_', ' ', 'Hello!', 'Im Boris Slonov', 'Web Developer'],
            cursorChar: ''
        });
    
    
    
        $(document).ready(function () {
            setInterval(() => {
                setInterval(() => {
                    $('.vis').fadeIn(500)
                }, 4250);
    
    
                setInterval(() => {
                    $('.vis-content').fadeIn(400)
                }, 4750);
    
                setInterval(() => {
                    $('.vis-header').fadeIn(100);
                }, 4750);
    
    
                setInterval(() => {
                    $('#h100vh').fadeOut(0);
    
                }, 5000);
            }, 1150);
        });
    
        new WOW().init();
    };


}





