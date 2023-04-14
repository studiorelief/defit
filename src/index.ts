import barba from '@barba/core';
import { gsap } from 'gsap';

import { get_dataHero, get_socialData } from '$utils/fetch-data';
import { pTransAppLeft, pTransNftRight } from '$utils/gsap-animation';
import { loadModelViewerScript } from '$utils/modal-viewer';
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
