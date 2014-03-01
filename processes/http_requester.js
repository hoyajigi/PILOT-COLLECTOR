/**
*  This module was implemented http requester.
*  License MIT
*  see https://github.com/PROJECT-BIGMAMA/PILOT-COLLECTOR
*  see BIGMAMA PROJECT (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*/

require('redismq');
var _ = require('underscore');
var request = require('better_request');
var redisq = new RedisQ();

var constants = require('../constants/constants');
var msgType = require('../assets/msg_type.json');


redisq.waitPop(constants.REQUEST_SEED, function(err, value) {
	
	/**
	* Request Type is
	* url : "request url"
	* key : "store key"
	*/
	var requestInfo = JSON.parse(value);
    console.log("ready request) ==> " + requestInfo.url);
    
    // request and store rss data to redis
    request(requestInfo.url, function(res) {
		console.log('http_request) ' + requestInfo.key + ' store');
		msgType.link = requestInfo.url;
		msgType.msg = res;
		redisq.pubPush(requestInfo.key, JSON.stringify(msgType));    
    });
});

console.log('http_requester running');
