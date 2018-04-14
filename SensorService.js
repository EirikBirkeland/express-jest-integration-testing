// regularly polled temperature data exported as a live-updating singleton
const { getRandomArbitrary } = require('./util');

class SensorService {
  constructor () {
  }

  getTemperature () {
    return getRandomArbitrary(15, 35);
  }
}

module.exports = new SensorService();
