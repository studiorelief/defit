import barba from '@barba/core';
import { restartWebflow } from '@finsweet/ts-utils';
import { gsap } from 'gsap';

// barba.js transitions
barba.init({
  debug: true,
  transitions: [
    {
      name: 'left to right',
      to: {
        namespace: ['nft'],
      },
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

  const activePlayers = document.querySelectorAll('[hero-data="active-players"]');
  activePlayers.forEach((player) => {
    player.style.color = '#00C4FF';
  });
});
