var mongoose  = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema ({
  name: String,
  password: String
});

// var User = mongoose.model('User', userSchema);

UserSchema.plugin(passportLocalMongoose);

// Create users model to work with

module.exports = mongoose.model("User", UserSchema);