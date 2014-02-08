var _ = require('underscore');
var redisQ = require('./node_modules/BIGMAMA-AGUN/redis/RedisQ');
var FeedMe = require('feedme');

var redisq = new RedisQ();
var parser = new FeedMe();

redisq.waitPop('rss_xml', function(err, xml) {
    console.log('rss_parser) rss_xml poped');
    parser.on('item', function(item) {
        console.log('rss_parser) article_url pushed');
        redisq.pubPush('article_url', JSON.stringify({
            url: item.link
        }));
    });
    parser.write(xml);
});
