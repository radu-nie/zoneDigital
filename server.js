var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0", function () {
  console.log("Listening on Port " + port);
}, function (err) {
  if (err) throw err
  console.log(`server listening on ${port}`)
});
