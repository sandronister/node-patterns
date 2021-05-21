class Logger {
  constructor() {
    this.logs = [];
  }

  getCount() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${message} - ${timestamp}`);
  }
}

module.exports = Logger;
