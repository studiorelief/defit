import barba from '@barba/core';
import { gsap } from 'gsap';

import { get_dataHero, get_socialData } from '$utils/fetch-data';
import { nftTyping } from '$utils/typed';
import { callWeglot } from '$utils/weglot';

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
  debug: true,
  views: [
    {
      namespace: 'app',
      afterEnter() {
        console.log('enter app');
        get_dataHero();
        get_socialData();
      },
    },
    {
      namespace: 'nft',
      afterEnter() {
        console.log('enter nft');
        nftTyping();
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
        return gsap.fromTo(
          data.current.container,
          { xPercent: 0 },
          {
            xPercent: 100,
            ease: 'power2.inOut',
            duration: 0.8,
          }
        );
      },

      //enter
      enter(data) {
        console.log('enter > app');
        console.log(data);
        const transitionData = data;
        return gsap.fromTo(
          data.next.container,
          { xPercent: -100 },
          {
            xPercent: 0,
            ease: 'power2.inOut',
            duration: 0.8,
            onComplete: () => {
              resetWebflow(transitionData);
              window.scrollTo(0, 0); // scroll to top of the page
              setTimeout(() => {
                window.scrollBy(0, 1); // scroll down 1 pixel
              }, 1000);
            },
          }
        );
      },
    },
    {
      // ANIM NFT
      name: 'left to right',
      sync: true,
      to: {
        namespace: ['nft'],
      },
      // leave
      leave(data) {
        console.log('leave > nft');
        console.log(data);
        return gsap.fromTo(
          data.current.container,
          { xPercent: 0 },
          {
            xPercent: -100,
            ease: 'power2.inOut',
            duration: 0.8,
          }
        );
      },
      // enter
      enter(data) {
        console.log('enter > nft');
        console.log(data);
        const transitionData = data;
        return gsap.fromTo(
          data.next.container,
          { xPercent: 100 },
          {
            xPercent: 0,
            ease: 'power2.inOut',
            duration: 0.8,
            onComplete: () => {
              resetWebflow(transitionData);
              window.scrollTo(0, 0); // scroll to top of the page
              setTimeout(() => {
                window.scrollBy(0, 1); // scroll down 1 pixel
              }, 1000);
            },
          }
        );
      },
    },
  ],
});

/* barba.hooks.before(async () => {
  console.log('hooks > before');
  await restartWebflow();
}); */
