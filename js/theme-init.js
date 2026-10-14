(function () {
  var stored = null;

  try {
    stored = localStorage.getItem('cursestone-theme');
  } catch (error) {}

  document.documentElement.dataset.theme = stored === 'light' ? 'light' : 'dark';
})();
