#!/usr/bin/env node
// app.js

var winston = require('winston');
var fs    = require('fs');
var nconf = require('nconf');
var rest = require('rest');
var mime = require('rest/interceptor/mime');
var moment = require('moment');

//
// Configure CLI output on the default logger
//
winston.cli();
//
// Configure CLI on an instance of winston.Logger
//
var logger = new winston.Logger({
transports: [
    new (winston.transports.Console)()
]
});

logger.cli();

nconf.argv()
   .env()
   .file({ file: 'config.json' });


logger.info("API_URL:" + nconf.get('API_URL') )
