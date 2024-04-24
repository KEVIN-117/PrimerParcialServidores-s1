import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  node: process.env.NODE_ENV || "development",
};
