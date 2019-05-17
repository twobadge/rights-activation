var mongoose = require ("mongoose");

var socialSchema = new mongoose.Schema ({
  priority: Number,
  fbreach: "String"
});

// Create stats model to work with
var Social = mongoose.model('Social', socialSchema);

Social.create ({
  priority: 1000,
  fbreach:"Facebook Stats"
});

module.exports = mongoose.model("Social", socialSchema);

