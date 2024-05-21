import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  node: process.env.NODE_ENV || "development",
  dbHost: process.env.DB_HOST || "localhost",
  dbPort: process.env.DB_PORT || 27017,
  dbName: process.env.DB_NAME || "books-db",
};
