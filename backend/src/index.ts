import dotenv from "dotenv";
import createServer from "./utils/server.util";
import log from "./utils/logger.util";
import { API_PORT } from "./configs/config";

const app = createServer();

dotenv.config();

const Port: number = Number(process.env.PORT) || API_PORT;

async function start(port: number) {
  app.listen(port, () => {
    try {
      log.info(`Listening on http://localhost:${port}`);
      log.info(`Running on ${process.env.NODE_ENV} mode`);
    } catch (error) {
      log.error(error);
      process.exit(1);
    }
  });
}

start(Port);
