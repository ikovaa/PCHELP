ScrollReveal({ reset: true });

var myCarousel = document.querySelector('#carouselBillboard')

$(document).ready(function() {
    var currentSlideId = ($(".carousel-item.active").attr('id')).split('-');

    $(".carousel-text").each(function(index, elem) {
        $(elem).animate({top: '100px'});
        var id = ($(elem).attr('id').split('-'));
        if (id[1] == currentSlideId[1]) {
            $(elem).animate({top: '200px'});
        }
    });
});


$("#carouselBillboard").on("slid.bs.carousel", function() {
    var currentSlideId = ($(".carousel-item.active").attr('id')).split('-');

    $(".carousel-text").each(function(index, elem) {
        $(elem).animate({top: '100px'});
        var id = ($(elem).attr('id').split('-'));
        if (id[1] == currentSlideId[1]) {
            $(elem).animate({top: '200px'});
        }
    });
});

ScrollReveal().reveal(".show-once", {
    move: 0,
    reset: false
});

// Fade
ScrollReveal().reveal(".fade-in-section", {
    duration: 1000,
    move: 0,
    reset: false,
});

ScrollReveal().reveal(".fade-in-text", {
    useDelay: 'always',
    delay: 1500,
    duration: 2000,
    move: 0,
    reset: false,
});

ScrollReveal().reveal(".fade-in-text-banner", {
    duration: 1500,
    move: 0,
    reset: false,
});



// Title Slides
ScrollReveal().reveal(".slide-down-title", {
    useDelay: 'always',
    delay: 500,
    duration: 1000,
    origin: "top",
    distance: "50px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    rotate: {
        x: 20,
        z: -10
    },
    reset: false,
});

ScrollReveal().reveal(".slide-down-title-sec", {
    useDelay: 'always',
    delay: 1500,
    duration: 1000,
    origin: "top",
    distance: "400px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    rotate: {
        x: 20,
        z: -10
    },
    reset: false,
});

ScrollReveal().reveal(".slide-up-title", {
    useDelay: 'once',
    delay: 1000,
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    // rotate: {
    //     x: 20,
    //     z: -10
    // },
    opacity: 0,
    reset: false,
});

ScrollReveal().reveal(".slide-up-title-sec", {
    useDelay: 'always',
    delay: 1500,
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    // rotate: {
    //     x: 20,
    //     z: -10
    // },
    opacity: 0,
    reset: false,
});

ScrollReveal().reveal(".slide-up-title-banner", {
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    // rotate: {
    //     x: 20,
    //     z: -10
    // },
    opacity: 0,
    reset: true,
});


// Slides
ScrollReveal().reveal(".slide-right", {
    // useDelay: 'always',
    // // delay: 500,
    duration: 1500,
    origin: "left",
    distance: "2000px",
    easing: "ease-in-out",
    mobile: false,
    reset: false,
});

ScrollReveal().reveal(".slide-left", {
    // useDelay: 'always',
    // delay: 500,
    duration: 1500,
    origin: "right",
    distance: "2000px",
    easing: "ease-in-out",
    mobile: false,
    reset: false,
});




ScrollReveal().reveal(".scaleUp", {
    duration: 4000,
    scale: 0.85
});

ScrollReveal().reveal(".flip", {
    delay: 500,
    duration: 2000,
    rotate: {
        x: 20,
        z: 20
    },
    mobile: false
});