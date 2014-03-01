/**
*  This module was implemented rss parser.
*  License MIT
*  see https://github.com/PROJECT-BIGMAMA/PILOT-COLLECTOR
*  see BIGMAMA PROJECT (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*/

require('redismq');
var _ = require('underscore');
var FeedMe = require('feedme');
var constants = require('../constants/constants');
var config = require('../conf/config.json');
var requestType = require('../assets/request_types.json');

var MongoClient = require('mongodb').MongoClient

var redisq = new RedisQ();
var parser = new FeedMe(true);

// mongoDB connect
MongoClient.connect('mongodb://'+config.db_host+':' + config.db_port + '/' + config.db , function(err, db) {
	
	if(err) throw err;
	
	var collection = db.collection('rss_data');
	
	// wait RSS data from redis
	redisq.waitPop(constants.RSS_TYPE, function(err, data) {
		var msgType = JSON.parse(data);
   
		parser.write(msgType.msg);
		
		var json_data = parser.done();
		_.each(json_data.items, function(item) {
    
			console.log('rss_parser) article_url pushed : ' + item.link);  
        	requestType.url = item.link;
			requestType.key = constants.CONT_TYPE;
			redisq.pubPush(constants.REQUEST_SEED, JSON.stringify(requestType));
		});

	
		collection.insert(json_data, function(err, docs) { 
			console.log("saved rss data to mongoDB !!"); 
		});
	});	
});

console.log("running rss parser !!");