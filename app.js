var express = require('express'),
    methodOverride = require("method-override"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
    ejs = require('ejs');
    // Client = require("./models/clients"),
    // Right  = require ("./models/rights");

// set the relevant view engine
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//Environment variables
mongoose.connect('mongodb://localhost:27017/rights_activation', {useNewUrlParser: true});

//Rights Schema
var rightSchema= new mongoose.Schema({
  priority: Number,
  category: String,
  description: String
});

//Rights model
var Right = mongoose.model('Right', rightSchema);

//Create and save rights
Right.create ({
  priority: 9,
  category: "Digital",
  description: "Launch Christmas campaign"
});

//Client schema
var clientSchema= new mongoose.Schema({
  name: String,
  designation: String,
  value: Number,
  start_date: Date,
  end_date: Date,
  contact: String,
  email: String,
  contact_number: Number,
  notes: String,
  rights: [rightSchema]
});

//Client model
var Client = mongoose.model('Client', clientSchema);


//Find the client
Client.findOne({name:"Jack"}, function(err, client){
  if(err){
  console.log(err);
  } else {
    client.rights.push({
      priority: 1000,
      description: "more important than before"
    });
    client.save(function(err, client){
      if(err){
        console.log(err);
      } else {
        console.log(client);
      }
    })
  }
});

// var newClient = new Client({
//   name: "Jack",
//   designation: "Captain"
// });

// newClient.rights.push({
//   priority: 900,
//   description:"Really important information"
// });

// newClient.save(function(err, client){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(client);
//   }
// });

//Routes

app.get("/", function(req, res){
  res.redirect("/clients");
})

//Index
app.get("/clients", function(req, res){
  Client.find({}, function(err, clients){
    if(err){
      console.log("Error");
    } else {
      res.render("clients", {clients:clients});
    }
  });
});

//New route
app.get('/clients/new', function (req, res){
  res.render("./clients/new")
})

// Create route
app.post("/clients", function(req, res){
  //create client
  Client.create(req.body.client, function(err, newClient){
    if(err){
      res.render("/clients/new");
    } else {
      res.redirect("/clients");
    }
    });
  });

 //Show route
 app.get("/clients/:id", function(req, res){
   Client.findById(req.params.id, function(err, foundClient){
     if(err){
       res.redirect("/clients");
     } else {
      res.render("./clients/show", {client:foundClient});
     }
   });
  });

  //Edit route
  app.get("/clients/:id/edit", function(req, res){
    Client.findById(req.params.id, function(err, foundClient){
      if(err){
        res.redirect("/clients");
      } else {
        res.render("./clients/edit", {client: foundClient});
      }
    });
  })

  //update route
  app.put("/clients/:id", function(req, res){
    Client.findByIdAndUpdate(req.params.id, req.body.client, function(err, updatedClient){
      if(err){
        console.log("Could not update client");
        res.redirect("/clients");
      } else {
        res.redirect("/clients/" + req.params.id);
      }
    });
  });

//Delete route
app.delete("/clients/:id", function(req, res){
  Client.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect("/clients");
    } else {
      res.redirect("/clients")
    }
  })
});


app.listen(3000)
console.log("app has started");