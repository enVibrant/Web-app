const express = require('express');
const app = express();
//const MongoClient = require('mongodb').MongoClient;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

app.listen(3000, function() {
	console.log('listening on 3000')
});

app.use(express.static('public'));