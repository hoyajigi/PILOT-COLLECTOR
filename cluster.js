var _ = require('underscore');
var cluster = require('cluster');
var num_of_instance = process.argv[2] || require('os').cpus().length;

if (cluster.isMaster) {
    for (i = 0; i < num_of_instance; i++) {
        cluster.fork();
    }
    _.each(['exit', 'online', 'listening'], function(event_name) {
        cluster.on(event_name, function(worker, code, signal) {
            console.log('worker ' + worker.id + '.' + event_name + ' ' + 
                        worker.process.pid);
        });
    });
} else {
    require('./feed_manager');
    require('./http_request');
    require('./rss_parser');
    require('./article_parser');
}
