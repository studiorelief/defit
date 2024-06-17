import { gsap } from 'gsap';

type OnCompleteCallback = () => void;

interface TransitionData {
  next: {
    container: HTMLElement;
  };
}

// Transition pour page APP > Right to Left
function pTransAppLeft(onComplete: OnCompleteCallback): void {
  const tl = gsap.timeline({
    onComplete: onComplete,
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
function pTransNftRight(onComplete: OnCompleteCallback): void {
  const tl = gsap.timeline({
    onComplete: onComplete,
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

// Transition pour page Legals > Left to Right
function pTransLegalsRight(onComplete: OnCompleteCallback): void {
  const tl = gsap.timeline({
    onComplete: onComplete,
  });

  tl.to('.a--legals-transition', {
    duration: 0.4,
    width: '100%',
    left: '0%',
    ease: 'ease-out',
  });

  tl.to('.a--legals-transition', {
    duration: 0.4,
    width: '0%',
    left: '100%',
    ease: 'ease-out',
    delay: 0.5,
  });

  tl.set('.a--legals-transition', {
    left: '-100%',
  });
}

// Transition pour page Team > Left to Right
function pTransTeamRight(onComplete: OnCompleteCallback): void {
  const tl = gsap.timeline({
    onComplete: onComplete,
  });

  tl.to('.a--team-transition', {
    duration: 0.4,
    width: '100%',
    left: '0%',
    ease: 'ease-out',
  });

  tl.to('.a--team-transition', {
    duration: 0.4,
    width: '0%',
    left: '100%',
    ease: 'ease-out',
    delay: 0.5,
  });

  tl.set('.a--team-transition', {
    left: '-100%',
  });
}

// Transition pour page Blog > Left to Right
function pTransBlogRight(onComplete: OnCompleteCallback): void {
  const tl = gsap.timeline({
    onComplete: onComplete,
  });

  tl.to('.a--blog-transition', {
    duration: 0.4,
    width: '100%',
    left: '0%',
    ease: 'ease-out',
  });

  tl.to('.a--blog-transition', {
    duration: 0.4,
    width: '0%',
    left: '100%',
    ease: 'ease-out',
    delay: 0.5,
  });

  tl.set('.a--blog-transition', {
    left: '-100%',
  });
}

function contentFade(onComplete: OnCompleteCallback, data: TransitionData): void {
  const tl = gsap.timeline({
    onComplete: onComplete,
  });
  tl.fromTo(
    data.next.container,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    }
  );
}

export {
  contentFade,
  pTransAppLeft,
  pTransBlogRight,
  pTransLegalsRight,
  pTransNftRight,
  pTransTeamRight,
};
