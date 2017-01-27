var mongoose       = require('mongoose'),
    Schema         = mongoose.Schema,
    categorySchema = new Schema({
                                category: {
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


console.log('we are in category-model');

mongoose.model('Category', categorySchema);
