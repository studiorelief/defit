function copyFitness() {
  // Function to copy text to clipboard
  function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    textArea.remove();
  }

  // Add event listener to all .icon-copy elements
  document.querySelectorAll('.icon-copy').forEach((icon) => {
    icon.addEventListener('click', function () {
      // Get the original text from the data attribute of the first element with class 'fitness-coin_contract-id'
      const textToCopy = document
        .querySelector('.fitness-coin_contract-id')
        .getAttribute('data-original-text');

      // Copy the text to clipboard
      copyToClipboard(textToCopy);

      // Show an alert
      alert('Text copied to clipboard!');
    });
  });

  function truncateText(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const text = element.textContent;
      if (text.length > 12) {
        // Assurez-vous que le texte a plus de 12 caractères avant de le tronquer
        // Stockez le texte original dans un attribut data
        element.setAttribute('data-original-text', text);

        const truncated = text.slice(0, 6) + '...' + text.slice(-6);
        element.textContent = truncated;
      }
    });
  }

  // Appel de la fonction pour tronquer le texte des éléments avec la classe .fitness-coin_contract-id
  truncateText('.fitness-coin_contract-id');
}

// To use the functionality, you can now simply call:
// copyFitness();

export { copyFitness };
