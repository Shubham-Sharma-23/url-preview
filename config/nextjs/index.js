const envConfig = require("./env");
const headers = require("./files/headers.json");
const redirects = require("./files/redirects.json");
const webpackConfig = require("./webpack");

const _basePath = "/urlPreviewApp";

const configuration = (phase, { defaultConfig }) => {
  const config = {
    basePath: _basePath,
    distDir: "build",
    env: {
      basePath: _basePath,
      ...envConfig
    },
    poweredByHeader: false,
    trailingSlash: true,
    reactStrictMode: true,
    async redirects() { // Only applicable to builds generated with "next build"
      return redirects;
    },
    async headers() { // Only applicable to builds generated with "next build"
      return headers;
    },
    webpack: webpackConfig // This is for emergency
  };
  
  return config;
};

module.exports = configuration;
