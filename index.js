import app from "./src/app.js";
import { getConfig } from "./src/config/index.js";
import connect from "./src/db/index.js";


connect();

const { port, node } = getConfig()  ;
app.listen(port, () => {
  console.log(
    `\x1b[32mServer running on port \x1b[35m${port}\x1b[0m \x1b[35m${node} mode. The URL is\x1b[0m \x1b[34mhttp://localhost:${port}\x1b[0m`
  );
});
