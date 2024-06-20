import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type OnCompleteCallback = () => void;

interface TransitionData {
  next: {
    container: HTMLElement;
  };
}

// Transition pour page APP > Right to Left
export function pTransAppRight(onComplete: OnCompleteCallback): void {
  const tl = gsap.timeline({
    onComplete: onComplete,
  });

  tl.to('.a--app-transition', {
    duration: 0.4,
    width: '100%',
    left: '0%',
    ease: 'ease-out',
  });

  tl.to('.a--app-transition', {
    duration: 0.4,
    width: '0%',
    left: '100%',
    ease: 'ease-out',
    delay: 0.4,
  });

  tl.set('.a--app-transition', {
    left: '-100%',
  });
}

// Transition pour page NFT > Left to Right
export function pTransNftRight(onComplete: OnCompleteCallback): void {
  const tl = gsap.timeline({
    onComplete: onComplete,
  });

  tl.to('.a--nft-transition', {
    duration: 0.4,
    width: '100%',
    left: '0%',
    ease: 'ease-out',
  });

  tl.to('.a--nft-transition', {
    duration: 0.4,
    width: '0%',
    left: '100%',
    ease: 'ease-out',
    delay: 0.5,
  });

  tl.set('.a--nft-transition', {
    left: '-100%',
  });
}

// Transition pour page HOW IT WORKS > Left to Right
export function pTransHiwRight(onComplete: OnCompleteCallback): void {
  const tl = gsap.timeline({
    onComplete: onComplete,
  });

  tl.to('.a--hiw-transition', {
    duration: 0.4,
    width: '100%',
    left: '0%',
    ease: 'ease-out',
  });

  tl.to('.a--hiw-transition', {
    duration: 0.4,
    width: '0%',
    left: '100%',
    ease: 'ease-out',
    delay: 0.5,
  });

  tl.set('.a--hiw-transition', {
    left: '-100%',
  });
}

// Transition pour page Legals > Left to Right
export function pTransLegalsRight(onComplete: OnCompleteCallback): void {
  const tl = gsap.timeline({
    onComplete: onComplete,
  });

  tl.to('.a--legals-transition', {
    duration: 0.4,
    width: '100%',
    left: '0%',
    ease: 'ease-out',
  });

  tl.to('.a--legals-transition', {
    duration: 0.4,
    width: '0%',
    left: '100%',
    ease: 'ease-out',
    delay: 0.5,
  });

  tl.set('.a--legals-transition', {
    left: '-100%',
  });
}

// Transition pour page Team > Left to Right
export function pTransTeamRight(onComplete: OnCompleteCallback): void {
  const tl = gsap.timeline({
    onComplete: onComplete,
  });

  tl.to('.a--team-transition', {
    duration: 0.4,
    width: '100%',
    left: '0%',
    ease: 'ease-out',
  });

  tl.to('.a--team-transition', {
    duration: 0.4,
    width: '0%',
    left: '100%',
    ease: 'ease-out',
    delay: 0.5,
  });

  tl.set('.a--team-transition', {
    left: '-100%',
  });
}

// Transition pour page Blog > Left to Right
export function pTransBlogRight(onComplete: OnCompleteCallback): void {
  const tl = gsap.timeline({
    onComplete: onComplete,
  });

  tl.to('.a--blog-transition', {
    duration: 0.4,
    width: '100%',
    left: '0%',
    ease: 'ease-out',
  });

  tl.to('.a--blog-transition', {
    duration: 0.4,
    width: '0%',
    left: '100%',
    ease: 'ease-out',
    delay: 0.5,
  });

  tl.set('.a--blog-transition', {
    left: '-100%',
  });
}

export function contentFade(onComplete: OnCompleteCallback, data: TransitionData): void {
  const tl = gsap.timeline({
    onComplete: onComplete,
  });
  tl.fromTo(
    data.next.container,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    }
  );
}

/*
! Page HOW TO
*/

export function resetGsapHowIt(): void {
  {
    ScrollTrigger.getAll().forEach((st) => st.kill()); // Kill all ScrollTriggers
  }
}

export function heroHowIt() {
  gsap.to('.hero-hiw_image', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_hero-hiw',
      start: '50% 50%',
      end: '150% 50%',
      scrub: true,
    },
    y: '15rem',
  });
  gsap.to('.hero-hiw_component', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_hero-hiw',
      start: '50% 50%',
      end: '150% 50%',
      scrub: true,
    },
    y: '5rem',
  });
}

export function createSlideHowIt() {
  gsap.fromTo(
    '.move-hiw_heading-sub.is-left',
    {
      x: '-2rem',
      opacity: 0,
    },
    {
      x: '0rem',
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        markers: false,
        trigger: '.move-hiw_content',
        start: '0% 95%',
        end: '100% 95%',
        toggleActions: 'play none none reset',
      },
    }
  );
  gsap.fromTo(
    '.move-hiw_heading-sub.is-right',
    {
      x: '2rem',
      opacity: 0,
    },
    {
      x: '0rem',
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        markers: false,
        trigger: '.move-hiw_content',
        start: '0% 95%',
        end: '100% 95%',
        toggleActions: 'play none none reset',
      },
    }
  );
}

