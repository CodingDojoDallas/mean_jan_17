var users    = require('../controllers/users.js'),
		messages = require('../controllers/messages.js');

module.exports = function(app){
	app.post('/register', users.register);
	app.post('/login',    users.login);
	app.post('/message',  messages.create);
	app.get('/message',   messages.index);
	app.post('/comment',   messages.createComment);
}
