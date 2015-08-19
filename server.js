var express = require('express');
var mongoose = require('mongoose');
var Note = require('./models/Notes');

mongoose.connect('mongodb://localhost:27017/nodeworkshop');
console.log('Conntected to mongo');
var app = express();

app.get('/', function(req, res){
	res.send('Whadup!');
});

app.get('/update', function(req, res){
	var note = new Note({
		name : 'Bruh',
		note : 'Bruh bruh'
	});

	note.save(function(err, done){
		if(err) throw err;
		console.log(done);
	});
})

app.listen(3000);
console.log('Server Listening on port 3000');