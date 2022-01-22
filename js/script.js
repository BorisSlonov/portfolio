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
    
    
    
        new Typed('#typed3', {
            strings: ['_', ' ', 'Hello!', 'Im Boris Slonov', 'Web Developer'],
            typeSpeed: 30,
            backSpeed: 25,
            fadeOut: false,
            loop: false,
            cursorChar: ''
        });
    
    
    
    
        $(document).ready(function () {
            setInterval(() => {
                setInterval(() => {
                    $('.vis').fadeIn(500)
                }, 4250);
    
                setInterval(() => {
                    $('.vis-btn').fadeIn(500)
                }, 4750);
    
                setInterval(() => {
                    $('.vis-content').fadeIn(100)
                }, 5000);
    
                setInterval(() => {
                    $('.vis-header').fadeIn(100);
                }, 5000);
    
    
                setInterval(() => {
                    $('#h100vh').fadeOut(0);
    
                }, 5000);
            }, 1150);
        });
    
        new WOW().init();
    };


}





