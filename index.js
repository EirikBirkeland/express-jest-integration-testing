const app = require('express')();
const log = require('debug')(__filename);
const morgan = require('morgan');
const config = require('./config');
const SensorService = require('./SensorService');

app.use(morgan('tiny'));

app.get('/temperature', (req, res) => {
	const { room, unit } = config;
	const temperature  = SensorService.getTemperature();

	res.status(200).json({
		room: room,
		unit: unit,
		temperature: temperature,
		string: `${room} room temperature is ${temperature}'${unit}`,
	})
	//res.status(200).send();
});

const PORT = 3333;
const server = app.listen(PORT, () => {
	log(`Server running on port ${PORT}`);
});

module.exports = server;
