// Backup 13.04.23 - 18h51

import barba from '@barba/core';
import { restartWebflow } from '@finsweet/ts-utils';
import { gsap } from 'gsap';

import { get_dataHero, get_socialData } from '$utils/fetch-data';
import { nftTyping } from '$utils/typed';
import { callWeglot } from '$utils/weglot';

callWeglot();

// barba.js transitions
barba.init({
  debug: true,
  transitions: [
    {
      // ANIM APP
      name: 'right to left',
      to: {
        namespace: ['app'],
      },
      // leave
      async leave(data) {
        console.log('leave > app');
        console.log(data);

        await gsap.to(data.current.container, {
          opacity: 1,
          duration: 0.5,
          ease: 'ease-out',
        });

        gsap.to('.a--app-transition', {
          width: '100vw',
          duration: 0.5,
          ease: 'ease-out',
        });
      },

      //enter
      async enter(data) {
        console.log('enter > app');
        console.log(data);

        await gsap.to(data.next.container, {
          opacity: 1,
          duration: 0.5,
        });

        gsap.from('.a--app-transition', {
          right: '0vw',
          duration: 0.5,
        });

        gsap.to('.a--app-transition', {
          right: '100vw',
          duration: 0.5,
        });
      },
    },
    {
      // ANIM NFT
      name: 'left to right',
      to: {
        namespace: ['nft'],
      },
      // leave
      async leave(data) {
        console.log('leave > nft');
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
        console.log('enter > nft');
        console.log(data);

        await gsap.to(data.next.container, {
          opacity: 1,
          duration: 0.5,
        });

        gsap.from('.a--nft-transition', {
          left: '0vw',
          duration: 0.5,
        });

        gsap.to('.a--nft-transition', {
          left: '100vw',
          duration: 0.5,
        });
      },
    },
  ],
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
}),
  // scroll to the top of the page
  barba.hooks.enter(async () => {
    console.log('hooks > Enter');
    await window.scrollTo(0, 0); // scroll to top of the page
    setTimeout(() => {
      window.scrollBy(0, 1); // scroll down 1 pixel
    }, 1000); // wait 1 second before scrolling
  });

/* barba.hooks.afterEnter(async () => {
  console.log('hooks > afterEnter');
  await restartWebflow();
}); */

barba.hooks.before(async () => {
  console.log('hooks > before');
  await restartWebflow();
});

// Backup 31.03.23 - 15h41

// barba.js transitions
barba.init({
  debug: true,
  transitions: [
    {
      name: 'default',
      /* before() {
            console.log('before');
          },
          beforeLeave() {
            console.log('beforeLeave');
          }, */
      async leave(data) {
        console.log('leave');
        console.log(data);
        await gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.5,
          ease: 'ease-out',
        });

        gsap.to('.a--app-transition', {
          width: '100vw',
          duration: 0.5,
          ease: 'ease-out',
        });
      },
      /* afterLeave() {
            console.log('afterLeave');
          },
          beforeEnter() {
            console.log('beforeEnter');
          }, */
      async enter(data) {
        console.log('enter');
        console.log(data);
        await gsap.to(data.next.container, {
          opacity: 1,
          duration: 0.5,
        });

        await gsap.to('.a--app-transition', {
          width: '0vw',
          duration: 0.5,
        });
      },
      /* afterEnter() {
            console.log('afterEnter');
          },
          after() {
            console.log('after');
          },  */
    },
  ],
});

// barba.js reset page for animations & co
barba.hooks.after(async () => {
  await restartWebflow();
  // Unload Weglot plugin
  if (typeof Weglot !== 'undefined') {
    await Weglot.unload();
  }

  // TS interaction - w/ Barba
  const box = document.querySelector('.box');
  box.addEventListener('click', () => {
    box.classList.toggle('is-big');
  });

  const activePlayers = document.querySelectorAll('[hero-data="active-players"]');
  activePlayers.forEach((player) => {
    player.style.color = '#00C4FF';
  });
});
