var mongoose       = require('mongoose'),
    Schema         = mongoose.Schema,
    userSchema = new Schema({
                                email: {
                                  type: String,
                                  required: true,
                                  trim: true,
                                  unique: true
                                },

                                first_name: {
                                  type: String,
                                  required: true,
                                  trim: true

                                },

                                last_name: {
                                  type: String,
                                  required: true,
                                  trim: true

                                },

                                phone: {
                                  type: String,
                                  validate: [{
                                              validator: function( number ) {
                                                return /\d{3}-\d{3}-\d{4}/.test( number );
                                              },
                                              message: "Invalid phone number, must be in the following format XXX-XXX-XXXX"
                                            },

                                          ],

                                          required: [true, "Customer phone number required"]
                                },


                                password: {
                                  type: String,
                                  required: true
                                },


                                },
                                  { timestamps: true }
                            );


mongoose.model('User', userSchema);
