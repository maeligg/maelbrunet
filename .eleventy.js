const util = require('util');

module.exports = config => {
    config.addPassthroughCopy({ public: './' });
    config.addPassthroughCopy('src/css');
    config.addPassthroughCopy('src/images');
    config.addPassthroughCopy('src/fonts');
    config.addPassthroughCopy('src/admin');

    config.setUseGitIgnore(false);

    config.addFilter('dateToYear', function (date) {
        return date.getFullYear();
    });

    config.addFilter('console', function(value) {
        return util.inspect(value);
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes',
            data: '_data'
          },
          passthroughFileCopy: true
    }
};