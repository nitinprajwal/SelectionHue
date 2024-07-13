// content.js
const browserAPI = chrome || browser;

let currentStyle = null;

function applySelectionStyle(settings) {
  if (currentStyle) {
    document.head.removeChild(currentStyle);
  }

  if (settings.enabled) {
    currentStyle = document.createElement("style");
    currentStyle.textContent = `
      ::selection {
        background-color: ${settings.color}${Math.round(settings.opacity * 255).toString(16).padStart(2, '0')};
        color: inherit;
      }
      ::-moz-selection {
        background-color: ${settings.color}${Math.round(settings.opacity * 255).toString(16).padStart(2, '0')};
        color: inherit;
      }
    `;
    document.head.appendChild(currentStyle);
  }
}

browserAPI.storage.local.get(['enabled', 'color', 'opacity'], (settings) => {
  applySelectionStyle(settings);
});

browserAPI.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'applySettings') {
    applySelectionStyle(request.settings);
  }
});