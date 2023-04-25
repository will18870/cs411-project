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
    let term = req.query.term
    request('https://app.ticketmaster.com/discovery/v2/events.json?segmentId=KZFzniwnSyZfZ7v7nJ&keyword=' + term + '&size=20&apikey=' + tmKey, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let info = JSON.parse(body)
            // console.log(info)
            if (info.page.totalElements == 0) {
                return ""
            }

            let concerts = "{ \"_embedded\":{ \"events\":["
            let prev = ""
            let count = 0
            for (let i = 0; i < info._embedded.events.length; i++) {
                if (info._embedded.events[i].name == prev)
                    continue
                if (count >= 5)
                    break

                if (i != 0) {concerts += ","}
                count++
                // console.log(info._embedded.events[i])
                prev = info._embedded.events[i].name
                concerts += JSON.stringify(info._embedded.events[i])
            }
            concerts += "] } }"
            concerts = JSON.parse(concerts)
            // console.log(info)
            res.json(concerts)
        }
    })

    console.log("getting concerts...")

})

app.get('/getTopArtists*', (req, res) => {
    let token = req.query.token
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    let artists = []
    request('https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=3', options, function (error, response, body) {
        if (!error) {
            let info = JSON.parse(body)
            // console.log(info.items)
            // res.json(info)

            for (let i = 0; i < info.items.length; i++) {
                artists.push(info.items[i].name)
            }

            console.log(artists)
            res.send(artists)

            // console.log(concerts)
            // res.json(concerts)

            // let concerts = "{ \"_embedded\":{ \"events\":["
            // for (let i = 0; i < artists.length; i++) {
            //     let prev = ""
            //     request('https://app.ticketmaster.com/discovery/v2/events.json?segmentId=KZFzniwnSyZfZ7v7nJ&keyword=' + artists[i] + '&size=5&apikey=' + tmKey, function (error, response, body) {
            //         if (!error) {
            //             let info = JSON.parse(body)
            //             console.log(info)
            //             if (!info) {
            //                 let events = info._embedded.events
            //                 for (let j = 0; j < events.length; j++) {
            //                     if (prev == events[j].name) {
            //                         continue
            //                     }
            //                     prev = events[j].name
            //                     concerts += JSON.stringify(events[j])
            //                 }
            //             }
            //         }
            //     })
            // }

        } else {
            console.log("error!")

        }
    })
    console.log("getting top artists...")
})


const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
    console.log();
    console.log(`  App running in port ${PORT}`);
    console.log();
    console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});