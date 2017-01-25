var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// this is the line that tells our server to use the "/static" folder for static content
// console.log(__dirname)
app.use(express.static(__dirname + "/static"));


app.get("/", function (request, response){
    // hard-coded user data

    response.render('index');
})

app.post('/result', function (req, res){
    console.log("POST DATA \n\n", req.body)
    var response = req.body
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.render('result',{response:response})
});


app.listen(8000, function() {
  console.log("listening on port 8000");
})