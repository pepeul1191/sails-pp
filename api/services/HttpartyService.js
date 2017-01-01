var HttpartyService = {  
	post: function(url_post, callback) {
		var rest = require('restler');
		rest.post(url_post).on('complete', function(response) {
			callback(response);
		});
	},
	get: function(key) {
		return this[key];
	},
	returnData: function(body){
		this.body = body;
	}
};

module.exports = HttpartyService; 