var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var sites = require('../database-mongo');
var path = require("path");

var app = express();

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: false }))

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));


app.post('/site', function(req,res){
	console.log(req.body)
	sites.save(req.body.image,req.body.name,req.body.description,req.body.birthday)
	// res.redirect('/site')
})




app.get('/site', function (req, res) {
  sites.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
    	// console.log(data)
       //return array.
      // res.send(data);
    }
  });
    ///not working
  res.sendFile('site.html');
    
});



var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on port 3000!');
});

