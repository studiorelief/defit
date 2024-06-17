export function copyFitness(): void {
  // Function to copy text to clipboard
  function copyToClipboard(text: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    textArea.remove();
  }

  // Add event listener to all .icon-copy elements
  document.querySelectorAll<HTMLElement>('.icon-copy').forEach((icon) => {
    icon.addEventListener('click', function () {
      // Get the original text from the data attribute of the first element with class 'fitness-coin_contract-id'
      const textToCopy = document
        .querySelector<HTMLElement>('.fitness-coin_contract-id')
        ?.getAttribute('data-original-text');

      if (textToCopy) {
        // Copy the text to clipboard
        copyToClipboard(textToCopy);
        // Show an alert
        alert('Text copied to clipboard!');
      }
    });
  });

  function truncateText(selector: string): void {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    elements.forEach((element) => {
      const text = element.textContent || '';
      if (text.length > 12) {
        // Ensure the text is longer than 12 characters before truncating
        // Store the original text in a data attribute
        element.setAttribute('data-original-text', text);

        const truncated = text.slice(0, 6) + '...' + text.slice(-6);
        element.textContent = truncated;
      }
    });
  }

  // Call the function to truncate the text of elements with the class .fitness-coin_contract-id
  truncateText('.fitness-coin_contract-id');
}
