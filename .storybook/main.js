module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          postcssOptions: {
            plugins: [require.resolve('tailwindcss')],
          },
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
};
