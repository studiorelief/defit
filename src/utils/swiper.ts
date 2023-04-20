function loadSwiper() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load swiper script'));
    document.head.appendChild(script);
  });
}

function appSwiper() {
  $('.community_swiper-wrapper').each(function (index) {
    let loopMode = false;
    if ($(this).attr('loop-mode') === 'true') {
      loopMode = true;
    }
    let sliderDuration = 300;
    if ($(this).attr('slider-duration') !== undefined) {
      sliderDuration = +$(this).attr('slider-duration');
    }
    const swiper = new Swiper($(this).find('.swiper')[0], {
      speed: sliderDuration,
      loop: loopMode,
      autoHeight: false,
      centeredSlides: loopMode,
      followFinger: true,
      freeMode: false,
      slideToClickedSlide: true,
      slidesPerView: 1,
      spaceBetween: '4%',
      rewind: false,
      mousewheel: {
        forceToAxis: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // tablet
        768: {
          slidesPerView: 2,
          spaceBetween: '4%',
        },
        // desktop
        992: {
          slidesPerView: 4,
          spaceBetween: '2%',
        },
      },
      scrollbar: {
        el: $(this).find('.swiper-drag-wrapper')[0],
        draggable: true,
        dragClass: 'swiper-drag',
        snapOnRelease: true,
      },
      slideActiveClass: 'is-active',
      slideDuplicateActiveClass: 'is-active',
    });
  });
}

export { appSwiper, loadSwiper };
