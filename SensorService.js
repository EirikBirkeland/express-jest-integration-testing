// regularly polled temperature data exported as a live-updating singleton
const childProcess = require('child_process');
const { getRandomArbitrary } = require('./util');

class SensorService {
  constructor () {
  }

  getAmbientTemperature (cb) {
    const temperatureMs = childProcess.execSync("cat /sys/bus/w1/devices/28-0118308718ff/w1_slave")
                       .toString()
                       .replace(/\n/g, " ")
                       .replace(/.*t=([0-9]+).*/, "$1")

    return temperatureMs / 1000;
  }

	
  getCpuTemperature (cb) {
    return childProcess.
		execSync("vcgencmd measure_temp")
		.toString()
		.replace(/.*?([0-9]+[.]?[0-9]+).*/, "$1")
		.replace(/\r?\n$/, "");
  }
}

module.exports = new SensorService();
