const path = require('path');
const nextJSConfig = require("../nextjs");

module.exports = {
  addons: ['@storybook/addon-storysource', '@storybook/preset-scss'],
  stories: ['../../src/**/*.stories.js'],
  // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  webpackFinal: async (config, { configType }) => {
    return {...config, ...nextJSConfig};
  }
};