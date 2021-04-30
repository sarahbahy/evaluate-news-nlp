const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')

const app = express()

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

const application_key= process.env.API_KEY
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
console.log(`Your API key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/api', async function(req, res) {
    console.log('request body:', req.body);
    console.log('request body txt:', req.body.txt);
    // let userInput = 'Main dishes were quite good, but desserts were too sweet for me.'
    const apiURL = `${baseURL}key=${application_key}&txt=${req.body.txt}&lang=en`
    const response = await fetch(apiURL)
    const newData = await response.json()
    // console.log(newData)
    res.send(newData)
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})