
var mongoose       = require('mongoose'),
    Schema         = mongoose.Schema,
    messageSchema = new Schema({
                 message: { type: String, required: true },
                 name: { type: String, required: true, minlength: 4 },
                 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
                }, { timestamps: true });

mongoose.model('Message', messageSchema);
