var mongoose= require('mongoose');

var animals = require ('../controllers/animals')

module.exports=function(app){
	app.get('/', function(req,res){
		animals.index(req,res);
	})

	app.get('/mongooses/new', function(req,res){
		res.render('create.ejs')
	})

	app.get('/mongooses/:id', function(req,res){
		animals.show(req,res)
	})

	app.get('/mongooses/edit/:id', function(req,res){
		animals.edit(req,res)
	})

	app.post('/mongooses', function(req,res){
		animals.create(req,res)
	})

	app.post('/:id', function(req,res){
		animals.update(req,res)
	})

	app.get('/mongooses/destroy/:id', function(req,res){
		animals.destroy(req,res);
	})
}