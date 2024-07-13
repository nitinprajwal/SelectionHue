// background.js
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
      enabled: true,
      color: '#D3D3D3',
      opacity: 0.17
    });
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'updateSettings') {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'applySettings', settings: request.settings});
      });
    }
  });