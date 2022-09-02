import express, { Express, Response, Request, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import log from "./logger.util";
import { API_VERSION } from "../configs/config";

import router from "../routes/router";

function createServer() {
  const server: Express = express();

  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use(helmet());
  server.use(
    cors({
      origin: process.env.HOST_URL,
    })
  );

  server.use(`/${API_VERSION}`, router);

  server.use(
    (error: Error, req: Request, res: Response, next: NextFunction) => {
      res.status(500).send({
        statusCode: 500,
        message: "Internal Server Error",
        payload: null,
      });

      log.error(error);
    }
  );

  server.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send({
      statusCode: 404,
      message: "Not found",
      payload: null,
    });
  });

  return server;
}

export default createServer;
