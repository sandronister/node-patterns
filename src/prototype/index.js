const scout_prototype = require("./scout.prototype");

const mario = scout_prototype.clone();
mario.name = "Mario Banks";
mario.addItemToList("slingshot");

const luigi = scout_prototype.clone();
luigi.name = "Luigi Procello";
luigi.addItemToList("reading lights");

console.log(`Mario Shopper ${mario.name} have a ${mario.getShoppingList()}`);
console.log(`Luigi Shopper ${luigi.name} have a ${luigi.getShoppingList()}`);
