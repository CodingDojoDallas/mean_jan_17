var mongoose = require('mongoose')
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, 'client')))
app.use(bodyParser.json())


app.listen(5000, function(){
  console.log('Server is running on port 5000')
})