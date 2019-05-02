var mongoose  = require ("mongoose");

// Define clients schema
var clientSchema= new mongoose.Schema({
  name: String,
  designation: String,
  value: Number
});

//Client model
var Client = mongoose.model('Client', clientSchema);

//Create and save client
Client.create({
  name:"Better Insurance",
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

//Export model
module.exports = mongoose.model("Client", clientSchema);



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