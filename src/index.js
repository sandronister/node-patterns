const Logger = require("./Logger");
const Shopper = require("./Shopper");
const Store = require("./Store");

const logger = new Logger().getInstance();
logger.log("Stating app ...");

const mario = new Shopper("Mario", 5000.4);
const vegaStore = new Store("Vega Store", [
  {
    item: "Tofu",
    qty: 20,
    price: 10.5,
  },
  {
    item: "Vegetables",
    qty: 1000,
    price: 3.4,
  },
]);

logger.log("Finished -------");

console.log(`${logger.getCount()} total`);
logger.logs.map((log) => console.log(`${log.message}`));
