import barba from '@barba/core';
import { restartWebflow } from '@finsweet/ts-utils';
import { gsap } from 'gsap';

import {} from '$utils/fetch-data';
import {} from '$utils/weglot';

// barba.js transitions
barba.init({
  debug: true,
  transitions: [
    {
      // ANIM NFT
      name: 'left to right',
      to: {
        namespace: ['nft'],
      },
      // leave
      async leave(data) {
        console.log('leave');
        console.log(data);

        await gsap.to(data.current.container, {
          opacity: 1,
          duration: 0.5,
          ease: 'ease-out',
        });

        gsap.to('.a--nft-transition', {
          width: '100vw',
          duration: 0.5,
          ease: 'ease-out',
        });
      },
      // enter
      async enter(data) {
        console.log('enter');
        console.log(data);

        await gsap.to(data.next.container, {
          opacity: 1,
          duration: 0.5,
        });

        gsap.from('.a--nft-transitione', {
          width: '100vw',
          duration: 0.5,
        });

        gsap.to('.a--nft-transition', {
          width: '0vw',
          duration: 0.5,
        });

        gsap.to('.section_nft-hero', {
          scaleX: 1,
          duration: 0.5,
          ease: 'ease-out',
        });
      },
    },
    {
      // ANIM APP
      name: 'right to left',
      to: {
        namespace: ['app'],
      },
      // leave
      async leave(data) {
        console.log('leave');
        console.log(data);

        await gsap.to(data.current.container, {
          opacity: 1,
          duration: 0.5,
          ease: 'ease-out',
        });

        /*         gsap.to('.a--app-leave', {
          width: '100vw',
          duration: 0.5,
          ease: 'ease-out',
        }); */

        gsap.to('.a--app-transition', {
          width: '100vw',
          duration: 0.5,
          ease: 'ease-out',
        });
      },
      //enter
      async enter(data) {
        console.log('enter');
        console.log(data);

        await gsap.to(data.next.container, {
          opacity: 1,
          duration: 0.5,
        });

        /* gsap.to('.a--app-leave', {
          width: '0vw',
          duration: 0.5,
          ease: 'ease-out',
        }); */

        gsap.from('.a--app-transition', {
          width: '100vw',
          /* duration: 0.5,
          ease: 'ease-out', */
        });

        gsap.to('.a--app-transition', {
          width: '0vw',
          duration: 0.5,
          ease: 'ease-out',
        });
      },
    },
  ],
  views: [
    {
      namespace: 'app',
      afterEnter() {
        console.log('enter app');
      },
    },
    {
      namespace: 'nft',
      afterEnter() {
        console.log('enter nft');
      },
    },
  ],
}),
  // scroll to the top of the page
  barba.hooks.enter(() => {
    window.scrollTo(0, 0);
  });

// barba.js reset page for animations & co
barba.hooks.after(async () => {
  await restartWebflow();

  // TS interaction - w/ Barba
  const box = document.querySelector('.box');
  box.addEventListener('click', () => {
    box.classList.toggle('is-big');
  });
});
