import mongoose from "mongoose";
import { config } from "../config/index.js";
const { dbHost, dbName, dbPort } = config;

const URI = `mongodb://${dbHost}:${dbPort}/${dbName}`;

console.log(`DB URI: ${URI}`);
const connect = async () => {
  try {
    await mongoose.connect(URI);

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error: ", error.message);
  }
};

mongoose.connection.on("error", () => {
  console.log("Database connection error");
  process.exit(1);
});

mongoose.connection.once("open", () => {
  console.log("Database connected successfully");
});

export default connect;
