import express from "express";
import { Response, Request } from "express";
import log from "../utils/logger.util";

const router = express.Router();

router.get("/health", async (req: Request, res: Response) => {
  const data = {
    uptime: process.uptime(),
    status: "up",
    timestamp: Date.now(),
  };
  try {
    res.status(200).send({
      statusCode: 200,
      message: "Success",
      payload: data,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });

    log.error(error);
  }
});

export default router;
