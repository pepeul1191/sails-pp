/**
 * LoginController
 *
 * @description :: Server-side logic for managing Logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		if(req.session.estado == "activo"){
			res.redirect('/');
		}else{
			HelperService.set("csss", ["assets/login/css/index"]);
			//HelperService.set("jss", ["assets/login/js/index"]);
			HelperService.set("mensaje", false);
	    	return res.view('login/index', {layout: 'layouts/blank', helper: HelperService});
		}
	},
	acceder: function (req, res) {
		var usuario = req.param('usuario');
		var contrasenia = req.param('contrasenia');
		HttpartyService.post(sails.config.globals.cipher + "encode?key=" + sails.config.globals.key + "&texto=" + contrasenia, function(contrasenia_hash){
			HttpartyService.post(sails.config.globals.accesos + "usuario/validar?usuario=" + usuario + "&contrasenia=" + contrasenia_hash, function(rpta){
				if (parseInt(rpta) == 1){
					req.session.estado = "activo";
					res.redirect('/');
				}else{
					HelperService.set("csss", ["assets/login/css/index"]);
					//HelperService.set("jss", ["assets/login/js/index"]);
					HelperService.set("mensaje", true);
			    	return res.view('login/index', {layout: 'layouts/blank', helper: HelperService});
				}
			});
		});
    	
	},
};

