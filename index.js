const app = require('express')();

app.get('/temperature', (req, res) => {
	// get temperature here from acpi or whatever
	console.log('Received request');
	res.status(200).send('Current CPU temperature is 55\'C')
});

const PORT = 3333;
const server = app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
});

module.exports = server;
