// let mybutton = document.getElementById("scrolltopBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

const navigationHeight = document.querySelector('.navbar').offsetHeight;
 
console.log(navigationHeight);

document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + "px");