/**
*  This process was implemented article parser.
*  License MIT
*  see https://github.com/PROJECT-BIGMAMA/PILOT-COLLECTOR
*  see BIGMAMA PROJECT (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*/

require('redismq');
var _ = require('underscore');
var Dadot = require('dadot');
var constants = require('../constants/constants');
var config = require('../conf/config.json');

var MongoClient = require('mongodb').MongoClient

var redisq = new RedisQ();

// mongoDB connect
MongoClient.connect('mongodb://'+config.db_host+':' + config.db_port + '/' + config.db , function(err, db) {
	redisq.waitPop(constants.CONT_TYPE, function(err, data) {
		
		var msgType = JSON.parse(data);
   
		console.log('process dadot !!! ');
		var collection = db.collection('cont_data');
		var cont = Dadot.extract(msgType.msg);
		
		collection.insert({"link" :  msgType.link , "cont" : cont}, function(err, docs) { 
			console.log("saved cont data to mongoDB !!"); 
		});
	});
});
console.log('article_parser running!!!');