export function mockupMoveHowIt() {
  gsap.fromTo(
    '[float="left"]',
    {
      y: '-0.5rem',
      rotateZ: '1deg',
      ease: 'power1.inOut',
    },
    {
      y: '0.5rem',
      rotateZ: '-1deg',
      ease: 'power1.inOut',
      duration: 1.5,
      yoyo: true,
      repeat: -1,
    }
  );
  gsap.fromTo(
    '[float="right"]',
    {
      y: '0.5rem',
      rotateZ: '-1deg',
      ease: 'power1.inOut',
    },
    {
      y: '-0.5rem',
      rotateZ: '1deg',
      ease: 'power1.inOut',
      duration: 1.5,
      yoyo: true,
      repeat: -1,
    }
  );
}

export function rewardHowIt() {
  gsap.to('.reward-hiw_right-wrapper', {
    scrollTrigger: {
      markers: false,
      trigger: '.reward-hiw_app-wrapper',
      start: '30% 50%',
      end: '230% 50%',
      scrub: true,
    },
    y: '7rem',
  });
}

export function loadHowIt() {
  gsap.fromTo(
    '.energy-hiw_loading',
    {
      width: '50%',
    },
    {
      width: '100%',
      scrollTrigger: {
        markers: false,
        trigger: '.section_energy-hiw',
        start: '15% 50%',
        end: '85% 50%',
        scrub: true,
      },
    }
  );
}

export function bagScaleHowIt() {
  gsap.fromTo(
    '.earn-hiw_middle-bag',
    {
      scale: '1',
      rotateZ: '1deg',
      ease: 'power1.inOut',
    },
    {
      scale: '1.1',
      rotateZ: '-1deg',
      ease: 'power1.inOut',
      duration: 1.5,
      yoyo: true,
      repeat: -1,
    }
  );
}

export function babyfitScrollHowIt() {
  gsap.to('.babyfit-hiw_collection-list-wrapper.is-bottom', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_babyfit-hiw',
      start: '-50% 50%',
      end: '150% 50%',
      scrub: true,
    },
    /* y: '5rem', */
    x: '15rem',
  });
  gsap.to('.babyfit-hiw_collection-list-wrapper.is-top', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_babyfit-hiw',
      start: '25% 50%',
      end: '100% 15%',
      scrub: true,
    },
    /* y: '5rem', */
    x: '-15rem',
  });
}

export function loadingSquadHowIt() {
  gsap.fromTo(
    '.squad-hiw_loading',
    {
      width: '0%',
    },
    {
      scrollTrigger: {
        markers: false,
        trigger: '.section_squad-hiw',
        start: '20% 50%',
        end: '100% 70%',
        scrub: true,
      },
      /* y: '5rem', */
      width: '60%',
      duration: 2.5,
      stagger: 0.5,
    }
  );
}

export function counterUpHowIt() {
  const elements = document.querySelectorAll('.hold-hiw_text-number');

  elements.forEach((element) => {
    const endValue = parseInt(element.textContent || '0', 10);

    gsap.fromTo(
      element,
      { textContent: 0 },
      {
        textContent: endValue,
        duration: 2,
        ease: 'power1.inOut',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: '.hold-hiw_content',
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reset',
          markers: false,
        },
        onUpdate: function () {
          element.textContent = Math.ceil(parseFloat(this.targets()[0].textContent)).toString();
        },
      }
    );
  });
}

export function parallaxTeamHowIt() {
  gsap.to('.team-hiw_background.is-bottom', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_team-hiw',
      start: '0% 75%',
      end: '100% 25%',
      scrub: true,
    },
    y: '-5%',
  });
  gsap.to('.team-hiw_background.is-top', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_team-hiw',
      start: '0% 75%',
      end: '100% 25%',
      scrub: true,
    },
    scale: 1.05,
    y: '5%',
  });
  gsap.set('.team-hiw_component', { y: '-5rem' });
  gsap.to('.team-hiw_component', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_team-hiw',
      start: '0% 75%',
      end: '100% 25%',
      scrub: true,
    },
    scale: 1.025,
    y: '5rem',
  });
}

export function parallaxJoinTeamHowIt() {
  gsap.set('.create-hiw_background', { scale: 0.9 });
  gsap.to('.create-hiw_background', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_create-hiw',
      start: '0% 75%',
      end: '100% 25%',
      scrub: true,
    },
    scale: 1,
  });
}

export function parallaxTabsHowIt() {
  gsap.set('.tabs-hiw_background', { y: '-5rem' });
  gsap.to('.tabs-hiw_background', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_tabs-hiw',
      start: '0% 75%',
      end: '100% 25%',
      scrub: true,
    },
    y: '5rem',
  });
}
