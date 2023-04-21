import express from "express";
import path from "path";
import fs from "fs";
const app = express();

import assetsRouter from "./server/assets-router.js";
app.use("/src", assetsRouter);

import { fileURLToPath } from 'node:url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))


app.use("/", express.static(path.join(__dirname)));
app.get("/api/v1", (req, res) => {
    res.json({
        project: "React and Express and Vite Test",
        from: "William",
    });
});

app.get("/Dashboard", (_req, res) => {
    console.log("at dash!")

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