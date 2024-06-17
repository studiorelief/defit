interface SwipeluxSettings {
  apiKey: string;
  availableReceiveCurrency: string;
}

interface SwipeluxWidget {
  new (container: HTMLElement | null, settings: SwipeluxSettings): {
    init: () => void;
  };
}

declare global {
  interface Window {
    SwipeluxWidget: SwipeluxWidget;
  }
}

function initSwipelux(): void {
  const swipeluxContainer = document.getElementById('swipelux-container');
  const settings: SwipeluxSettings = {
    apiKey: '8caf43db-8a9c-4772-b6ca-51f425212005',
    availableReceiveCurrency: 'DEFIT',
  };
  const widget = new window.SwipeluxWidget(swipeluxContainer, settings);
  widget.init();
}

export { initSwipelux };
