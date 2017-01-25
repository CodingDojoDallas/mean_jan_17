var users = require('../controllers/users.js');

module.exports = function(app){
	app.post('/register', users.register);
	app.post('/login', users.login);
}
