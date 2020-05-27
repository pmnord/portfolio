// /* -------------------------------------------------------------------------- */
// /*                               Smooth Scroller                              */
// /* -------------------------------------------------------------------------- */

// window.smoothScroll = function(target) {
//     var scrollContainer = target;
//     do { // Find scroll container
//         scrollContainer = scrollContainer.parentNode;
//         if (!scrollContainer) return;
//         scrollContainer.scrollTop += 1;
//     } while (scrollContainer.scrollTop == 0);

//     var targetY = 0;
//     do { // Find the top of target relative to the container
//         if (target == scrollContainer) break;
//         targetY += target.offsetTop;
//     } while (target = target.offsetParent);

//     scroll = function(c, a, b, i) {
//         i++; if (i > 30) return;
//         c.scrollTop = a + (b - a) / 30 * i;
//         setTimeout(function(){ scroll(c, a, b, i); }, 8); // Adjust scroll speed
//     }
//     // Start scrolling
//     scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
// }

// const chevron = document.querySelector('.my-chevron');
// const projects = document.querySelector('.my-tech');
// chevron.addEventListener('click', () => {window.smoothScroll(projects)});

// /* -------------------------------------------------------------------------- */
// /*                                Sticky Navbar                               */
// /* -------------------------------------------------------------------------- */

// // When the user scrolls the page, execute makeHeaderSticky
// window.onscroll = function() {makeHeaderSticky()};

// // Get the header
// var header = document.querySelector("header");

// // Get the offset position of the header
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function makeHeaderSticky() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky")
//   } else {
//     header.classList.remove("sticky");
//   }
// }

/* -------------------------------------------------------------------------- */
/*                           Console Welcome Message                          */
/* -------------------------------------------------------------------------- */

console.log(`
                ////////////////////////////////////////\n
               //                                    //\n
              //  Check out my leetcode stats at:   //\n
             //   https://leetcode.com/pmnord/     //\n
            //                                    //\n
           ////////////////////////////////////////
            `)
