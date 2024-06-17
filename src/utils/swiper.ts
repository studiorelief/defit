import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

function appSwiper(): void {
  const wrappers = document.querySelectorAll('.community_swiper-wrapper');
  wrappers.forEach((wrapper) => {
    const loopMode = wrapper.getAttribute('loop-mode') === 'true';
    const sliderDuration = parseInt(wrapper.getAttribute('slider-duration') || '300', 10);

    const swiperElement = wrapper.querySelector('.swiper');
    if (swiperElement) {
      const swiper = new Swiper(swiperElement as HTMLElement, {
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
        slideDuplicateActiveClass: 'is-active',
      });
    }
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
  });
}

export { appSwiper, loadSwiper };
