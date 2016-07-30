#! /usr/local/bin/node
var quote = require('./j-quote')
var transformer = require('console-in-transformer')

transformer(quote, '\n')