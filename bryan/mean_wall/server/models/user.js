var mongoose 	 = require('mongoose');

var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
		passRegex  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!\s){8,32}/;

var bcrypt 		 = require('bcryptjs'),
		saltRounds = 10;

var UserSchema = new mongoose.Schema({
	email: {
		type:	String,
		lowercase: true,
		required: [true, 'Email is required for registration!'],
		unique: 	true,
		trim: 		true,
		validate: {
			validator: function(emailStr){
				return emailRegex.test(emailStr);
			},
			message: 'Please enter a valid email address'
		}
	},
	first_name: {
		type: 		String,
		required: [true, 'First name is required'],
		trim: 		true,
	},
	last_name: {
		type: 		String,
		required: [true, 'Last name is required'],
		trim: 		true
	},
	password: {
		type: 		String,
		required: [true, 'Password is required!'],
		validate: {
			validator: function(pass){
				return passRegex.test(pass);
			},
			message: 'Passwords must be between 8 and 32 characters, contain 1 uppercase, 1 lower case and 1 number.  Spaces are not allowed.'
		}
	},
	birthday: {
		type: 		Date,
		required: [true, 'Your Birthday is required for registration']
	},
}, {timestamps: true});


UserSchema.pre('save', function(callback){
	var user = this;
	bcrypt.hash(this.password, saltRounds, function(err, hash){
		if (err) {
			return next(err);
		}
		user.password = hash;
		callback();
	});
});

UserSchema.methods.comparePassword = function(attempt, hash, callback){
	bcrypt.compare(attempt, hash, function(err, res){
		if (err) {
			return callback(err);
		}
		return callback(res);
	})
}

mongoose.model('User', UserSchema);
