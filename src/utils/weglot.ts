interface IWeglot {
  initialize(options: { api_key: string }): void;
  on(event: string, callback: () => void): void;
  getCurrentLang(): string;
  switchTo(lang: string): void;
}

declare const Weglot: IWeglot;

function loadWeglotScript(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.weglot.com/weglot.min.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Weglot script'));
    document.head.appendChild(script);
  });
}

async function callWeglot(): Promise<void> {
  await loadWeglotScript();

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
    link.addEventListener('click', function (this: HTMLElement, e: Event) {
      e.preventDefault();
      const lang = this.getAttribute('lang');
      if (lang) {
        // switch to the current active language
        Weglot.switchTo(lang);
        // call updateDropdownLinks function
        updateSW8FlagDropdownLinks(lang);
      }
    });
  });
}

// updateFlagDropdownLinks function
function updateSW8FlagDropdownLinks(currentLang: string): void {
  // get the wrapper element
  const $wrapper = document.querySelector('.wg-element-wrapper.sw8');
  if (!$wrapper) return;

  // if the .w-dropdown-toggle is not the current active language
  const $toggle = $wrapper.querySelector('.w-dropdown-toggle');
  if ($toggle && $toggle.getAttribute('lang') !== currentLang) {
    const $activeLangLink = $wrapper.querySelector(`[lang=${currentLang}]`);
    if ($activeLangLink) {
      const childDiv = $activeLangLink.innerHTML;
      const toggleDiv = $toggle.innerHTML;
      $toggle.innerHTML = childDiv;
      $activeLangLink.innerHTML = toggleDiv;

      // swap the dropdown toggle's lang attr with the current active language link lang attr
      const lang = $activeLangLink.getAttribute('lang');
      const toggleLang = $toggle.getAttribute('lang');
      if (lang && toggleLang) {
        $toggle.setAttribute('lang', lang);
        $activeLangLink.setAttribute('lang', toggleLang);
      }
    }
  }
}

export { callWeglot, loadWeglotScript };
