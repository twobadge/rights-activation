var express = require('express'),
  methodOverride = require("method-override"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require('mongoose'),
  ejs = require('ejs');
  Client = require("./models/clients"),
  Right = require("./models/rights"),
  Broadcast = require("./models/broadcast"),
  Social = require("./models/social") 

// set the relevant view engine
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride("_method"));

//Environment variables
mongoose.connect('mongodb://localhost:27017/rights_activation', {
  useNewUrlParser: true
});

//Routes
app.get("/", function (req, res) {
  res.redirect("/clients");
})

// =================================
// Client routes
// =================================s

//Index
app.get("/clients", function (req, res) {
  Client.find({}, function (err, clients) {
    if (err) {
      console.log("Error");
    } else {
      res.render("clients", {
        clients: clients
      });
    }
  });
});

//New route
app.get('/clients/new', function (req, res) {
  res.render("./clients/new")
})

// Create route
app.post("/clients", function (req, res) {
  //create client
  Client.create(req.body.client, function (err, newClient) {
    if (err) {
      res.render("./clients/new");
    } else {
      res.redirect("./clients");
    }
  });
});

//Show route
app.get("/clients/:id", function (req, res) {
  Client.findById(req.params.id).populate("rights").populate("broadcasts").populate("socials").exec(function (err, foundClient){
    if (err) {
      console.log(err);
      res.redirect("/clients");
    } else {
      // console.log(foundClient);
      res.render("./clients/show", {
        client: foundClient
      });
    }
  });
});

//Edit route
app.get("/clients/:id/edit", function (req, res) {
  Client.findById(req.params.id, function (err, foundClient) {
    if (err) {
      res.redirect("/clients");
    } else {
      res.render("./clients/edit", {
        client: foundClient
      });
    }
  });
})

//update route
app.put("/clients/:id", function (req, res) {
  Client.findByIdAndUpdate(req.params.id, req.body.client, function (err, updatedClient) {
    if (err) {
      console.log("Could not update client");
      res.redirect("/clients");
    } else {
      res.redirect("/clients/" + req.params.id);
    }
  });
});

//Delete route
app.delete("/clients/:id", function (req, res) {
  Client.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.redirect("/clients");
    } else {
      res.redirect("/clients")
    }
  })
});

// =================================
// Rights routes
// =================================

//rights index

app.get("/rights", function (req, res) {
  Right.find({}, function (err, rights) {
    if (err) {
      console.log("Error");
    } else {
      res.render("rights/rights", {
        rights: rights
      });
    }
  });
});


// new rights
app.get("/clients/:id/rights/new", function (req, res) {
  //find client by id 
  Client.findById(req.params.id, function (err, client) {
    if (err) {
      console.log(err);
    } else {
      res.render("rights/new", {
        client: client
      });
    }
  });
});

// post rights
app.post("/clients/:id/rights", function (req, res) {
  Client.findById(req.params.id, function (err, client) {
    if (err) {
      console.log(err);
      res.redirect("/clients");
    } else {
      Right.create(req.body.right, function (err, right) {
        if (err) {
          console.log(err);
        } else {
          client.rights.push(right);
          client.save();
          res.redirect("/clients/" + client._id);
        }
      });
    }
  });
});

//Edit rights



// =================================
// Broadcast routes
// =================================

//Broadcast index
app.get("/broadcasts", function (req, res) {
  Broadcast.find({}, function (err, broadcasts) {
    if (err) {
      console.log("Error");
    } else {
      res.render("broadcasts/broadcasts", {
        broadcast: broadcasts
      });
    }
  });
});

//new broadcast route
app.get("/clients/:id/broadcasts/new", function (req, res) {
  //find client by id 
  Client.findById(req.params.id, function (err, client) {
    if (err) {
      console.log(err);
    } else {
      res.render("broadcasts/new", {
        client: client
      });
    }
  });
});

// post broadcasts
app.post("/clients/:id/broadcasts", function (req, res) {
  Client.findById(req.params.id, function (err, client) {
    if (err) {
      console.log(err);
      res.redirect("/clients");
    } else {
      Broadcast.create(req.body.broadcast, function (err, broadcast) {
        if (err) {
          console.log(err);
        } else {
          client.broadcasts.push(broadcast);
          client.save();
          res.redirect("/clients/" + client._id);
        }
      });
    }
  });
});


// =================================
// Socials routes
// =================================

//Broadcast index
app.get("/socials", function (req, res) {
  Social.find({}, function (err, socials) {
    if (err) {
      console.log("Error");
    } else {
      res.render("socials/socials", {
        social: social
      });
    }
  });
});

//new social data
app.get("/clients/:id/socials/new", function (req, res) {
  //find client by id 
  Client.findById(req.params.id, function (err, client) {
    if (err) {
      console.log(err);
    } else {
      res.render("socials/new", {
        client: client
      });
    }
  });
});

// post social data
app.post("/clients/:id/socials", function (req, res) {
  Client.findById(req.params.id, function (err, client) {
    if (err) {
      console.log(err);
      res.redirect("/clients");
    } else {
      Social.create(req.body.social, function (err, social) {
        if (err) {
          console.log(err);
        } else {
          client.socials.push(social);
          client.save();
          res.redirect("/clients/" + client._id);
        }
      });
    }
  });
});


app.listen(3000)
console.log("app has started");