ScrollReveal({ reset: true });

var myCarousel = document.querySelector('#carouselBillboard')
/*var carousel = new bootstrap.Carousel(myCarousel, {
   interval: 2000,
   wrap: false
}) */

const TextValues = {
    '0': "Teste",
    '1': "Teste1",
    '2': "Teste3",
}

$( "#carouselBillboard" ).on( "slid.bs.carousel", function() {
    setTimeout(function() {
        var itemAtivo = $("#carouselBillboard.carousel-inner.active")
        var itemAtivoOverlay = $("#carouselBillboard.carousel-inner.active.overlay")
        if (itemAtivoOverlay) {
            itemAtivoOverlay.append("<div>A sua tranquilidade é a nossa preocupação</div>");
        }
        console.log("Class Added")
    }, 1000)



    // Metodo para procurar pela classe que esta ativa


    // Destruir o anterior da DOM totalmente para evitar erros visuais

    // // Get Active Element
    // var activeSlide = $(this).attr("class")
    // if ( activeSlide ) {
    //     console.log(activeSlide)
    // } else {
    //     console.log("teste")
    //     return;
    // }
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