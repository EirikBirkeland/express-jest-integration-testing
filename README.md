# Integration testing an Express server with Jest

* `index.js` spins up the server and exports it.
* This server is required in the spec file, so we can manipulate it directly by calling commands like `server.close();` to close the server after we're done testing it.
