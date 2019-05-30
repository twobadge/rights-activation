// var mongoose = require ("mongoose");

// var socialSchema = new mongoose.Schema ({
//   priority: Number,
//   fbreach: "String"
// });

// // Create stats model to work with
// var Social = mongoose.model('Social', socialSchema);

// Social.create ({
//   priority: 1000,
//   fbreach:"Facebook Stats"
// });

// module.exports = mongoose.model("Social", socialSchema);


var mongoose = require("mongoose");

var performanceSchema = new mongoose.Schema ({
  campaign: String,
  fb_reach: Number,
  fb_engagement: Number,
  fb_clicks: Number,
  fb_posts: Number,
  tw_tweets: Number,
  tw_impressions: Number,
  tw_engagement: Number,
  tw_clicks: Number
});

var Performance = mongoose.model('Performance', performanceSchema);

// Performance.create ({
//   campaign: "Christmas Campaign 2020",
//   fb_reach: 1111,
//   fb_engagement: 1111,
//   fb_clicks: 111
// });

module.exports = mongoose.model("Performance", performanceSchema);
