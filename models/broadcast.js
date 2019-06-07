var mongoose = require("mongoose");

var broadcastSchema = new mongoose.Schema ({
  asset_name:String,
  exposures: Number,
  duration: Number,
  me_value: Number,
  qi_value: Number
});

var Broadcast = mongoose.model('Broadcast', broadcastSchema);

// Broadcast.create ({
//   asset_name: "Shirt Chest",
//   exposures: 1111,
//   duration: 2000,
//   me_value: 10000,
//   qi_value: 120000
// });

module.exports = mongoose.model("Broadcast", broadcastSchema);
