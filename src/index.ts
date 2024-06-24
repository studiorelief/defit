import './index.css';

import barba from '@barba/core';
import gsap from 'gsap';

import { copyFitness } from '$utils/fitness-coin';
import { roundNumbersInClass } from '$utils/footer-data';
import { loadAttributesScript } from '$utils/fs-attributes';
import {
  babyfitScrollHowIt,
  bagScaleHowIt,
  counterUpHowIt,
  createSlideHowIt,
  heroHowIt,
  loadHowIt,
  loadingSquadHowIt,
  mockupMoveHowIt,
  parallaxJoinTeamHowIt,
  parallaxTabsHowIt,
  parallaxTeamHowIt,
  pTransAppRight,
  pTransBlogRight,
  pTransHiwRight,
  pTransLegalsRight,
  pTransNftRight,
  pTransTeamRight,
  resetGsapHowIt,
  rewardHowIt,
} from '$utils/gsap-animation';
import { heroAnim, resetTimeline } from '$utils/hero-animation';
import { updateHomeHeroItem } from '$utils/hero-data';
import { initSwipelux } from '$utils/initSwipelux';
import { loadModelViewerScript } from '$utils/modal-viewer';
import { getMobileOperatingSystem, hideElementsByOS } from '$utils/os-function';
/* import { appSwiper } from '$utils/swiper'; */
import { loadTypedScript, nftTyping } from '$utils/typed';
import { callWeglot } from '$utils/weglot';
interface Webflow {
  destroy: () => void;
  ready: () => void;
  require: (module: string) => unknown;
}

declare global {
  interface Window {
    Webflow?: Webflow | (() => void)[];
  }
}

function resetWebflow(data: { next: { html: string } }): void {
  const parser = new DOMParser();
  const dom = parser.parseFromString(data.next.html, 'text/html');
  const webflowPageId = (dom.querySelector('html') as HTMLElement)?.getAttribute('data-wf-page');

  if (webflowPageId) {
    document.documentElement.setAttribute('data-wf-page', webflowPageId);
  }

  const webflow = window.Webflow as Webflow | undefined;
  if (webflow) {
    webflow.destroy();
    webflow.ready();
    const ix2 = webflow.require('ix2');
    if (typeof ix2 === 'object' && ix2 !== null && 'init' in ix2) {
      (ix2 as { init: () => void }).init();
    }
  }
}

