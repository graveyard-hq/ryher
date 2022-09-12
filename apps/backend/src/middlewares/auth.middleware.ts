import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";
import log from "../utils/logger.util";

declare module "express" {
  interface Request {
    user?: any;
  }
}

const authorizeRequest = async (req: Request, res: Response, next: NextFunction) => {
  let accessToken: any;

  if (req.headers.authorization && req.headers.authorization?.startsWith("Bearer")) {
    try {

      accessToken = req.headers.authorization?.split(" ")[1];

      const value = <any>jwt.verify(accessToken, process.env.JWT_SECRET_KEY as string);

      req.user = value;

      next();
    } catch (error) {
      res.status(401).send({
        statusCode: 401,
        message: "Unauthorized",
        payload: error,
      });
    }

    return;
  }
  if (!accessToken) {
    res.status(401).send({
      statusCode: 401,
      message: "Unauthorized",
      payload: null,
    });

    return;
  }
};

export default authorizeRequest;
