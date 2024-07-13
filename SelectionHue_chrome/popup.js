// popup.js
document.addEventListener('DOMContentLoaded', () => {
    const enabledCheckbox = document.getElementById('enabled');
    const colorPicker = document.getElementById('color');
    const opacitySlider = document.getElementById('opacity');
  
    chrome.storage.sync.get(['enabled', 'color', 'opacity'], (settings) => {
      enabledCheckbox.checked = settings.enabled;
      colorPicker.value = settings.color;
      opacitySlider.value = settings.opacity;
    });
  
    function updateSettings() {
      const settings = {
        enabled: enabledCheckbox.checked,
        color: colorPicker.value,
        opacity: parseFloat(opacitySlider.value)
      };
  
      chrome.storage.sync.set(settings);
      chrome.runtime.sendMessage({action: 'updateSettings', settings: settings});
    }
  
    enabledCheckbox.addEventListener('change', updateSettings);
    colorPicker.addEventListener('change', updateSettings);
    opacitySlider.addEventListener('input', updateSettings);
  });