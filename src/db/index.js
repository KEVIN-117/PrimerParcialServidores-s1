import mongoose from "mongoose";
import { getConfig } from "../config/index.js";
const { dbHost, dbName, dbPort, node, dbUser, pass } = getConfig();

const URI = node === "development"? `mongodb://${dbHost}:${dbPort}/${dbName}` : `mongodb+srv://${dbUser}:${pass}@cluster0.mto6mpe.mongodb.net/`;

console.log(URI)

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
