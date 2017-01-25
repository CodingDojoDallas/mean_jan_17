

var mongoose       = require('mongoose'),
    Schema         = mongoose.Schema,
    answerSchema = new Schema({
                 _user: {type: Schema.Types.ObjectId, ref: 'User', required:true},
                 _topic: {type: Schema.Types.ObjectId, ref: 'Topic', required:true},
                 answer: { type: String, required:true},
                 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
                 likes: { type: Number, default:  0},
                 dislikes: { type: Number, default: 0}
                }, { timestamps: true });

console.log('we are in answer-model');

mongoose.model('Answer', answerSchema);
