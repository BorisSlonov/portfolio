window.onload = function TypeText() {

    new Typed('#typed2', {
        strings: ['Slonov Boris', 'Web Developer', 'Write Me Now!'],
        typeSpeed: 80,
        backSpeed: 20,
        fadeOut: true,
        loop: true,
        startDelay: 7500,
        cursorChar: '_'
    });



    new Typed('#typed3', {
        strings: ['_', ' ', 'Hello!', 'Im Slonov Boris', 'Web Developer'],
        typeSpeed: 30,
        backSpeed: 25,
        fadeOut: false,
        loop: false,
        cursorChar: ''
    });




    new Typed('#typed4', {
        strings: ['Have a Nice Day!', 'Just Smile!:)', 'Slonov Boris'],
        typeSpeed: 80,
        backSpeed: 50,
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



