var express = require('express'),
  methodOverride = require("method-override"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require('mongoose'),
  ejs = require('ejs');
  Client = require("./models/clients"),
  Right = require("./models/rights");
  Performance = require("./models/performance") 

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
  Client.findById(req.params.id).populate("rights").exec(function (err, foundClient) {
    if (err) {
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
// Performance routes
// =================================

//performance index
app.get("/performance", function (req, res) {
  Performance.find({}, function (err, performances) {
    if (err) {
      console.log("Error");
    } else {
      res.render("performance/performance", {
        performances: performances
      });
    }
  });
});

//new
app.get("/clients/:id/performance/new", function (req, res) {
  //find client by id 
  Client.findById(req.params.id, function (err, client) {
    if (err) {
      console.log(err);
    } else {
      res.render("performance/new", {
        client: client
      });
    }
  });
});

// post performance
app.post("/clients/:id/performance", function (req, res) {
  Client.findById(req.params.id, function (err, client) {
    if (err) {
      console.log(err);
      res.redirect("/clients");
    } else {
      Performance.create(req.body.performance, function (err, performance) {
        if (err) {
          console.log(err);
        } else {
          client.performances.push(performance);
          client.save();
          res.redirect("/clients/" + client._id);
        }
      });
    }
  });
});






app.listen(3000)
console.log("app has started");