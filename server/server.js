const MongoClient = require('mongodb').MongoClient
const express = require('express');
const app = express();

MongoClient.connect('mongodb://admin:taQcyd-jyhnar-xoxpi1@ds159073.mlab.com:59073/pef-tracker', (err, database) => {
  // ... start the server
  console.log(err ? err : database);
  
})

