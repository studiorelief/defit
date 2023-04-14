<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
<script src="https://unpkg.com/@barba/core"></script>
<script>
function resetWebflow(data) {
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, "text/html");
  let webflowPageId = $(dom).find("html").attr("data-wf-page");
  $("html").attr("data-wf-page", webflowPageId);
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require("ix2").init();
}

barba.init({
  preventRunning: true,
  transitions: [
    {
      sync: true,
      from: {
        namespace: ["grid-page"]
      },
      leave(data) {
        return gsap.fromTo(
          data.current.container,
          { xPercent: 0 },
          {
            xPercent: -100,
            ease: "power2.inOut",
            duration: 0.8
          }
        );
      },
      enter(data) {
        let transitionData = data;
        $(data.next.container).addClass("fixed");
        return gsap.fromTo(
          data.next.container,
          { xPercent: 100 },
          {
            xPercent: 0,
            ease: "power2.inOut",
            duration: 0.8,
            onComplete: () => {
              $(window).scrollTop(0);
              $(data.next.container).removeClass("fixed");
              resetWebflow(transitionData);
            }
          }
        );
      }
    },
    {
      sync: true,
      from: {
        namespace: ["cms-page"]
      },
      leave(data) {
        return gsap.fromTo(
          data.current.container,
          { xPercent: 0 },
          {
            xPercent: 100,
            ease: "power2.inOut",
            duration: 0.8
          }
        );
      },
      enter(data) {
        let transitionData = data;
        $(data.next.container).addClass("fixed");
        return gsap.fromTo(
          data.next.container,
          { xPercent: -100 },
          {
            xPercent: 0,
            ease: "power2.inOut",
            duration: 0.8,
            onComplete: () => {
              $(window).scrollTop(0);
              $(data.next.container).removeClass("fixed");
              resetWebflow(transitionData);
            }
          }
        );
      }
    }
  ],
  views: [
    {
      namespace: "grid-page",
      beforeEnter() {
        // run custom js for the grid-page
      },
      afterEnter() {
        // run custom js for the grid-page
      }
    }
  ]
});
</script>