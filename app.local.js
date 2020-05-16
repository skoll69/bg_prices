const app = require('./app');

const server = app.listen(3000)

// For unit testing
module.exports = server

