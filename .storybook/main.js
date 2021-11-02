const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      assets: path.join(__dirname, '../source/assets'),
      components: path.join(__dirname, '../source/components'),
      constants: path.join(__dirname, '../source/constants'),
      layouts: path.join(__dirname, '../source/layouts'),
      routes: path.join(__dirname, '../source/routes'),
      styles: path.join(__dirname, '../source/styles'),
      'ui-kit': path.join(__dirname, '../source/ui-kit'),
    }

    config.module.rules = config.module.rules.map(rule => {
      if (rule.test.toString().includes('svg')) {
        const test = rule.test.toString().replace('svg|', '').replace(/\//g, '')
        return { ...rule, test: new RegExp(test) }
      } else {
        return rule
      }
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
      }],
    });

    return config;
  },
}
