/**
*  This code is persistent model.
*  author agun
*  License MIT
*  see https://github.com/PROJECT-BIGMAMA/PILOT-COLLECTOR
*  see BIGMAMA PROJECT (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*/


var RssData = {
	channel: {title: '', link: '', description: '', copyright: '', lastBuildDate: ''},
	title: '',
	link: '',
	description: '',
	updateDate: '',
	author: '',
	category: '',
	pubDate: '',
	etc: ''
};


var RssSchema = {
	channel: {
		title: String, 
		link: String, 
		description: String, 
		copyright: String, 
		lastBuildDate: String
	},
	title: String,
	link: String,
	description: String,
	updateDate: String,
	author: String,
	category: String,
	pubDate: String,
	etc: String
};


// exposure
exports.RssData = RssData;
exports.RssSchema = RssSchema;
