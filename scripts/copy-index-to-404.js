const { copyFileSync } = require('node:fs');

copyFileSync('build/index.html', 'build/404.html');
