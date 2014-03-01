/**
*  This process was implemented feed url manager.
*  License MIT
*  see https://github.com/PROJECT-BIGMAMA/PILOT-COLLECTOR
*  see BIGMAMA PROJECT (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*/

require('redismq');

var _ = require('underscore');
var constants = require('../constants/constants');

var requestType = require('../assets/request_types.json');

var config = require('../conf/config.json');


var redisq = new RedisQ();

var interval  = config.interval;

if(interval < 1800000)
	interval  = 1800000;


var sendOperation = function (keys){
	keys.forEach(function (key, i) {
		console.log("operation request : " + key);
			
		requestType.url = key;
		requestType.key = constants.RSS_TYPE;
		redisq.pubPush(constants.REQUEST_SEED, JSON.stringify(requestType));    
	});
};

/**
* seed info   url(key) => json format (value) 
* get seed url list
*
*/
redisq.hkeys(constants.SEED_INFO, function (err, keys) {
	console.log(" get seed url total : " + keys.length);          
	sendOperation(keys);
	setInterval(sendOperation, interval, keys);
});

console.log('feed_manager running');
