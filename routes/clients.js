var express = require ('express');
var router = express.Router();
var Clients = require("../models/clients");

//Index
router.get("/", function(req, res){
  //Get all clients from db
  Client.find({}, function(err, allClients){
    if(err){
      console.log(err);
    } else {
      res.render("clients/dashboard", {clients:allClients});
    }
  });
});

//Create - add new client to the db
router.post("/", function(req, res){
  var name = req.body.name;
  var newClient = {name: name}
  // Create new campground and save to database
Client.create(newClient, function(err, newlyCreated){
      if (err){
          console.log(err);
      } else {
          //redirect to campgrounds page
          console.log(newlyCreated);
          res.redirect("/dashboard");
      }
  });
  //get data from form and add to Campgrounds array
});