import './index.css';

import barba from '@barba/core';
import gsap from 'gsap';

<<<<<<< Updated upstream
import { get_socialData, initializeDataHero } from '$utils/fetch-data';
=======
import { copyFitness } from '$utils/fitness-coin';
import { roundNumbersInClass } from '$utils/footer-data';
>>>>>>> Stashed changes
import { loadAttributesScript } from '$utils/fs-attributes';
import {
  pTransAppLeft,
  pTransBlogRight,
  pTransLegalsRight,
  pTransNftRight,
  pTransTeamRight,
} from '$utils/gsap-animation';
<<<<<<< Updated upstream
=======
import { heroAnim, resetTimeline } from '$utils/hero-animation';
import { updateHomeHeroItem } from '$utils/hero-data';
import { initSwipelux } from '$utils/initSwipelux';
>>>>>>> Stashed changes
import { loadModelViewerScript } from '$utils/modal-viewer';
import { getMobileOperatingSystem, hideElementsByOS } from '$utils/os-function';
import { appSwiper } from '$utils/swiper';
import { loadTypedScript, nftTyping } from '$utils/typed';
import { callWeglot } from '$utils/weglot';
<<<<<<< Updated upstream

// Load Weglot
callWeglot()
  .then(() => {
    console.log('Weglot script loaded and initialized successfully');
  })
  .catch((error) => {
    console.error('Error loading and initializing Weglot script:', error);
  });

// load modalviewser
loadModelViewerScript()
  .then(() => {
    console.log('Model viewer script loaded successfully');
  })
  .catch((error) => {
    console.error('Error loading model viewer script:', error);
  });

// Load the scripts
loadAttributesScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js')
  .then(() => {
    console.log('CMS Filter script loaded');
  })
  .catch((error) => {
    console.error(error);
  });

// Load OS function
// Exécute la fonction hideElementsByOS au chargement de la page
document.addEventListener('DOMContentLoaded', hideElementsByOS);

