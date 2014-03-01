var assert = require('assert');

module.exports = {
	'feed_manager' :  function(){
		require('../processes/feed_manager');

	},
	'http_requester' :  function(){
		require('../processes/http_requester');
	},
	'rss_parser' :  function(){
		require('../processes/rss_parser');
	},
	'article_parser' :  function(){
		require('../processes/article_parser');
	}
}