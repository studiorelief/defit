import barba from '@barba/core';
import { gsap } from 'gsap';

import { get_dataHero, get_socialData } from '$utils/fetch-data';
import { loadAttributesScript } from '$utils/fs-attributes';
import { pTransAppLeft, pTransNftRight } from '$utils/gsap-animation';
import { loadModelViewerScript } from '$utils/modal-viewer';
import { appSwiper, loadSwiper } from '$utils/swiper';
import { loadTypedScript, nftTyping } from '$utils/typed';
import { callWeglot } from '$utils/weglot';

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

loadAttributesScript(
  'https://cdn.jsdelivr.net/npm/@finsweet/attributes-codehighlight@1/codehighlight.js'
)
  .then(() => {
    console.log('Code Highlight script loaded');
  })
  .catch((error) => {
    console.error(error);
  });

// reset webflow interactions
function resetWebflow(data) {
  const parser = new DOMParser();
  const dom = parser.parseFromString(data.next.html, 'text/html');
  const webflowPageId = $(dom).find('html').attr('data-wf-page');
  $('html').attr('data-wf-page', webflowPageId);
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require('ix2').init();
}

// All leave
barba.hooks.leave(async (data) => {
  console.log('global leave hook');

  await gsap.set(data.next.container, {
    opacity: 0,
  });
});

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
        get_dataHero();
        get_socialData();
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
  ],
  transitions: [
    {
      // ANIM APP
      name: 'right to left',
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
          }, 1000);
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
      name: 'left to right',
      sync: true,
      to: {
        namespace: ['nft'],
      },

      // leave - v1
      leave(data) {
        console.log('leave > nft');
        console.log(data);
        const transitionData = data;

        pTransNftRight(() => {
          resetWebflow(transitionData);
          window.scrollTo(0, 0); // scroll to top of the page
          setTimeout(() => {
            window.scrollBy(0, 1); // scroll down 1 pixel
          }, 1000);
        });
      },
      // enter - v1
      enter(data) {
        console.log('enter > nft');
        console.log(data);
      },
    },
  ],
});
