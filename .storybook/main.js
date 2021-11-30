const path = require('path')
module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-postcss',
  ],
  staticDirs: ['../public'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  webpackFinal: async (config) => {
    const nextConfig = require('../next.config.js')
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: [ 'postcss-loader', 'sass-loader', 'style-loader', 'css-loader' ],
    //   include: path.resolve(__dirname, '../'),
    // })
    config.resolve.modules.push(process.cwd() + "/src");
    return { ...nextConfig.webpack, ...config }
  },
}