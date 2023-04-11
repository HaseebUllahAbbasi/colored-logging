const pino = require("pino");
const chalk = require("chalk");

class Logger {
  #print;
  /**
   *
   *
   * */
  constructor(projectName) {
    this.projectName = projectName;
    this.#print = pino({
      name: "",
      transport: {
        target: "pino-pretty",
      },
    });
  }
  sayHi() {
    console.log("hi");
  }
  #printData(data) {
    if (data) console.log(data);
  }
  info(message, data) {
    this.#print.info(chalk.greenBright(message));
    this.#printData(data);
  }
  warn(message, data) {
    this.#print.warn(chalk.yellowBright(message));
    this.#printData(data);
  }
  error(message, data) {
    this.#print.error(chalk.redBright(message));
    this.#printData(data);
  }
}

module.exports = Logger;
