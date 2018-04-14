const app = require('express')();
const log = require('debug')(__filename);
const morgan = require('morgan');
const config = require('./config');
const SensorService = require('./SensorService');

app.use(morgan('tiny'));

app.get('/temperature', (req, res) => {
	res.status(200);
	const { room, unit } = config;
	const { temperature } = SensorService.getTemperature();

	res.status(200).send(`${room} room temperature is ${temperature}'${unit}`);
});

const PORT = 3333;
const server = app.listen(PORT, () => {
	log(`Server running on port ${PORT}`);
});

module.exports = server;
