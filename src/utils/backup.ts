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
