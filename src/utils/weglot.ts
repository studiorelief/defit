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

export { callWeglot };
