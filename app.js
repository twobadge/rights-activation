var express = require('express'),
    app = express(),
    mongoose = require('mongoose');

app.get('/', function (req, res) {
      res.send('Local app has started')
    })


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var playerSchema = new mongoose.Schema({
  playerName: String,
  playerNumber: Number
});

var Player = mongoose.model('Player', playerSchema);

var hannington = new Player({name: "Hannington"});
console.log("Hannington");

var kittySchema = new mongoose.Schema({
  name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

app.listen(3000)
console.log("app has started");



//mongodb start up mongod --config /usr/local/etc/mongod.conf