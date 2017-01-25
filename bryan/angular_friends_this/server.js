var express    = require('express'),
    port       = 8000,
    app        = express(),
    path       = require('path'),
    appRoot    = require('app-root-path'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require(`${appRoot}/server/config/mongoose.js`);
require(`${appRoot}/server/config/routes.js`)(app);

app.use(express.static(`${appRoot}/client`));
app.use(express.static(`${appRoot}/bower_components`));

app.listen(port, function(){
    console.log('server running on port:', port);
})
