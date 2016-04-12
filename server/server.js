var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var indexRouter = require('./routers/indexRouter');
var assignmentRouter = require('./routers/assignmentRouter');

var app = express();

//[[[[[[[[[[[[[[ Global Configuration ]]]]]]]]]]]]]]]]]]]]]]]]]]]]

app.use(express.static('server/public'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

//[[[[[[[[[[[[[[[[[[[[[[[[[[[ Routers ]]]]]]]]]]]]]]]]]]]]]]]]]]]

app.use('/', indexRouter);
app.use('/assignment', assignmentRouter);

//[[[[[[[[[[[[[[[[[[[[[[[[[[[ MONGODB ]]]]]]]]]]]]]]]]]]]]]]]]]]]

//Simple
// mongoose.connect('mongodb://localhost/assignmentsToday');

//Verbose
var mongoURI = 'mongodb://localhost/assignmentsToday';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('MongoDB connection error:', err);
})

MongoDB.once('open', function(){
  console.log('MongDB connection open');
})

//[[[[[[[[[[[[[[[[[[[[[[[[[[[ SERVER ]]]]]]]]]]]]]]]]]]]]]]]]]]]

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port, 'press ctrl-c to exit');
})
