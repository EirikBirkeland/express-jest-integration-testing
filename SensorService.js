// regularly polled temperature data exported as a live-updating singleton
const childProcess = require('child_process');
const { getRandomArbitrary } = require('./util');

class SensorService {
  constructor () {
  }

  getTemperature (cb) {
    // TODO: Replace with real sensor call
    return childProcess.
		execSync("vcgencmd measure_temp")
		.toString()
		.replace(/.*?([0-9]+[.]?[0-9]+).*/, "$1")
		.replace(/\r?\n$/, "");
  }
}

module.exports = new SensorService();
