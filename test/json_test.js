/**
*  This code was study code for node json.
*  author agun
*  License MIT
*  see https://github.com/agune/BIGMAMA-AGUN
*  see BIGMAMA PROJECT (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*/


var assert = require('assert');
var _ = require('underscore');


var feedList = require('../assets/feeds.json');

module.exports = {
	'json' :  function(){
		var jsonString = JSON.stringify(feedList);
		var reFeedList = JSON.parse(jsonString);
		console.log(jsonString);
   		_.each(reFeedList, function(feed) {
        	//console.log('each feed :' + feed.url);
    		var feedString = JSON.stringify(feed);
			console.log("====> " + feedString);	
    	});

    	/*_.each(reFeedList, function(key, value) {
    		console.dir(key);
        	console.log('each key value: ' + key  + "," + value);
    	});*/
	}
}
