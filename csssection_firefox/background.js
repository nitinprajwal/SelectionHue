// background.js
const browserAPI = chrome || browser;

browserAPI.runtime.onInstalled.addListener(() => {
  browserAPI.storage.local.set({
    enabled: true,
    color: '#D3D3D3',
    opacity: 0.17
  });
});

browserAPI.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'updateSettings') {
    browserAPI.tabs.query({active: true, currentWindow: true}, (tabs) => {
      browserAPI.tabs.sendMessage(tabs[0].id, {action: 'applySettings', settings: request.settings});
    });
  }
});