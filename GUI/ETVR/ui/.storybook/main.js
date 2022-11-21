const path = require('path')
const tailwindConfigPath = path.join(__dirname, '../../app/tailwind.config.js') // or your own config file
require('storybook-tailwind-foundations/initialize.js').default(tailwindConfigPath)

const resolve = (item) => {
  return path.join(__dirname, '../', item)
}
const { mergeConfig } = require('vite')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],

  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },

  viteFinal(config, {}) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@components': resolve('src/components'),
          '@utils': resolve('src/utils'),
          '@static': resolve('src/utils/static'),
          '@images': resolve('../../app/public/images'),
        },
      },
      define: {
        'process.env.NODE_DEBUG': 'false',
      },
    })
  },
}
