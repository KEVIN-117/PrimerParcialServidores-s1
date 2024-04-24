import dotenv from "dotenv";
import { mongo } from "mongoose";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  node: process.env.NODE_ENV || "development",
  mongoUri: process.env.MONGODB_URI || "mongodb://localhost:27017/books-db",
};
