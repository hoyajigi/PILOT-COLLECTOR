var _ = require('underscore');
var request = require('request');
var redisQ = require('./node_modules/BIGMAMA-AGUN/redis/RedisQ');
var redis_state = require('./assets/next_key.json');
var request = require('./http_request_impl');


var registerQueue = function (current_key, next_key) {
    var redisq = new RedisQ();
    redisq.waitPop(current_key, function(err, value) {
        var json_data = JSON.parse(value);
        console.log('http_request) ' + current_key + ' poped: ' + json_data.url);
        request.http_request(json_data.url, function(res) {
            console.log('http_request) ' + next_key + ' pushed');
            redisq.pubPush(next_key, res);
        });
    });
}

_.each(redis_state, function(next_key, current_key) {
    registerQueue(current_key, next_key);
});

console.log('http_request running');
