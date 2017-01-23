var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: [true, "Yo dum dum, need yo name"]
	},
	username: {
		type: String,
		required: true,
		unique: true,
		minlength: [2, "User name must be 2 characters"]
	},
	password: {
		type: String,
		required: true,
		minlength: 4
		// validate: {
		// 	validator: function(value){
		// 		return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{4}/.test(value);
		// 	},
		// 	message: "Password must have at least 1 number, uppercase and a special character"
		// }
	}
});
UserSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}
UserSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
}
UserSchema.pre('save', function(done){
	this.password = this.generateHash(this.password);
	done();
})

mongoose.model('User', UserSchema);