var mongoose       = require('mongoose'),
    Schema         = mongoose.Schema,
    productSchema = new Schema({
                                name: {
                                  type: String,
                                  required: true,
                                  trim: true,
                                  unique: true
                                },

                                image: {
                                  type: String,
                                  required: true,
                                  trim: true

                                },

                                description: {
                                  type: String,
                                  required: true,
                                  trim: true

                                },

                                quantity: {
                                  type: Number
                                }


                                }, {
                                  timestamps: {
                                    createdAt: 'created_at',
                                    updatedAt: 'updated_at'
                                }
                            });


mongoose.model('Product', productSchema);
