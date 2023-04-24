import { gsap } from 'gsap';

function heroAnim() {
  const tl = gsap.timeline({
    onComplete: () => {
      heroAnim();
    },
  });

  const stopVideos = (videoSelectors: string[]) => {
    videoSelectors.forEach((selector) => {
      const videoEl = document.querySelector(selector) as HTMLVideoElement;
      if (videoEl) {
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    });
  };

  const playVideos = (videoSelectors: string[]) => {
    videoSelectors.forEach((selector) => {
      const videoEl = document.querySelector(selector) as HTMLVideoElement;
      if (videoEl) {
        videoEl.play();
      }
    });
  };

  tl.call(function () {
    const videoSelectors = [
      '.hero-home_video.is-run video',
      '.hero-home_video.is-bike video',
      '.hero-home_video.is-swim video',
      '.hero-home_video.is-walk video',
    ];
    stopVideos(videoSelectors);
  });

  tl.set(['.a--hero-run', '.a--hero-bike', '.a--hero-swim', '.a--hero-walk', '.a--hero-move'], {
    width: '0vw',
  });

  tl.set('.a--hero-move', {
    width: '100vw',
    onStart: () => {
      const videoSelectors = ['.hero-home_video.is-move video'];
      playVideos(videoSelectors);
    },
    zIndex: 1,
  });

  tl.to('.a--hero-walk', {
    duration: 1,
    delay: 2,
    width: '100vw',
    ease: 'ease-out',
    onStart: () => {
      const videoSelectors = ['.hero-home_video.is-walk video'];
      playVideos(videoSelectors);
    },
  });

  tl.set('.a--hero-move', {
    width: '0vw',
    zIndex: 6,
  });

  tl.call(() => {
    const videoSelectors = ['.hero-home_video.is-move video'];
    stopVideos(videoSelectors);
  });

  tl.to('.a--hero-swim', {
    duration: 1,
    delay: 2,
    width: '100vw',
    ease: 'ease-out',
    onStart: () => {
      const videoSelectors = ['.hero-home_video.is-swim video'];
      playVideos(videoSelectors);
    },
  });

  tl.to('.a--hero-bike', {
    duration: 1,
    delay: 2,
    width: '100vw',
    ease: 'ease-out',
    onStart: () => {
      const videoSelectors = ['.hero-home_video.is-bike video'];
      playVideos(videoSelectors);
    },
  });

  tl.to('.a--hero-run', {
    duration: 1,
    delay: 2,
    width: '100vw',
    ease: 'ease-out',
    onStart: () => {
      const videoSelectors = ['.hero-home_video.is-run video'];
      playVideos(videoSelectors);
    },
  });

  tl.to('.a--hero-move', {
    duration: 1,
    delay: 2,
    width: '100vw',
    ease: 'ease-out',
    onStart: () => {
      const videoSelectors = ['.hero-home_video.is-move video'];
      playVideos(videoSelectors);
    },
  });
}

export { heroAnim };
