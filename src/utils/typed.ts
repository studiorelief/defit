declare global {
  interface Window {
    Typed: new (element: string, options: TypedOptions) => void;
  }
}

interface TypedOptions {
  strings: string[];
  typeSpeed: number;
  backSpeed: number;
  fadeOut: boolean;
  showCursor: boolean;
}

export function loadTypedScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/typed.js@2.0.132/dist/typed.umd.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load typed.js script'));
    document.head.appendChild(script);
  });
}

export function nftTyping(): void {
  const viewportObserver = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      new window.Typed('#typing', {
        strings: ['BECOME A DEFIT <br>WEB3 PLAYER'],
        typeSpeed: 100,
        backSpeed: 0,
        fadeOut: true,
        showCursor: false,
      });
      observer.unobserve(document.querySelector('#typing') as Element);
    }
  });

  viewportObserver.observe(document.querySelector('#typing') as Element);
}
