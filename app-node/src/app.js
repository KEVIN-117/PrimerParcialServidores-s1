import express from "express";
import { dirname } from "path";
import bookRouter from "./routes/book.route.js";
const app = express();

const __dirname = dirname(new URL(import.meta.url).pathname);


app.use(express.json());
app.use(express.static(__dirname + "/static/build"));

app.use("/api", bookRouter);

console.log("dirname: ", __dirname);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/build/index.html");
})

export default app;
