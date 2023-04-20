import express from "express";
import path from "path";
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
app.get("/", (_req, res) => {
    console.log(path.join(__dirname, "index.html"))
    res.sendFile(path.join(__dirname, "index.html"));
})
const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
    console.log();
    console.log(`  App running in port ${PORT}`);
    console.log();
    console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});