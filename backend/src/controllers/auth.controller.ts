import { Response, Request } from "express";

import { hashPassword, verifyPassword } from "../utils/hash.util";
import generateAccessToken from "../utils/jwt.util";

import { findUserByEmail, createUser } from "../services/account.service";

async function signIn(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const data = await findUserByEmail(email);

    if (!data) {
      res.status(404).send({
        statusCode: 404,
        message: "Not found",
        payload: null,
      });

      return;
    }

    const validPassword = await verifyPassword(password, data!.password);

    if (!validPassword) {
      res.status(401).send({
        statusCode: 401,
        message: "Invalid Password",
        payload: null,
      });

      return;
    }

    res.status(200).send({
      statusCode: 200,
      message: "Success",
      payload: {
        accessToken: await generateAccessToken(data!.id),
      },
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: error,
    });
  }
}

async function signUp(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;
    if (await findUserByEmail(email)) {
      res.status(409).send({
        statusCode: 409,
        message: "Conflict",
        payload: null,
      });
      return;
    }

    const data = await createUser({
      username: username,
      email: email,
      password: (await hashPassword(password)) || "",
    });

    res.status(201).send({
      statusCode: 201,
      message: "Created",
      payload: {
        accessToken: await generateAccessToken(data.id),
      },
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: error,
    });
  }
}

export { signUp, signIn };
