
const config = {
  dev:{
    port: process.env.PORT,
    node: process.env.NODE_ENV,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
  },
  production:{
    port: process.env.PORT,
    node: process.env.NODE_ENV,
    dbUser: process.env.DB_USER,
    pass: process.env.DB_PASS
  }
};

export function getConfig() {
  return process.env.NODE_ENV === "production" ? config.production : config.dev;
}
