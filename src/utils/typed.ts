function nftTyping() {
  // If the #typed3 element comes into the viewport, this callback will be run
  const viewportObserver = new IntersectionObserver((entries, observer) => {
    // If #typing is within the viewport
    if (entries[0].isIntersecting) {
      // Run the typed code
      const typed = new Typed('#typing', {
        strings: ['BECOME A DEFIT <br>WEB3 PLAYER'],
        typeSpeed: 100,
        backSpeed: 0,
        fadeOut: true,
        showCursor: false,
      });
      // Instruct the IntersectionObserver to stop watching for changes to #typed3, otherwise your typed code will be called more than once
      observer.unobserve(document.querySelector('#typing'));
    }
  });

  // Instruct the IntersectioObserver to observe the #typing element
  viewportObserver.observe(document.querySelector('#typing'));
}

nftTyping();
