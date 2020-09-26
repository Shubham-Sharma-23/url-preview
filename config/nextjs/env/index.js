// doc: https://nextjs.org/docs/api-reference/next.config.js/environment-variables

const ENV = process.env.NODE_ENV || "development";
const configs = require(`./files/${ENV}.json`);
const defaultConfig = require("./files/default.json");

const envConfig = {
    ...defaultConfig,
    ...configs
};

console.log(envConfig);

module.exports = envConfig;