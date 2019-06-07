var mongoose = require("mongoose");

var socialSchema = new mongoose.Schema ({
  campaign: String,
  fb_reach: Number,
  fb_engagement: Number,
  fb_clicks: Number,
  fb_posts: Number,
  tw_tweets: Number,
  tw_impressions: Number,
  tw_engagement: Number,
  tw_clicks: Number,
  in_posts: Number,
  in_impressions: Number,
  in_engagement: Number,
  in_clicks: Number
});

var Social = mongoose.model('Social', socialSchema);

// Social.create ({
//   asset_name: "Shirt Chest",
//   exposures: 1111,
//   duration: 2000,
//   me_value: 10000,
//   qi_value: 120000
// });

module.exports = mongoose.model("Social", socialSchema);
