var express = require('express'),
    app = express(),
    mongoose = require('mongoose');

app.get('/', function (req, res) {
      res.send('Local app has started')
    })

    app.listen(3000)

    console.log("app has started");