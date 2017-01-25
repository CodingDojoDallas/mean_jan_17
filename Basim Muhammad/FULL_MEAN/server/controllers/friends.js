var mongoose=require('mongoose');
var Friend = mongoose.model('Friend')

module.exports= {
	index:function(req,res){
		Friend.find({},function(err,data){
			if(err){
				console.log(err + ' when running index controller function')
			}

			else{
				console.log('index function ran')
				console.log(data)
				res.json(data)
			}
		})
	},



	create:function(req, res){
		
		var friend = new Friend({name:req.body.name})
		friend.save(function(err){
			if (err){
				console.log('Error in create function ' + err)
			}

			else{
				console.log('successfully saved to db')
			}
		})
	},

	update:function(req,res){
		console.log('Req params',req.params)
		console.log('Req body',req.body)
		console.log('Req params name',req.params.name)
		Friend.update({_id:req.params.id}, {name:req.body.name}, function(err,data){
			if (err){
				console.log('error in update method ' + err )
			}
			else{
				console.log('Friend successfully updated',data)
			}
		})
	},

	destroy:function(req,res){
		Friend.remove({_id:req.params.id}, function(err){
			if (err){
				console.log('error in destroy friend method ' + err)
			}
			else{
				console.log('Friend removed. he gone!')
			}
		})
	},

	show:function(req,res){
		Friend.findOne({_id:req.params.id},function(err,data){
			if (err){
				console.log('Error in show method server-side')
			}
			else{
				res.json(data)
			}
		})
	},
}