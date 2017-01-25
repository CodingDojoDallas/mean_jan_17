

var mongoose       = require('mongoose'),
    Schema         = mongoose.Schema,
    commentSchema = new Schema({
                 _user: {type: Schema.Types.ObjectId, ref: 'User', required:true},
                 _answer: {type: Schema.Types.ObjectId, ref: 'Answer', required:true},
                 comment: { type: String, required:true}
                }, { timestamps: true });

console.log('we are in comment-model');

mongoose.model('Comment', commentSchema);