window.Webflow ||= [];
(window.Webflow as (() => void)[]).push(() => {
  // Load the scripts
  loadAttributesScript(
    'https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'
  );

  // Load Weglot
  callWeglot();

  // load modalviewser
  loadModelViewerScript();

  // Footer number round
  roundNumbersInClass();

  // Load OS function
  document.addEventListener('DOMContentLoaded', hideElementsByOS);

  // All leave
  barba.hooks.leave(async (data) => {
    if (!data) return; // Check if data is defined
    await gsap.set(data.next.container, { opacity: 0 });
    setTimeout(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        window.scrollBy(0, 1); // Scroll down 1 pixel
      }, 500);
    }, 500);
  });

  // All enter
  barba.hooks.enter(async (data) => {
    if (!data) return; // Check if data is defined
    callWeglot();
    await gsap.to(data.next.container, {
      opacity: 1,
      duration: 0.5,
    });
  });

  // barba.js transitions
  barba.init({
    preventRunning: true,
    debug: true,
    views: [
      {
        namespace: 'app',
        beforeEnter() {
          updateHomeHeroItem();
          copyFitness();
          initSwipelux();
          getMobileOperatingSystem();
          hideElementsByOS();
          /* appSwiper(); */
        },
        afterEnter() {
          resetTimeline();
          resetGsapHowIt();
          heroAnim();
        },
        beforeLeave() {
          resetTimeline();
          resetGsapHowIt();
        },
      },
      {
        namespace: 'nft',
        beforeEnter() {
          loadTypedScript().then(() => {
            nftTyping();
            resetTimeline();
            resetGsapHowIt();
          });
        },
      },
      {
        namespace: 'how-it-works',
        beforeEnter() {
          ScrollTrigger.refresh();
          resetTimeline();
        },
        afterEnter() {
          setTimeout(() => {
            ScrollTrigger.refresh();
            heroHowIt();
            createSlideHowIt();
            mockupMoveHowIt();
            rewardHowIt();
            loadHowIt();
            bagScaleHowIt();
            babyfitScrollHowIt();
            loadingSquadHowIt();
            counterUpHowIt();
            parallaxTeamHowIt();
            parallaxJoinTeamHowIt();
            parallaxTabsHowIt();
          }, 500);
        },
        beforeLeave() {
          setTimeout(() => {
            ScrollTrigger.refresh();
            resetTimeline();
            resetGsapHowIt();
          }, 500);
        },
      },
      {
        namespace: 'team',
        beforeLeave() {
          resetTimeline();
          resetGsapHowIt();
        },
      },
      {
        namespace: 'legals',
        beforeLeave() {
          resetTimeline();
          resetGsapHowIt();
        },
      },
      {
        namespace: 'blog',
        beforeEnter() {
          loadAttributesScript(
            'https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'
          );
        },
        beforeLeave() {
          resetTimeline();
          resetGsapHowIt();
        },
      },
    ],
    transitions: [
      {
        name: 'app - left to right',
        sync: true,
        to: {
          namespace: ['app'],
        },
        leave(data) {
          if (!data) return; // Check if data is defined
          const transitionData = data;
          pTransAppRight(() => {
            resetWebflow(transitionData);
            window.scrollTo(0, 0); // scroll to top of the page
            setTimeout(() => {
              window.scrollBy(0, 1); // scroll down 1 pixel
            }, 500);
          });
        },
      },
      {
        name: 'nft - left to right',
        sync: true,
        to: {
          namespace: ['nft'],
        },
        leave(data) {
          if (!data) return; // Check if data is defined
          const transitionData = data;
          pTransNftRight(() => {
            resetWebflow(transitionData);
            window.scrollTo(0, 0); // scroll to top of the page
            setTimeout(() => {
              window.scrollBy(0, 1); // scroll down 1 pixel
            }, 500);
          });
        },
      },
      {
        name: 'HIW - left to right',
        sync: true,
        to: {
          namespace: ['how-it-works'],
        },
        leave(data) {
          if (!data) return; // Check if data is defined
          const transitionData = data;
          pTransHiwRight(() => {
            resetWebflow(transitionData);
            window.scrollTo(0, 0); // scroll to top of the page
            setTimeout(() => {
              window.scrollBy(0, 1); // scroll down 1 pixel
            }, 500);
          });
        },
      },
      {
        name: 'team - left to right',
        sync: true,
        to: {
          namespace: ['team'],
        },
        leave(data) {
          if (!data) return; // Check if data is defined
          const transitionData = data;
          pTransTeamRight(() => {
            resetWebflow(transitionData);
            window.scrollTo(0, 0); // scroll to top of the page
            setTimeout(() => {
              window.scrollBy(0, 1); // scroll down 1 pixel
            }, 500);
          });
        },
      },
      {
        name: 'legals - left to right',
        sync: true,
        to: {
          namespace: ['legals'],
        },
        leave(data) {
          if (!data) return; // Check if data is defined
          const transitionData = data;
          pTransLegalsRight(() => {
            resetWebflow(transitionData);
            window.scrollTo(0, 0); // scroll to top of the page
            setTimeout(() => {
              window.scrollBy(0, 1); // scroll down 1 pixel
            }, 500);
          });
        },
      },
      {
        name: 'blog - left to right',
        sync: true,
        to: {
          namespace: ['blog'],
        },
        leave(data) {
          if (!data) return; // Check if data is defined
          const transitionData = data;
          pTransBlogRight(() => {
            resetWebflow(transitionData);
            window.scrollTo(0, 0); // scroll to top of the page
            setTimeout(() => {
              window.scrollBy(0, 1); // scroll down 1 pixel
            }, 500);
          });
        },
      },
    ],
  });
});
