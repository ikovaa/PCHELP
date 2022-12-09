ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
    move: 0,
    reset: false
});

// Fade
ScrollReveal().reveal(".fade-in-section", {
    duration: 800,
    move: 0,
    reset: false,
});

ScrollReveal().reveal(".fade-in-text", {
    useDelay: 'always',
    delay: 800,
    duration: 1500,
    move: 0,
    reset: false,
});

ScrollReveal().reveal(".fade-in-image", {
    useDelay: 'always',
    delay: 800,
    duration: 1500,
    move: 0,
    reset: false,
});

ScrollReveal().reveal(".fade-in-text-banner", {
    duration: 1300,
    move: 0,
    reset: false,
});

// Title Slides
ScrollReveal().reveal(".slide-down-title", {
    useDelay: 'always',
    delay: 300,
    duration: 800,
    origin: "top",
    distance: "50px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    // rotate: {
    //     x: 20,
    //     z: -10
    // },
    reset: false,
});

ScrollReveal().reveal(".slide-down-title-sec", {
    useDelay: 'always',
    delay: 500,
    duration: 800,
    origin: "top",
    distance: "400px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    // rotate: {
    //     x: 20,
    //     z: -10
    // },
    reset: false,
});

ScrollReveal().reveal(".slide-up-title", {
    useDelay: 'once',
    delay: 300,
    duration: 800,
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
    delay: 500,
    duration: 800,
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
    duration: 800,
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
    duration: 800,
    origin: "left",
    distance: "2000px",
    easing: "ease-in-out",
    mobile: false,
    reset: false,
});

ScrollReveal().reveal(".slide-left", {
    // useDelay: 'always',
    // delay: 500,
    duration: 800,
    origin: "right",
    distance: "2000px",
    easing: "ease-in-out",
    mobile: false,
    reset: false,
});

ScrollReveal().reveal(".slide-right-contacts", {
    move: 0,
    reset: false,
    mobile: true,
});

ScrollReveal().reveal(".slide-left-contacts", {
    move: 0,
    reset: false,
    mobile: true,
});

ScrollReveal().reveal(".scaleUp", {
    duration: 3000,
    scale: 0.85
});

ScrollReveal().reveal(".flip", {
    delay: 300,
    duration: 1800,
    rotate: {
        x: 20,
        z: 20
    },
    mobile: false
});