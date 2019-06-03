var mongoose = require ("mongoose");

var rightSchema = new mongoose.Schema({
  campaign: String,
  priority: Number,
  category: String,
  description: String,
  attachments: String,
  opponent: String,
  progress: String,
  fb_reach: Number,
  fb_engagement: Number,
  fb_clicks: Number,
  fb_posts: Number,
  tw_tweets: Number,
  tw_impressions: Number,
  tw_engagement: Number,
  tw_clicks: Number
});

// Create rights model to work with
var Right = mongoose.model('Right', rightSchema);

module.exports = mongoose.model("Right", rightSchema);


// Create and save rights

// Right.create ({
//   priority: 9,
//   category: "Digital",
//   description: "Launch Christmas campaign"
// });


//Pushing rights to clients and saving

// newClient.socials.push({
//   priority: 900,
//   fbreach:"Really important information"
// });

// newClient.save(function(err, client){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(client);
//   }
// });

//Find the client, push rights and save to DB

