
/**
*  This code was study code for mongoose module.
*  author agun
*  License MIT
*  use node_redis (https://github.com/mranney/node_redis)
*  see https://github.com/agune/BIGMAMA-AGUN
*  see BIGMAMA PROJECT (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*/


var assert = require('assert');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback(){
	console.log("test open log ");
});

var kittySchema = mongoose.Schema({
    name: String
})

var Kitten = mongoose.model('Kitten', kittySchema);
var silence = new Kitten({ name: 'Silence' })


module.exports = {
	'find test' :  function(){
		Kitten.find(function (err, kittens){
			if(err) return console.error(err);
			console.log(kittens);
			mongoose.disconnect();
			assert.equal(kittens[0].name, "Silence");
		})
	}
}

