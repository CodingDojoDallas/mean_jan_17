var mongoose = require ('mongoose')

var MongooseSchema = new mongoose.Schema({
 name: String,
 type:String,
 age: Number
})
mongoose.model('Animal', MongooseSchema); // We are setting this Schema in our Models as 'User'
var Animal = mongoose.model('Animal')