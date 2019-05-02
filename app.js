var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    ejs = require('ejs'),
    Client = require("./models/clients"),
    Right  = require ("./models/rights");

// set the relevant view engine
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Environment variables
mongoose.connect('mongodb://localhost:27017/rights_activation', {useNewUrlParser: true});



//Requiring routes



//Routes
app.get('/', function (req, res) {
      res.render('index')
    })

app.get('/dashboard', function (req, res){
  res.render('dashboard')
})


// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

app.listen(3000)
console.log("app has started");



//mongodb start up mongod --config /usr/local/etc/mongod.conf