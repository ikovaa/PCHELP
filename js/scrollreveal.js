ScrollReveal({ reset: true });

function rewind () {
  // Since we don't want the "forced reset" to happen
  // immediately, let's wait a little...
  setTimeout(function () {

    foobs.each(function (elem, index) {
      // Remove the ScrollReveal data store id, which
      // hides the element's history from ScrollReveal,
      // and allows us to treat it as a new element
      // moving forward.
      elem.removeAttr('data-sr-id');

      // Remove the generated styles, added by ScrollReveal.
      // If you have other styles in the style attribute,
      // this still will be a bit more complicated.
      elem.removeAttr('style');

      // This is where we fade out our sequence using our
      // class and CSS transition, but we must make sure to
      // remove it before moving forward for best results...
      elem.classList.add('foob--hidden');

      // So using a timer, we remove it after our transition
      // has completed, and now we're ready for a new
      // ScrollReveal animation.
      setTimeout(function () {
        elem.classList.remove('foob--hidden');
      }, 500); // this 500 matches the CSS transition duration.
    })

    // ScrollReveal's sync method will re-call all
    // previously called reveals, which will happen after
    // 2 seconds here to repeat the reveal sequence.
    setTimeout(function () {
      sr.sync();
    }, 2000);

  }, 2000);
}


$(document).ready(function(){
    var activeItemId = 0
    $('.carousel-item').each(function(i) {
        if($(this).hasClass('active')) {
            activeItemId = i
        }
    });

    $('.carousel-overlay-element').each(function(index, value) {
        $(this).removeAttr('data-sr-id');
        $(this).removeAttr('style');
        $(this).addClass('carousel-overlay-element--hidden');

        var overlayIdS = ($(this).attr('id')).split('-')

        if (overlayIdS[1] == activeItemId) {
            $(this).removeClass('carousel-overlay-element--hidden');
        }

        setTimeout(function () {
            ScrollReveal().sync();
        }, 2000);
    })
})


$("#carouselBillboard" ).on( "slid.bs.carousel", function() {
    var activeItemId = 0
    $('.carousel-item').each(function(i) {
        if($(this).hasClass('active')) {
            activeItemId = i
        }
    });

    $('.carousel-overlay-element').each(function(index, value) {
        $(this).removeAttr('data-sr-id');
        $(this).removeAttr('style');
        $(this).addClass('carousel-overlay-element--hidden');

        var overlayIdS = ($(this).attr('id')).split('-')

        if (overlayIdS[1] == activeItemId) {
            $(this).removeClass('carousel-overlay-element--hidden');
        }

        setTimeout(function () {
            ScrollReveal().sync();
        }, 2000);
    })
});

// ScrollReveal().reveal('.banner-1', {
//     useDelay: 'always',
//     delay: 500,
//     duration: 1000,
//     origin: "top",
//     distance: "50px",
//     easing: "cubic-bezier(0.5, 0, 0, 1)",
//     rotate: {
//         x: 20,
//         z: -10
//     },
//     reset: true,
// });

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