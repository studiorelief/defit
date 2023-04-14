// Backup weglot.ts - 14.04.23 - 10h28
function callWeglot() {
  /*   // weglot plugin
  const script = document.createElement('script');
  script.src = 'https://cdn.weglot.com/weglot.min.js';
  script.type = 'text/javascript';
  document.head.appendChild(script); */

  // init Weglot
  Weglot.initialize({
    api_key: 'wg_0a442ce2257ee6e6a96e7f04da6ad17c1',
  });

  // on Weglot init
  Weglot.on('initialized', () => {
    // get the current active language
    const currentLang = Weglot.getCurrentLang();
    // call updateFlagDropdownLinks functions
    updateSW8FlagDropdownLinks(currentLang);
  });

  // for each of the .wg-element-wrapper language links
  document.querySelectorAll('.wg-element-wrapper.sw8 [lang]').forEach((link) => {
    // add a click event listener
    link.addEventListener('click', function (e) {
      // prevent default
      e.preventDefault();
      // switch to the current active language
      Weglot.switchTo(this.getAttribute('lang'));
      // call updateDropdownLinks function
      updateSW8FlagDropdownLinks(this.getAttribute('lang'));
    });
  });

  // updateFlagDropdownLinks function
  function updateSW8FlagDropdownLinks(currentLang) {
    // get the wrapper element
    const $wrapper = document.querySelector('.wg-element-wrapper.sw8');
    // if the .w-dropdown-toggle is not the current active language
    if ($wrapper.querySelector('.w-dropdown-toggle').getAttribute('lang') !== currentLang) {
      // swap the dropdown toggle's innerHTML with the current active language link innerHTML
      const $activeLangLink = $wrapper.querySelector('[lang=' + currentLang + ']');
      const childDiv = $activeLangLink.innerHTML;
      const $toggle = $wrapper.querySelector('.w-dropdown-toggle');
      const toggleDiv = $toggle.innerHTML;
      $toggle.innerHTML = childDiv;
      $activeLangLink.innerHTML = toggleDiv;

      // swap the dropdown toggle's lang attr with the current active language link lang attr
      const lang = $activeLangLink.getAttribute('lang');
      const toggleLang = $toggle.getAttribute('lang');
      $toggle.setAttribute('lang', lang);
      $activeLangLink.setAttribute('lang', toggleLang);
    }
  }
}

/* export { callWeglot }; */

/* // update 9:34 with refreshWeglot
function refreshWeglot() {
  if (typeof Weglot !== 'undefined') {
    Weglot.refresh();
  }
} */

// update 9:34 with refreshWeglot
function reinitializeWeglot() {
  if (typeof Weglot !== 'undefined') {
    Weglot.initialize({
      api_key: 'wg_0a442ce2257ee6e6a96e7f04da6ad17c1',
    });
  }
}

/* export { callWeglot, refreshWeglot }; */
export { callWeglot, reinitializeWeglot };

// Backup index.ts - 14.04.23 - 10h10

import barba from '@barba/core';
import { gsap } from 'gsap';

import { get_dataHero, get_socialData } from '$utils/fetch-data';
import { nftTyping } from '$utils/typed';
/* import { callWeglot, reinitializeWeglot } from '$utils/weglot'; */

// init Weglot
Weglot.initialize({
  api_key: 'wg_0a442ce2257ee6e6a96e7f04da6ad17c1',
});

// on Weglot init
Weglot.on('initialized', () => {
  // get the current active language
  const currentLang = Weglot.getCurrentLang();
  // call updateFlagDropdownLinks functions
  updateSW8FlagDropdownLinks(currentLang);
});

// for each of the .wg-element-wrapper language links
document.querySelectorAll('.wg-element-wrapper.sw8 [lang]').forEach((link) => {
  // add a click event listener
  link.addEventListener('click', function (e) {
    // prevent default
    e.preventDefault();
    // switch to the current active language
    Weglot.switchTo(this.getAttribute('lang'));
    // call updateDropdownLinks function
    updateSW8FlagDropdownLinks(this.getAttribute('lang'));
  });
});

// updateFlagDropdownLinks function
function updateSW8FlagDropdownLinks(currentLang) {
  // get the wrapper element
  const $wrapper = document.querySelector('.wg-element-wrapper.sw8');
  // if the .w-dropdown-toggle is not the current active language
  if ($wrapper.querySelector('.w-dropdown-toggle').getAttribute('lang') !== currentLang) {
    // swap the dropdown toggle's innerHTML with the current active language link innerHTML
    const $activeLangLink = $wrapper.querySelector('[lang=' + currentLang + ']');
    const childDiv = $activeLangLink.innerHTML;
    const $toggle = $wrapper.querySelector('.w-dropdown-toggle');
    const toggleDiv = $toggle.innerHTML;
    $toggle.innerHTML = childDiv;
    $activeLangLink.innerHTML = toggleDiv;

    // swap the dropdown toggle's lang attr with the current active language link lang attr
    const lang = $activeLangLink.getAttribute('lang');
    const toggleLang = $toggle.getAttribute('lang');
    $toggle.setAttribute('lang', lang);
    $activeLangLink.setAttribute('lang', toggleLang);
  }
}

// update 9:34 with refreshWeglot
function reinitializeWeglot() {
  if (typeof Weglot !== 'undefined') {
    Weglot.initialize({
      api_key: 'wg_0a442ce2257ee6e6a96e7f04da6ad17c1',
    });
  }
}

// Call the Weglot function
callWeglot();

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

// Add Barba afterEnter hook to refresh Weglot translation
barba.hooks.afterEnter((data) => {
  // Reinitialize Weglot translation
  setTimeout(() => {
    reinitializeWeglot();
  }, 0);
});

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
