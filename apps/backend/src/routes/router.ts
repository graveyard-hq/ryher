import express from "express";
import { Response, Request } from "express";
import log from "../utils/logger.util";

const router = express.Router();

import validateRequest from "../middlewares/validate.middleware";
import authorizeRequest from "../middlewares/auth.middleware";
import { SignInSchema, SignUpSchema, UpdateAccountSchema } from "../models/account.model";

import { signIn, signUp } from "../controllers/auth.controller";

import { getAccount, updateAccount, deleteAccount } from "../controllers/account.controller";

router.post("/auth/signup", validateRequest(SignUpSchema), signUp);
router.post("/auth/signin", validateRequest(SignInSchema), signIn);

router.get("/account", authorizeRequest, getAccount);
router.put("/account", validateRequest(UpdateAccountSchema), authorizeRequest, updateAccount);
router.delete("/account", authorizeRequest, deleteAccount);

router.get("/health", async (req: Request, res: Response) => {
  const data = {
    uptime: process.uptime(),
    status: "up",
    timestamp: Date.now(),
    git_hash: process.env.GIT_SHA,
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
