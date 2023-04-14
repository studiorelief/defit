// V2 with data format

// Function to format numbers with commas
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

export { get_dataHero };

// Function to get thousands value
function getThousandsValue(x) {
  return Math.floor(x / 1000);
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

/* // fetch hero data in app
async function get_dataHero() {
  const response = await fetch('https://api.360wellness.io/auth/public/hero/stat');
  const dataHero = await response.json();
  document.getElementById('active-player').textContent = dataHero.numberOfPlayers;
  document.getElementById('activities').textContent = dataHero.numberOfActivities;
  document.getElementById('km').textContent = dataHero.totalDistance;
}

const activePlayers = document.querySelectorAll('#active-player');
activePlayers.forEach((player) => {
  player.style.color = '#00C4FF';
});

export { get_dataHero };

// fetch social data in app
async function get_socialData() {
  const response = await fetch(
    'https://api.360wellness.io/auth/public/social_community_members/stat'
  );
  const socialData = await response.json();
  document.getElementById('twitter').textContent = socialData.twitter;
  document.getElementById('discord').textContent = socialData.discord;
  document.getElementById('telegram').textContent = socialData.telegram;
}

export { get_socialData }; */
