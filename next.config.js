// const colors = require("colors/safe");

// const yellow = value => colors.bold.yellow(value);
// const red = value => colors.red(value);
// const green = value => colors.green(value);

const ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3000;
console.log(process.env);
console.log("Port prod::", process.env.PORT);
if (ENV === "development") {
    console.log(`"APPLICATION RUNNING IN DEVELOPMENT MODE"`);
  } else {
    console.log("****************************************************************");
  }
// if (ENV === "development") {
//   console.log(`${yellow("********** ")}${red("APPLICATION RUNNING IN DEVELOPMENT MODE")}${yellow(" *************")}`);
// } else {
//   console.log(yellow("****************************************************************"));
// }
// console.log(green(`PORT: ${PORT}`));
// console.log(green(`ENVIRONMENT: ${ENV}`));
// console.log(yellow("****************************************************************"));

module.exports = require("./config/nextjs");
