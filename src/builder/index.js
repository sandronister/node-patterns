const PersonBuilder = require("./PersonBuilder");

const mario = new PersonBuilder("Mario").makeEmployee().makeManager(60).build();
const alex = new PersonBuilder("Alex")
  .withMoney(5000)
  .withList(["Macbook", "Iphone"])
  .build();

console.log(mario.toString());
console.log(alex.toString());
