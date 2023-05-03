// V3 with count up & update
import { CountUp } from 'countup.js';

// dataHero.ts

function initializeDataHero() {
  // Function to format numbers with commas
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const activePlayerCountUp = new CountUp('active-player', 13000, {
    duration: 4,
    formattingFn: numberWithCommas,
  });
  const activitiesCountUp = new CountUp('activities', 300000, {
    duration: 4,
    formattingFn: numberWithCommas,
  });
  const kmCountUp = new CountUp('km', 2500000, {
    duration: 4,
    formattingFn: numberWithCommas,
  });

  // Start the count up animation with initial values
  if (!activePlayerCountUp.error) {
    activePlayerCountUp.start();
    activitiesCountUp.start();
    kmCountUp.start();
  } else {
    console.error(activePlayerCountUp.error);
  }

  // fetch hero data in app
  async function get_dataHero() {
    const response = await fetch('https://api.360wellness.io/auth/public/hero/stat');
    const dataHero = await response.json();

    // Update the count up instances with the fetched data
    activePlayerCountUp.update(dataHero.numberOfPlayers);
    activitiesCountUp.update(dataHero.numberOfActivities);
    kmCountUp.update(dataHero.totalDistance);
  }

  const activePlayers = document.querySelectorAll('#active-player');
  activePlayers.forEach((player) => {
    player.style.color = '#00C4FF';
  });

  get_dataHero();
}

export { initializeDataHero };

// V2 with data format

/* // Function to format numbers with commas
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// fetch hero data in app
async function get_dataHero() {
  const response = await fetch('https://api.360wellness.io/auth/public/hero/stat');
  const dataHero = await response.json();
  document.getElementById('active-player').textContent = numberWithCommas(dataHero.numberOfPlayers);
  document.getElementById('activities').textContent = numberWithCommas(dataHero.numberOfActivities);
  document.getElementById('km').textContent = numberWithCommas(dataHero.totalDistance);
}

const activePlayers = document.querySelectorAll('#active-player');
activePlayers.forEach((player) => {
  player.style.color = '#00C4FF';
});

export { get_dataHero }; */

// Function to get thousands value
function getThousandsValue(x) {
  return Math.floor(x / 100) / 10;
}

// fetch social data in app
async function get_socialData() {
  const response = await fetch(
    'https://api.360wellness.io/auth/public/social_community_members/stat'
  );
  const socialData = await response.json();
  document.getElementById('twitter').textContent = getThousandsValue(socialData.twitter);
  document.getElementById('discord').textContent = getThousandsValue(socialData.discord);
  document.getElementById('telegram').textContent = getThousandsValue(socialData.telegram);
}

export { get_socialData };
