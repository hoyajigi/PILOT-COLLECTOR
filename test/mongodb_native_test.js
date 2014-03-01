/**
*  This code was study code for mongodb native driver.
*  author agun
*  License MIT
*  see https://github.com/agune/BIGMAMA-AGUN
*  see BIGMAMA PROJECT (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*/


var assert = require('assert');
var MongoClient = require('mongodb').MongoClient

module.exports = {
	'save test' :  function(){
		MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
	    	if(err) throw err;

	    	var collection = db.collection('test_insert');
	    	collection.insert({a:2}, function(err, docs) {

	      	collection.count(function(err, count) {
	      	   console.log("count : " + count);
	      	});
	      	
	      	// Locate all the entries using find
	      	collection.find().toArray(function(err, results) {
	        	console.dir(results);
	        	// Let's close the db
	        	db.close();
	      	});
    	});
  	  })
	}
}

