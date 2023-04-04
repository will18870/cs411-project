// basic server test

const http = require('http');
const express = require('express')
const app = express()
const request = require('request')

const hostname = '127.0.0.1';
const port = 3000;
const tmKey = '0txRTCElnYysjp6wGw85pTQwcXUPIXfv';

app.get('/', (req, res) => {
    request('https://app.ticketmaster.com/discovery/v2/events.json?postalCode=02215&apikey=0txRTCElnYysjp6wGw85pTQwcXUPIXfv', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            info = JSON.parse(body)
            console.log(info)
            res.send(info._embedded.events)
        }
        else {
            res.send('Hello World - google not work :(')
        }
    })
})

app.get('/test', (req, res) => {
    res.send('Hello World from Test')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})