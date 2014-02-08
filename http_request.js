var _ = require('underscore');
var request = require('request');
var RedisQ = require('RedisQ');
var redis_state = require('./assets/next_key.json');
var request = require('better_request');


var registerQueue = function (current_key, next_key) {
    var redisq = new RedisQ();
    redisq.waitPop(current_key, function(err, value) {
        var json_data = JSON.parse(value);
        console.log('http_request) ' + current_key + ' poped: ' + json_data.url);
        request(json_data.url, function(res) {
            console.log('http_request) ' + next_key + ' pushed');
            redisq.pubPush(next_key, res);
        });
    });
}

_.each(redis_state, function(next_key, current_key) {
    registerQueue(current_key, next_key);
});

console.log('http_request running');
