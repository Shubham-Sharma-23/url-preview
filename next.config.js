const colors = require("colors/safe");

const yellow = value => colors.bold.yellow(value);
const red = value => colors.red(value);
const green = value => colors.green(value);

const ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3000;
if (ENV === "development") {
  console.log(`${yellow("********** ")}${red("APPLICATION RUNNING IN DEVELOPMENT MODE")}${yellow(" *************")}`);
} else {
  console.log(yellow("****************************************************************"));
}
console.log(green(`PORT: ${PORT}`));
console.log(green(`ENVIRONMENT: ${ENV}`));
console.log(yellow("****************************************************************"));

module.exports = require("./config/nextjs");
