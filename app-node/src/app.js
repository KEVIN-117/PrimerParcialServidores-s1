import express from "express";
import { dirname } from "path";
import os from "os";



import bookRouter from "./routes/book.route.js";
const app = express();
const platform = os.platform();

const __dirname = dirname(new URL(import.meta.url).pathname).substring(platform === "win32" ? 1 : 0);



app.use(express.json());
app.use(express.static( __dirname+ "/static/build"));

app.use("/api", bookRouter);


console.log(os.platform());
console.log(__dirname);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/build/index.html");
})

export default app;
