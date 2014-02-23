
/**
*  This code is PersistentLib test code.
*  author agun
*  License MIT
*  see https://github.com/PROJECT-BIGMAMA/PILOT-COLLECTOR
*  see BIGMAMA PROJECT (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*/

var assert = require('assert');
var persistentLib = require('../lib/persistentLib');

module.exports = {
	'save test' :  function(){
		var persistentLib = new PersistentLib("auto_test");

		persistentLib.save(
			{  
				channel: {
					title: "MBC뉴스 :: 뉴스(문화/연예)", 
					link: "http://imnews.imbc.com", 
					description: "MBC뉴스 IMNEWS ▒▒ 뉴스 문화/연예 RSS서비스", 
					copyright: "Copyright(c) Since 1996, MBC & iMBC All Rights Reserved.", 
					lastBuildDate: "2013.12.24 16:30:06"
			   },
			   title: 'MBC \'무한도전\' 화보집·영상만화 출간', 
			   link: 'http://imnews.imbc.com/news/2013/culture/article/3389405_12406.html',
			   description: 'MBC뉴스 IMNEWS ▒▒ 뉴스 문화/연예 RSS서비스',
			   copyright: 'Copyright(c) Since 1996, MBC & iMBC All Rights Reserved.',
			   updateDate: '2014.02.23 10:10:10',
			   author: '서울=연합뉴스',
			   category: '문화연예',
			   pubDate: '2013.12.24 13:59:24',
	           etc: ''
	       }
	       , true
	    );
	},

	'find test' :  function(){
		var persistentLib = new PersistentLib("auto_test");
		persistentLib.find(function(values){console.log(values); persistentLib.disconnect(); });
	}
}


