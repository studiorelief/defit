interface CustomWindow extends Window {
  opera?: string;
  MSStream?: string;
}

declare const window: CustomWindow;

// Fonction pour détecter l'OS
function getMobileOperatingSystem(): string {
  const userAgent = (navigator.userAgent || navigator.vendor || window.opera) ?? '';

  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone';
  }
  if (/android/i.test(userAgent)) {
    return 'Android';
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  }
  return 'unknown';
}

// Cache les éléments en fonction de l'OS détecté
function hideElementsByOS(): void {
  const os = getMobileOperatingSystem();

  if (os === 'iOS') {
    const androidButton = document.querySelector('.home-hero_d-button.is-android') as HTMLElement;
    const androidQrCodeCards = document.querySelector(
      '.worldwide_qrcode-cards.is-android'
    ) as HTMLElement;
    if (androidButton) {
      androidButton.style.display = 'none';
    }
    if (androidQrCodeCards) {
      androidQrCodeCards.style.display = 'none';
    }
  } else if (os === 'Android') {
    const appleButton = document.querySelector('.home-hero_d-button.is-apple') as HTMLElement;
    const appleQrCodeCards = document.querySelector(
      '.worldwide_qrcode-cards.is-apple'
    ) as HTMLElement;
    if (appleButton) {
      appleButton.style.display = 'none';
    }
    if (appleQrCodeCards) {
      appleQrCodeCards.style.display = 'none';
    }
  }
}

// Exécute la fonction hideElementsByOS au chargement de la page
document.addEventListener('DOMContentLoaded', hideElementsByOS);

export { getMobileOperatingSystem, hideElementsByOS };
