// Dependencies
const port = require('./config.js').port;
var express = require('express');
var bodyParser = require('body-parser');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(port);
console.log(`[DEBUG] API is running on port ${port}`);