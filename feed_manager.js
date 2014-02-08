var _ = require('underscore');
var feeds = require('./assets/feeds.json');
var RedisQ = require('RedisQ');

var redisq = new RedisQ();

setInterval(function () {
    _.each(feeds, function(feed) {
        console.log('feed_manager) feed_url pushed: ' + feed.url);
        redisq.pubPush('feed_url', JSON.stringify(feed));
    });
}, 10000);

console.log('feed_manager running');
