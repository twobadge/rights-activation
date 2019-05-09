var mongoose  = require ("mongoose");
// mongoose.connect('mongodb://localhost:27017/rights_activation', {useNewUrlParser: true});


// Define clients schema
var clientSchema= new mongoose.Schema({
  name: String,
  designation: String,
  value: Number
});

// Create clients model to work with
var Client = mongoose.model('Client', clientSchema);

// // Create new client
// var capital_insurance = new Client ({ 
//   name: 'raiders_sportswear', 
//   designation: 'secondary sponsor',
//   value: 888888
// });
// console.log(capital_insurance.name); // 'Silence'


// // Save client to the database
// capital_insurance.save(function(err, client){
//   if (err){
//     console.log("Something went wrong")
//   } else {
//     console.log("client saved to db")
//     console.log(client);
//   }}
// );

// Create and save client
Client.create({
  name:"Capital Insurance",
  designation:"Principal Partner",
  value: 999999
}, function(err, client){
  if(err){
    console.log("didn't work");
    console.log(err);
  } else {
    console.log("it worked!");
    console.log(client)
  }
});

// Rights Schema
var rightSchema= new mongoose.Schema({
  priority: Number,
  category: String,
  description: String
});

// Create rights model to work with
var Right = mongoose.model('Right', rightSchema);

// Create and save rights

Right.create ({
  priority: 10,
  category: "Digital",
  description: "Launch Christmas campaign"
});

// Find a client 
// Client.find({}, function(err, clients){
//   if(err){
//     console.log("Error");
//     console.log(err);
//   } else {
//     console.log(clients);
//     console.log("all the clients");
//   }
// });


// Check connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


