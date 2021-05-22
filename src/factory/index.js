const userFactory = require("./userFactory");

const mario = userFactory("Mario", 500);
const luigi = userFactory("Luigi", 900, "employee", "Okdok");

luigi.payDay(100);

console.log(mario.toString());
console.log(luigi.toString());
