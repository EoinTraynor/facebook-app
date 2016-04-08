var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define schema for db user model
var userSchema = mongoose.Schema({
	facebook: {
		id: String,
		token: String,
		email: String,
		name: String
	}
	// local: {
	// 	email:String,
	// 	password: String
	// }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

// expose model to the app
module.exports = mongoose.model('Authentication', userSchema);
