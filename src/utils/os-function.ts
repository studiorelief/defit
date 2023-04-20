// Fonction pour détecter l'OS
function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

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
function hideElementsByOS() {
  const os = getMobileOperatingSystem();

  if (os === 'iOS') {
    const androidButton = document.querySelector('.home-hero_d-button.is-android');
    if (androidButton) {
      androidButton.style.display = 'none';
      console.log('is IOS');
    }
  } else if (os === 'Android') {
    const appleButton = document.querySelector('.home-hero_d-button.is-apple');
    if (appleButton) {
      appleButton.style.display = 'none';
      console.log('is Androïd');
    }
  }
}

// Exécute la fonction hideElementsByOS au chargement de la page
document.addEventListener('DOMContentLoaded', hideElementsByOS);

export { getMobileOperatingSystem, hideElementsByOS };
