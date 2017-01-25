

var mongoose       = require('mongoose'),
    Schema         = mongoose.Schema,
    topicSchema = new Schema({
                 _user: {type: Schema.Types.ObjectId, ref: 'User', required:true},
                 _category: {type: Schema.Types.ObjectId, ref: 'Category', required:true},
                 topic: { type: String, required:true},
                 description:  { type: String, required:true},
                 answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
                }, { timestamps: true });

console.log('we are in topic-model');

mongoose.model('Topic', topicSchema);
