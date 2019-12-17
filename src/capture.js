const captureWebsite = require('capture-website');

(async () => {
  await captureWebsite.file('http://localhost:3000', 'screenshot.png');
})();
