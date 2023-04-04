// basic server test

const http = require('http');
const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('Hello World from Test')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})