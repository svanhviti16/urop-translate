//server.js
'use strict'

// Imports the Google Cloud client library
const Translate = require('@google-cloud/translate');

// Instantiates a client
const translate = new Translate({
  keyFilename: "./keyfile.json",
});



// Translates some text 


//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;

//now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MONGODB VIA MONGOOSE
var mongoDB = 'mongodb://localhost:27017/translation_results';
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB);
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var TranslationSchema = new Schema({
    source: String,
    google: String,
    arni: String,
    chosen: String,
    date: Date
});

// Compile model from schema
var TranslationModel = mongoose.model('TranslationModel', TranslationSchema );

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

// GOOGLE TRANSLATE API
router.post('/translate', function(req, res) {
  // The text to translate
  const text = req.body.text;
  console.log(req.body);
  // The target language
  const target = 'is';
  translate
  .translate(text, target)
  .then(results => {
    const translation = results[0];

    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
    res.json({ translation: translation });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
})

router.post('/rate', function(req, res) {
  // Create an instance of model SomeModel
  var newRating = new TranslationModel(req.body);
  // Save the new model instance, passing a callback
  newRating.save(function (err) {
    if (err) return 0;
  });
})




//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});




