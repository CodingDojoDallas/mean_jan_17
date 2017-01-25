require('./server/config/mongoose.js')


var mongoose = require( 'mongoose' )
var express  = require( 'express' )
var bodyparser = require('body-parser')
var path     = require( 'path' )

var app      = express();

mongoose.Promise = global.Promise;

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


var routes_setter=require('./server/config/routes.js')

routes_setter(app)

app.use( express.static( path.join( __dirname, 'client' )));
app.use( express.static( path.join( __dirname, 'bower_components' )));


app.listen( 8000, function() {
  console.log( `server running on port 8000` );
});





