/**
 * AlimentacionController
 *
 * @description :: Server-side logic for managing alimentacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hi: function (req, res) {
		console.log(sails.config.globals.base_url);
    	return res.send('Hi there!');
	},
	bye: function (req, res) {
		return res.redirect('http://www.sayonara.com');
	}
};