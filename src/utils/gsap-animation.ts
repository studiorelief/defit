import { gsap } from 'gsap';

// Transition pour page APP > Right to Left
function pTransAppLeft(onComplete) {
  const tl = gsap.timeline({
    onComplete: onComplete, // Add onComplete event to the timeline
  });

  tl.to('.a--app-transition', {
    duration: 0.4,
    width: '100%',
    right: '0%',
    ease: 'ease-out',
  });

  tl.to('.a--app-transition', {
    duration: 0.4,
    width: '0%',
    right: '100%',
    ease: 'ease-out',
    delay: 0.4,
  });

  tl.set('.a--app-transition', {
    right: '0%',
  });
}

// Transition pour page NFT > Left to Right
function pTransNftRight(onComplete) {
  const tl = gsap.timeline({
    onComplete: onComplete, // Add onComplete event to the timeline
  });

  tl.to('.a--nft-transition', {
    duration: 0.4,
    width: '100%',
    left: '0%',
    ease: 'ease-out',
  });

  tl.to('.a--nft-transition', {
    duration: 0.4,
    width: '0%',
    left: '100%',
    ease: 'ease-out',
    delay: 0.5,
  });

  tl.set('.a--nft-transition', {
    left: '-100%',
  });
}

export { pTransAppLeft, pTransNftRight };
