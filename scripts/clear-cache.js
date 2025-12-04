const { rimraf } = require('rimraf');

(async () => {
    await rimraf('./node_modules/.cache');
    await rimraf('./.next');
    console.log('✅ Cache cleared');
})();
