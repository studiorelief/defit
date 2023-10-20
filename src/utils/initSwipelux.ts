function initSwipelux() {
  const swipeluxContainer = document.getElementById('swipelux-container');
  const settings = {
    apiKey: '8caf43db-8a9c-4772-b6ca-51f425212005',
    availableReceiveCurrency: 'DEFIT',
  };
  const widget = new window.SwipeluxWidget(swipeluxContainer, settings);
  widget.init();
}

// To use the functionality, you can now simply call:
// initSwipelux();

export { initSwipelux };
