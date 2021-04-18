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