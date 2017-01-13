// require mongoose
var mongoose = require('mongoose');
// create the schema
var NameSchema = new mongoose.Schema({
  name: String
})
// register the schema as a model
var Name = mongoose.model('Name', NameSchema);
