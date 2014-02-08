var _ = require('underscore');
var feeds = require('./assets/feeds.json');
var redisQ = require('./node_modules/BIGMAMA-AGUN/redis/RedisQ');

var redisq = new RedisQ();

setInterval(function () {
    _.each(feeds, function(feed) {
        console.log('feed_manager) feed_url pushed: ' + feed.url);
        redisq.pubPush('feed_url', JSON.stringify(feed));
    });
}, 1000);
