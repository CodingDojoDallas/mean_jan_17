var mongoose    = require('mongoose');

var DashboardSchema = new mongoose.Schema({
  name:         String,
  description:  String,
  kingdom:      String,
  order:        String,
  clade:        String,
  phylum:       String
}, {timestamps: true});

mongoose.model('Animal', DashboardSchema);

var Animal = mongoose.model('Animal');
