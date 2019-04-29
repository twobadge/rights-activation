var express = require('express'),
    app = express(),
    mongoose = require('mongoose');

    app.set("view engine", "ejs");

app.get('/', function (req, res) {
      res.render('rights-page')
    })


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.listen(3000)
console.log("app has started");



//mongodb start up mongod --config /usr/local/etc/mongod.conf