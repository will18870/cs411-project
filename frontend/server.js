import express from "express";
import path from "path";
import fs from "fs";
import request from "request";
const app = express();

import assetsRouter from "./server/assets-router.js";
app.use("/src", assetsRouter);

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
                res.send('no concerts at this zip code :(')
                return
            }
            let eventList = info._embedded.events
            //console.log(info)
            //res.send(info._embedded.events)

            let result = ""
            for(let i = 0; i < eventList.length; i++) {
                result += eventList[i].name + "\n";
            }

            console.log(result)
            console.log(eventList[0])
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