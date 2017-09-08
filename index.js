var chalk = require("chalk");

var message = chalk.hsl(20, 100, 50).bgRed.bold("Hello ") + chalk.underline.yellow("World");
console.log(message);