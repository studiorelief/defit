<<<<<<< Updated upstream
/* import { gsap } from 'gsap'; */
=======
import { gsap } from 'gsap';

const stopVideos = (videoSelectors: string[]): void => {
  videoSelectors.forEach((selector) => {
    const videoEl = document.querySelector(selector) as HTMLVideoElement;
    if (videoEl) {
      videoEl.pause();
      videoEl.currentTime = 0;
    }
  });
};

const playVideos = (videoSelectors: string[]): void => {
  videoSelectors.forEach((selector) => {
    const videoEl = document.querySelector(selector) as HTMLVideoElement;
    if (videoEl) {
      videoEl.play();
    }
  });
};

let tl: gsap.core.Timeline;

// Function start

function createTimeline(): void {
  tl = gsap.timeline({
    repeat: -1, // Make the timeline loop infinitely
  });

  tl.set(['.a--hero-run', '.a--hero-bike', '.a--hero-swim', '.a--hero-walk'], {
    width: '0vw',
  });

  tl.set('.a--hero-move', {
    zIndex: 1,
  });

  tl.call(function () {
    const videoSelectors = [
      '.hero-home_video.is-run video',
      '.hero-home_video.is-bike video',
      '.hero-home_video.is-swim video',
      '.hero-home_video.is-walk video',
    ];
    stopVideos(videoSelectors);
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

  tl.call(() => {
    const videoSelectors = ['.hero-home_video.is-move video'];
    stopVideos(videoSelectors);
  });

  tl.set('.a--hero-move', {
    width: '0vw',
    zIndex: 6,
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

function heroAnim(): gsap.core.Timeline {
  if (!tl) {
    createTimeline();
  }
  return tl;
}

// Add a new function to reset the timeline
function resetTimeline(): void {
  if (tl) {
    tl.clear();
    createTimeline();
  }
}

export { heroAnim, resetTimeline };
>>>>>>> Stashed changes
