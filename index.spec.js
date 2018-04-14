const axios = require('axios');
const log = console.log;
const server = require('./index');

const client = axios.create({
  baseURL: 'http://localhost:3333/',
  timeout: 1000,
});

test('Query server for temperature', done => {
	client.get('/temperature')
		.then(res => {
			log("Retrieved data: " + res.data);
			expect(res.data).toMatch('CPU temperature');
			done();
			server.close();
		})
		.catch(console.error);
});
