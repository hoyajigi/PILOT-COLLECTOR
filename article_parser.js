var _ = require('underscore');
var Dadot = require('dadot');
var RedisQ = require('RedisQ');

var redisq = new RedisQ();

redisq.waitPop('article_html', function(err, html) {
    console.log('http_request) ' + 'article_xml' + ' poped: ');
    console.log(Dadot.extract(html));
});

console.log('article_parser running');
