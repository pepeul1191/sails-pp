/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		if(req.session.estado == "activo"){
			return res.view('homepage', {layout: 'layout'});
		}else{
			res.redirect('/login');
		}
	}
};

