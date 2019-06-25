var mongoose  = require ("mongoose");

// Define clients schema
var clientSchema= new mongoose.Schema({
  name: String,
  designation: String,
  url: String,
  value: Number,
  start_date: Date,
  end_date: Date,
  contact: String,
  email: String,
  contact_number: Number,
  objectives: String,
  notes: String,
  rights: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Right"
    }
  ],
  broadcasts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Broadcast"
    }
  ],
  socials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Social"
    }
  ]
});

//Client model
var Client = mongoose.model('Client', clientSchema);



//Export model
module.exports = mongoose.model("Client", clientSchema);



// Create and save client
// Client.create({
//   name:"Even Better Insurance",
//   designation:"Principal Partner",
//   start_date: '2019-08-12'
// }, function(err, client){
//   if(err){
//     console.log("didn't work");
//     console.log(err);
//   } else {
//     console.log("it worked!");
//     console.log(client)
//   }
// });

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

//Find Client and populate all the rights for client. Exec runs the funciton if there is a match. 

// Client.findOne({name:"Thomas"}).populate("rights").exec(function(err, client){
//     if(err){
//       console.log(err);
//     } else {
//       console.log(client);
//     }
// });




