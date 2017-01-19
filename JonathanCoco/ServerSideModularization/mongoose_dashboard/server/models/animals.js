
var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
 animal: String,
 herd_Size: Number
})
mongoose.model('Animal', AnimalSchema); // We are setting this Schema in our Models as 'User'
var Animal = mongoose.model('Animal') // We are retrieving this Schema from our Models, named 'User'
