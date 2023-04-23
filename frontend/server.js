import express from "express";
import path from "path";
import fs from "fs";
import request from "request";
import bodyParser from "body-parser"
const app = express();

import assetsRouter from "./server/assets-router.js";
app.use("/src", assetsRouter);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

import { fileURLToPath } from 'node:url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const tmKey = '0txRTCElnYysjp6wGw85pTQwcXUPIXfv';


const client_id = '8368d220a5bd459db1f24d384a859cf7';
const client_secret = '31cd2b87af204c0b93bff5a0771719c8';
const redirect_uri = 'http://localhost:5000/Login';

app.get('/Login*', (req, res) => {

    const code = req.query.code || null;
    const state = req.body.state || null;

    console.log("has this been called?")
    console.log("code = " + code)

    if(code != null) {
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code',
            },
            headers: {
                Authorization:
                    'Basic ' +
                    new Buffer.from(client_id + ':' + client_secret).toString('base64'),
            },
            json: true,
        };

        request.post(authOptions, (error, response, body) => {

            console.log(body)

            const access_token = body.access_token;
            const refresh_token = body.refresh_token;
            const expires_in = body.expires_in;

            const options = {
                url: 'https://api.spotify.com/v1/me',
                headers: {Authorization: 'Bearer ' + access_token},
                json: true,
            };

            request.get(options, (error, response, body) => {
                console.log(body);
            });
        });
    }

    fs.readFile(path.join(__dirname, "index.html"), function read(err, data) {
        if (err) {
            throw err;
        }
        let content = data.toString()
        res.send(content)
    })
});

app.use("/", express.static(path.join(__dirname)));
app.get("/api/v1", (req, res) => {
    res.json({
        project: "React and Express and Vite Test",
        from: "William",
    });
});
app.get("/Dash", (_req, res) => {
    console.log("at dash!")

    makeData()

    fs.readFile(path.join(__dirname, "index.html"), function read(err, data) {
        if (err) {
            throw err;
        }
        let content = data.toString()
        res.send(content)
    })
})

app.get("/Members", (_req, res) => {
    console.log("at members!")

    fs.readFile(path.join(__dirname, "index.html"), function read(err, data) {
        if (err) {
            throw err;
        }
        let content = data.toString()
        res.send(content)
    })
})
app.get("/*", (_req, res) => {

    makeData()

    res.sendFile(path.join(__dirname, "index.html"))
})

function makeData() {
    request('https://app.ticketmaster.com/discovery/v2/events.json?postalCode=02215&apikey=' + tmKey, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let info = JSON.parse(body)
            // console.log(info)
            if (info.page.totalElements == 0)
            {
                return
            }
            let eventList = info._embedded.events
            //console.log(info)
            //res.send(info._embedded.events)

            let result = "export const Concerts = [ \n"
            let prev = ""
            let count = 0
            for(let i = 0; i < eventList.length; i++) {

                let event = eventList[i]
                if (event.name === prev) {
                    continue;
                }
                if (count > 4) {
                    break;
                }

                prev = event.name
                count++
                let element = {
                    id: i+1,
                    title: event.name,
                    image: event.images[0].url,
                    date: event.dates.start.localDate,
                    location: event._embedded.venues[0].city.name,
                    ticketLink: event.url,
                    description: "testing",
                    genre: "testing",
                }

                result += JSON.stringify(element) + ",\n";
            }

            result += "];"

            let filePath = __dirname + '/src/datas/concert1.data.tsx'
            fs.writeFile(filePath, result, function(err) {
                if (err) {
                    console.log("err")
                    throw err
                }
            })

            // console.log(result)
            // console.log(eventList[0])
            // console.log(eventList[0]._embedded.venues[0])
            // console.log(eventList[0].classifications[0].genre)
            // console.log(eventList[19].classifications[0].genre)
            // console.log(eventList[0].classifications[0].segment)
            // console.log(eventList[19].classifications[0].segment)
            // console.log(eventList[0].classifications[0].subGenre)
            // console.log(eventList[19].classifications[0].subGenre)
        }
    })
}

const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
    console.log();
    console.log(`  App running in port ${PORT}`);
    console.log();
    console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});