// Require Express to run server and routes
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
// configuring the environment variables
require('dotenv').config();
console.log(process.env);
const API_KEY = process.env.API_KEY;

const port = process.env.PORT || 8081;

const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const isomorphicFetch = require('isomorphic-fetch');
const es6Promise = require('es6-promise');

const app = express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());

app.use(express.static('dist'));
// baseURL and APi key Variables
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
let projectData = [];

console.log(__dirname);

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile('dist/index.html');
});
//get routes
app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});
// post routes
app.post('/api', async (req, res) => {
  projectData = req.body.url;
  try {
    const response = await fetch(
      `${baseURL}${API_KEY}&of=json&txt&model=general&lang=en&url=${projectData}`,
    );

    const result = await response.json();
    console.log(result);
    res.send(result);
    console.log(result);
  } catch (error) {
    console.log('error', error);
  }
});

//designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log(`listening at ${port}`);
});
