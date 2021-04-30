var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');
// Cors for cross origin allowance
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json()) // to use json
// to use url encoded values
app.use(bodyParser.urlencoded({
extended: true
}))
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(express.json());

app.use(cors());
app.use(express.static('dist'))
console.log(__dirname)

const application_key= process.env.API_KEY
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
console.log(`Your API key is ${process.env.API_KEY}`);
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })
app.post('/api', async function(req, res) {
    console.log('request body:', req.body);
    // console.log('request body:', req.body.txt);
    let userInput = 'Main dishes were quite good, but desserts were too sweet for me.'
    const apiURL = `${baseURL}key=${application_key}&txt=${userInput}&lang=en`
    const response = await fetch(apiURL)
    const newData = await response.json()
    // console.log(newData)
    res.send(newData)
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})