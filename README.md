# Integration testing an Express server with Jest

* `index.js` exports the server
* This server is spun up as a side-effect when required in the spec file.
* Since the server is exported, we can control the server, e.g. run `server.close();` to close the server after we're done testing it.
