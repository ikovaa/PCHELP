const navigationHeight = document.querySelector('.navbar').offsetHeight;
//console.log(navigationHeight);

document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + "px");
document.addEventListener("touchstart", function(e) {
    e.preventDefault();   // does nothing since the listener is passive
}, {passive: true});

document.addEventListener("touchmove", function(e) {
    e.preventDefault();   // does nothing since the listener is passive
}, {passive: true});
// document.addEventListener('touchstart', onTouchStart, {passive: true});