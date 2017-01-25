var mongoose=require('mongoose');
var Animal = mongoose.model ('Animal')

module.exports={
	index: function(req,res){
		Animal.find({}, function(err, data) {
			console.log('running index function')
  			if (err){
  				console.log('Collection not found')
  			}
  			else{
  				console.log('Animal model found');
  				res.render('index.ejs', {animals:data});
  			}
    
  		})
	},

	show: function(req,res){
  	Animal.find({_id:req.params.id}, function(err,data){
  		console.log('running show function')
    	if (err){console.log('ERRORRRR:' + err)}
    	else{
        	console.log(data);
        	res.render('show.ejs',{animal:data})
      	}
  	})

  },

  	edit: function(req,res){
  		console.log('running edit function')
  		Animal.find({_id:req.params.id}, function(err,data){
    		if (err){console.log(err)}
    		else{
        		console.log(data);
        		res.render('edit.ejs',{animal:data[0]})
      		}	
  		})
  	},

  	create: function (req,res){
  		console.log("POST DATA", req.body);
  		// create a new User with the name and age corresponding to those from req.body
  		var animal = new Animal({name: req.body.name, type: req.body.type ,age: req.body.age});
  		// Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  		animal.save(function(err) {
  			console.log('running create function')
    	// if there is an error console.log that something went wrong!
    		if(err) {
      			console.log('something went wrong');
    		}
    		else {
      			console.log('successfully added an animal!');
      			res.redirect('/');
    		}
  		})
  	},

  	update: function(req,res){
  		  Animal.update({_id:req.params.id}, {name:req.body.name,type:req.body.type,age:req.body.age}, function(err,result){
    		console.log('running update function')
    		if(err){console.log(err)}
    		res.redirect('/')
 			// This code will run when the DB has attempted to update the matching record.
  		})
  	},

  	destroy: function(req,res){
  		Animal.remove({_id:req.params.id}, function(err){
  			console.log('running destroy function')
    		if (err){console.log(err)}
    		res.redirect('/')
  		})
  	}


}