const Logger = require("./Logger");

const logger = new Logger();

class Shopper {
  constructor(name, money = 0) {
    this.name = name;
    this.money = money;
    logger.log(`New Shopper: ${this.name} has ${this.money} in their account`);
  }
}

module.exports = Shopper;
