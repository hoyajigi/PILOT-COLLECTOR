var _ = require('underscore');
var Dadot = require('dadot');
var redisQ = require('./node_modules/BIGMAMA-AGUN/redis/RedisQ');

var redisq = new RedisQ();

redisq.waitPop('article_html', function(err, html) {
    console.log('http_request) ' + 'article_xml' + ' poped: ');
    console.log(Dadot.extract(html));
});
