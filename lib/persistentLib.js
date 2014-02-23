/**
*  This module was implemented mongoDB persistent.
*  author agun
*  License MIT
*  see https://github.com/PROJECT-BIGMAMA/PILOT-COLLECTOR
*  see BIGMAMA PROJECT (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*/

var mongoose = require('mongoose');
var RssData = require('../model/RssData');

var RssModel = mongoose.model('RssData', mongoose.Schema(RssData.RssSchema));
var defaultHost = "localhost";


// made  PersistentLib function
PersistentLib = function PersistentLib (db, arg_host){
	if(!db){
		console.error("error db name : ");
		return;
	}

	var host  = arg_host ||  defaultHost;

	mongoose.connect('mongodb://'+ host +'/' + db);
	this.db = mongoose.connection;
	this.db.on('error', console.error.bind(console, 'connection error:'));
	this.db.once('open', function callback(){});
};

// database disconnect
PersistentLib.prototype.disconnect = function (){
	mongoose.disconnect();
};

// save function
PersistentLib.prototype.save = function (value, isDisconnect){
	var rssModel = new RssModel(value);
	rssModel.save(function(err, rssModel){
		if(err) return console.error(err);
		if(isDisconnect)
			mongoose.disconnect();
	});
};

// find function 
PersistentLib.prototype.find = function (callback){
	RssModel.find(function (err, values){
			if(err) return console.error(err);
			callback(values);
	});	
}

exports = PersistentLib;


