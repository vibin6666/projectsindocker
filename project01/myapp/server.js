var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Post = require('./api/models/model'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/piddb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes');
routes(app);

// We'll leave the 404 to be handled by Nginx on the frontend
// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
