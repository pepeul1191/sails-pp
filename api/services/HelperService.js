var HelperService = {  
	loadCss: function() {
	    var rpta = "";
	    var csss = this.csss;
	    if (typeof csss != 'undefined'){
		    for(var i = 0; i < csss.length; i++){
		    	rpta = rpta + '<link rel="stylesheet" type="text/css" href="'+ sails.config.globals.statics_url + csss[i] + '.css" />'
		    }
		}
	    return rpta;
	},
	loadJs: function() {
	    var rpta = "";
	    var jss = this.jss;
	    if (typeof jss != 'undefined'){
		    for(var i = 0; i < jss.length; i++){
		    	rpta = rpta + '<script src="' + sails.config.globals.statics_url + jss[i] + '.js"></script>'
		    }
		}
	    return rpta;
	},
	set: function(key, value) {
		this[key] = value;
	},
	get: function(key) {
		return this[key];
	},
};

module.exports = HelperService; 