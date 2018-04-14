const app = require('express')();
const log = require('debug')(__filename);
const morgan = require('morgan');

app.use(morgan('tiny'));

app.get('/temperature', (req, res) => {
	res.status(200).send(`Current room temperature is 25.5'C`);
});

const PORT = 3333;
const server = app.listen(PORT, () => {
	log(`Server running on port ${PORT}`);
});

module.exports = server;
