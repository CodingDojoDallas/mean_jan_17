
var mongoose       = require('mongoose'),
    Schema         = mongoose.Schema,
    commentSchema = new Schema({
                   // since this is a reference to a different document, the _ is the naming convention!
                   _post: {type: Schema.Types.ObjectId, ref: 'Message'},
                   comment: { type: String, required: true },
                   name: { type: String, required: true, minlength: 4 }
                  }, {timestamps: true });

mongoose.model('Comment', commentSchema);
