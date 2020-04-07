const request=require('dotenv').config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors=require('cors');
const bodyParser=require('body-parser');
var aylien = require("aylien_textapi");
const app = express()
app.use(cors());
app.use(bodyParser.json()); 
// to use json

// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: false
}));
//to set the website folder for server
app.use(express.static('dist'))



console.log(__dirname)

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

 
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'));
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 8080!');
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// to handle the request from the client

app.post('/article',function(req,res)
{
    textapi.sentiment({
        'url': req.body.url,
      }, function(error, response) {
       
            res.send(response);
       
      });
});

