
require('redismq');
var _ = require('underscore');

var feedList = require('./assets/feeds.json');
var constants = require('./constants/constants');

var redisq = new RedisQ();


console.log("=======> start seed init !!! ");

_.each(feedList, function(feed) {
 	var feedString = JSON.stringify(feed);
	redisq.hset(constants.SEED_INFO, feed.url, feedString);	
});
redisq.quit();
console.log("=======>  seed init complete !!! ");
