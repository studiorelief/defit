import 'swiper/css/bundle';

import Swiper from 'swiper';

export function appSwiper(): void {
  const wrappers = document.querySelectorAll('.community_swiper-wrapper');
  wrappers.forEach((wrapper) => {
    const loopMode = wrapper.getAttribute('loop-mode') === 'true';
    const sliderDuration = parseInt(wrapper.getAttribute('slider-duration') || '300', 10);

    const swiperElement = wrapper.querySelector('.swiper');
    if (swiperElement) {
      new Swiper(swiperElement as HTMLElement, {
        speed: sliderDuration,
        loop: loopMode,
        autoHeight: false,
        centeredSlides: loopMode,
        followFinger: true,
        freeMode: false,
        slideToClickedSlide: true,
        slidesPerView: 1,
        spaceBetween: 4,
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
            spaceBetween: 4,
          },
          // tablet
          768: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          // desktop
          992: {
            slidesPerView: 2.75,
            spaceBetween: 2,
          },
        },
        scrollbar: {
          el: wrapper.querySelector('.swiper-drag-wrapper') as HTMLElement,
          draggable: true,
          dragClass: 'swiper-drag',
          snapOnRelease: true,
        },
        slideActiveClass: 'is-active',
      });
    }
  });
}
