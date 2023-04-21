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


app.use("/", express.static(path.join(__dirname)));
app.get("/api/v1", (req, res) => {
    res.json({
        project: "React and Express and Vite Test",
        from: "William",
    });
});

app.get("/Dashboard", (_req, res) => {
    console.log("at dash!")

    request('https://app.ticketmaster.com/discovery/v2/events.json?postalCode=02215&apikey=' + tmKey, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let info = JSON.parse(body)
            console.log(info)
            if (info.page.totalElements == 0)
            {
                return
            }
            let eventList = info._embedded.events
            //console.log(info)
            //res.send(info._embedded.events)

            let result = "export const Concerts = [ \n"
            for(let i = 0; i < eventList.length; i++) {

                let event = eventList[i]
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

            console.log(result)
            console.log(eventList[0])
            console.log(eventList[0]._embedded.venues[0])
            console.log(eventList[0].classifications[0].genre)
            console.log(eventList[19].classifications[0].genre)
            console.log(eventList[0].classifications[0].segment)
            console.log(eventList[19].classifications[0].segment)
            console.log(eventList[0].classifications[0].subGenre)
            console.log(eventList[19].classifications[0].subGenre)
        }
    })

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

    fs.readFile(path.join(__dirname, "index.html"), function read(err, data) {
        if (err) {
            throw err;
        }
        let content = data.toString().replace("PAGE_PARAMETER", "http://localhost:3000/src/main.tsx");
        res.send(content)
    })
})

const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
    console.log();
    console.log(`  App running in port ${PORT}`);
    console.log();
    console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});