import barba from '@barba/core';
import { restartWebflow } from '@finsweet/ts-utils';
import { gsap } from 'gsap';

import { greetUser } from '$utils/greet';

// barba.js transitions
barba.init({
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
