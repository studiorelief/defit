function loadTypedScript() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/typed.js@2.0.132/dist/typed.umd.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load typed.js script'));
    document.head.appendChild(script);
  });
}

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

export { loadTypedScript, nftTyping };
