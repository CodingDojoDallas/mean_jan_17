

var mongoose       = require('mongoose'),
    Schema         = mongoose.Schema,
    orderSchema = new Schema({
                 _customer: {type: Schema.Types.ObjectId, ref: 'Customer', required:true},
                 _product: {type: Schema.Types.ObjectId, ref: 'Product', required:true},
                 quantity: { type: Number, required:true}
                }, { timestamps: true });


mongoose.model('Order', orderSchema);
