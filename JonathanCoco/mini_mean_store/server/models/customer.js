var mongoose       = require('mongoose'),
    Schema         = mongoose.Schema,
    customerSchema = new Schema({
                                name: {
                                  type: String,
                                  required: true,
                                  trim: true,
                                  unique: true
                                }
                                }, {
                                  timestamps: {
                                    createdAt: 'created_at',
                                    updatedAt: 'updated_at'
                                }
                            });


mongoose.model('Customer', customerSchema);
