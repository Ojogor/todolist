// Get the current settings from storage and set the form values
chrome.storage.sync.get('settings', function(data) {
    if (data.settings) {
      var settings = JSON.parse(data.settings);
      var colorSelect = document.getElementById('color-select');
      var fontSelect = document.getElementById('font-select');
      colorSelect.value = settings.color;
      fontSelect.value = settings.font;
    }
  });
  
  // Save the updated settings to storage when the form is submitted
  document.getElementById('options-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var colorSelect = document.getElementById('color-select');
    var fontSelect = document.getElementById('font-select');
    var settings = {
      color: colorSelect.value,
      font: fontSelect.value
    };
    chrome.storage.sync.set({ settings: JSON.stringify(settings) });
    alert('Settings saved!');
  });