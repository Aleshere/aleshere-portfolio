const scrollToTopButton = document.getElementById('js-top');

// Shows scroll-to-top button if we scroll beyond the height of the initial window
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, add a class to the scroll-to-top button to show it
  if (y > 0) {
    scrollToTopButton.className = 'top-link show';
  } else {
    scrollToTopButton.className = 'top-link hide';
  }
};

window.addEventListener('scroll', scrollFunc);

const scrollToTop = () => {
  // Variable for the number of pixels are from the top of the document
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  // If that number is greater than 0, scroll back to 0, or the top of the document
  // Animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '#' value to get a smoother/slower scroll
    window.scrollTo(0, c - c / 6);
  }
};

// When the button is clicked, run ScrollToTop function above
scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};
