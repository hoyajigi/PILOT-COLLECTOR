/**
*  This process was implemented rss cluster.
*  License MIT
*  see https://github.com/PROJECT-BIGMAMA/PILOT-COLLECTOR
*  see BIGMAMA PROJECT (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*/

var cluster = require('cluster');
var config = require('../conf/config.json');

if (cluster.isMaster) {
	for (i = 0; i < config.rss_cnt; i++) {
        cluster.fork();
    }
}else{
	require('../processes/rss_parser');
}