// reset webflow interactions
function resetWebflow(data) {
  const parser = new DOMParser();
  const dom = parser.parseFromString(data.next.html, 'text/html');
  const webflowPageId = $(dom).find('html').attr('data-wf-page');
  $('html').attr('data-wf-page', webflowPageId);
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require('ix2').init();
=======
interface Webflow {
  destroy: () => void;
  ready: () => void;
  require: (module: string) => unknown;
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
// All enter
barba.hooks.enter(async (data) => {
  console.log('global enter hook');
  // reLoad Weglot
  callWeglot();
  // Fade content to opacity 1
  await gsap.to(data.next.container, {
    opacity: 1,
    duration: 0.5,
  });
});

// barba.js transitions
barba.init({
  preventRunning: true,
  cache: false,
  debug: true,
  views: [
    {
      namespace: 'app',
      beforeEnter() {
        // API call
        get_socialData();
        initializeDataHero();

        // OS function
        getMobileOperatingSystem();
        hideElementsByOS();

        // load Swiper
        loadSwiper()
          .then(() => {
            console.log('Swiper script loaded successfully');
            appSwiper();
          })
          .catch((error) => {
            console.error('Error loading Swiper script:', error);
          });
      },
      afterEnter() {
        console.log('enter app');
      },
    },
    {
      namespace: 'nft',
      beforeEnter() {
        // load typed
        loadTypedScript()
          .then(() => {
            console.log('Typed.js script loaded successfully');
            nftTyping();
          })
          .catch((error) => {
            console.error('Error loading typed.js script:', error);
          });
      },
      afterEnter() {
        console.log('enter nft');
      },
    },
    {
      namespace: 'team',
      beforeEnter() {},
      afterEnter() {
        console.log('enter team');
      },
    },
    {
      namespace: 'legals',
      beforeEnter() {},
      afterEnter() {
        console.log('enter legals');
      },
    },
    {
      namespace: 'blog',
      beforeEnter() {
        // Load the scripts
        loadAttributesScript(
          'https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'
        )
          .then(() => {
            console.log('CMS Filter script loaded');
          })
          .catch((error) => {
            console.error(error);
          });
      },
      afterEnter() {
        console.log('enter blog');
      },
    },
  ],
  transitions: [
    {
      // ANIM APP
      name: 'app - right to left',
      sync: true,
      to: {
        namespace: ['app'],
      },
      // leave
      leave(data) {
        console.log('leave > app');
        console.log(data);
        const transitionData = data;
        pTransAppLeft(() => {
          resetWebflow(transitionData);
          window.scrollTo(0, 0); // scroll to top of the page
          setTimeout(() => {
            window.scrollBy(0, 1); // scroll down 1 pixel
          }, 500);
        });
      },

      //enter
      enter(data) {
        console.log('enter > app');
        console.log(data);
      },
    },
    {
      // ANIM NFT
      name: 'nft - left to right',
      sync: true,
      to: {
        namespace: ['nft'],
      },

      // leave
      leave(data) {
        console.log('leave > nft');
        console.log(data);
        const transitionData = data;

        pTransNftRight(() => {
          resetWebflow(transitionData);
          window.scrollTo(0, 0); // scroll to top of the page
          setTimeout(() => {
            window.scrollBy(0, 1); // scroll down 1 pixel
          }, 500);
        });
      },
      // enter
      enter(data) {
        console.log('enter > nft');
        console.log(data);
      },
    },
    {
      // ANIM TEAM
      name: 'team - left to right',
      sync: true,
      to: {
        namespace: ['team'],
      },

      // leave
      leave(data) {
        console.log('leave > team');
        console.log(data);
        const transitionData = data;

        pTransTeamRight(() => {
          resetWebflow(transitionData);
          window.scrollTo(0, 0); // scroll to top of the page
          setTimeout(() => {
            window.scrollBy(0, 1); // scroll down 1 pixel
          }, 500);
        });
      },
      // enter
      enter(data) {
        console.log('enter > team');
        console.log(data);
      },
    },
    {
      // ANIM LEGALS
      name: 'legals - left to right',
      sync: true,
      to: {
        namespace: ['legals'],
      },

      // leave
      leave(data) {
        console.log('leave > legals');
        console.log(data);
        const transitionData = data;

        pTransLegalsRight(() => {
          resetWebflow(transitionData);
          window.scrollTo(0, 0); // scroll to top of the page
          setTimeout(() => {
            window.scrollBy(0, 1); // scroll down 1 pixel
          }, 500);
        });
      },
      // enter
      enter(data) {
        console.log('enter > legals');
        console.log(data);
      },
    },
    {
      // ANIM BLOG
      name: 'blog - left to right',
      sync: true,
      to: {
        namespace: ['blog'],
      },

      // leave
      leave(data) {
        console.log('leave > blog');
        console.log(data);
        const transitionData = data;

        pTransBlogRight(() => {
          resetWebflow(transitionData);
          window.scrollTo(0, 0); // scroll to top of the page
          setTimeout(() => {
            window.scrollBy(0, 1); // scroll down 1 pixel
          }, 500);
        });
      },
      // enter
      enter(data) {
        console.log('enter > blog');
        console.log(data);
      },
    },
  ],
});
=======
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
          appSwiper();
        },
        afterEnter() {
          resetTimeline();
          heroAnim();
        },
      },
      {
        namespace: 'nft',
        beforeEnter() {
          loadTypedScript().then(() => {
            nftTyping();
          });
        },
      },
      {
        namespace: 'team',
      },
      {
        namespace: 'legals',
      },
      {
        namespace: 'blog',
        beforeEnter() {
          loadAttributesScript(
            'https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'
          );
        },
      },
    ],
    transitions: [
      {
        name: 'app - right to left',
        sync: true,
        to: {
          namespace: ['app'],
        },
        leave(data) {
          if (!data) return; // Check if data is defined
          const transitionData = data;
          pTransAppLeft(() => {
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
>>>>>>> Stashed changes
