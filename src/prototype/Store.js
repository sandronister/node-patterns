const logger = require("./Logger");

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;
    logger.log(
      `New Store name ${this.name} has ${this.inventory.length} item in stock `
    );
  }
}

module.exports = Store;