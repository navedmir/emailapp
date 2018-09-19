'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    index = require('./routes/index'),
    appConfig = require('./config/config');

// Instantiate express
let app = express();

app.use(bodyParser.json());
app.use('/', index);
app.use(express.static("../../public"));
app.use(express.static("../../dist"));

// app server started 
app.listen(appConfig.app.port, () => {
    console.log('Server is up and running on port numner ' + appConfig.app.port);
});

/**
 * Export the Express app so that it can be used by Chai
 */
module.exports = app;