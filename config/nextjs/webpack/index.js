// doc: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config

const webpackConfig = (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add webpack customizations here. 
    // Please add if it is absolutely necessary otherwise DO NOT TOUCH this file.

    // Important: return the modified config
    return config
};

module.exports = webpackConfig;