const navigationHeight = document.querySelector('.navbar').offsetHeight;
//console.log(navigationHeight);

document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + "px");
document.addEventListener("touchstart", {passive: true});

document.addEventListener("touchmove", {passive: true});