import express from "express";
import path from "path";
import fs from "fs";
import request from "request";
import bodyParser from "body-parser"
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

import cors from "cors";
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))

import { fileURLToPath } from 'node:url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const tmKey = '0txRTCElnYysjp6wGw85pTQwcXUPIXfv';


const client_id = '8368d220a5bd459db1f24d384a859cf7';
const client_secret = '31cd2b87af204c0b93bff5a0771719c8';
const redirect_uri = 'http://localhost:5000/Login';


app.get('/getConcerts*', (req, res) => {
    console.log("trying")
    let term = req.query.term
    request('https://app.ticketmaster.com/discovery/v2/events.json?segmentId=KZFzniwnSyZfZ7v7nJ&keyword=' + term + '&size=5&apikey=' + tmKey, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let info = JSON.parse(body)
            // console.log(info)
            if (info.page.totalElements == 0) {
                return ""
            }
            // let eventList = info._embedded.events
            // //console.log(info)
            // //res.send(info._embedded.events)
            //
            // let concerts = []
            // let prev = ""
            // let count = 0
            // for (let i = 0; i < eventList.length; i++) {
            //
            //     let event = eventList[i]
            //     if (event.name === prev) {
            //         continue;
            //     }
            //     if (count > 4) {
            //         break;
            //     }
            //
            //     prev = event.name
            //     count++
            //     let element = {
            //         id: i + 1,
            //         artist: "testArtist",
            //         title: event.name,
            //         image: event.images[0].url,
            //         date: event.dates.start.localDate,
            //         address: event._embedded.venues[0].city.name,
            //         url: event.url,
            //         description: "testDesc",
            //         genre: event.classifications[0].genre,
            //         color: "#fff",
            //         time: "testTime",
            //         price: "testPrice",
            //     }
            //
            //     concerts.push(element);
            // }

            // let filePath = __dirname + '/src/datas/concert1.data.tsx'
            // fs.writeFile(filePath, result, function(err) {
            //     if (err) {
            //         console.log("err")
            //         throw err
            //     }
            // })

            // console.log(result)
            // console.log(eventList[0])
            // console.log(eventList[0]._embedded.venues[0])
            // console.log(eventList[0].classifications[0].genre)
            // console.log(eventList[19].classifications[0].genre)
            // console.log(eventList[0].classifications[0].segment)
            // console.log(eventList[19].classifications[0].segment)
            // console.log(eventList[0].classifications[0].subGenre)
            // console.log(eventList[19].classifications[0].subGenre)

            console.log(info)
            res.json(info)
        }
    })
})

const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
    console.log();
    console.log(`  App running in port ${PORT}`);
    console.log();
    console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});