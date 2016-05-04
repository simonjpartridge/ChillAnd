var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/api');

var app = express();

// view engine setup
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

var Event = require('./models/Event.js');
Event.find(function (err, events) {
      if (!events.length){
        var array = [{"nsfw": true, "tags": ["code"], "location": "SimpleWeb", "attendees": ["Ben"], "user": "Ben"}, {"nsfw": false, "tags": ["eat"], "location": "SimpleWeb", "attendees": ["Simon"], "user": "Simon"}];
        Event.create(array, function (err) {
          if (err) {

          }
        });
      }
  });


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chilland', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

module.exports = app;
