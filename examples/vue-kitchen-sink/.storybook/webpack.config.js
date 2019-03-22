const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.vue$/,
    loader: require.resolve('@storybook/addon-notes/vue-docgen-loader'),
    enforce: 'post',
  });

  config.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  });
  return config;
};
