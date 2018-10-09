var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku

var port = process.env.PORT || 4200;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/src'));

// set the home page route
app.get('/', function (req, res) {

  // ejs render automatically looks in the views folder
  res.render('index');
});

app.listen(port, function () {
  console.log('Movie DB is running on port: ' + port);
}, function (err) {
  if (err) throw err
  console.log(`server listening on ${port}`)
});
