import express from "express";
import { dirname } from "path";
import bookRouter from "./routes/book.route.js";
const app = express();

const __dirname = dirname(new URL(import.meta.url).pathname).substring(1);


app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/api", bookRouter);

export default app;
