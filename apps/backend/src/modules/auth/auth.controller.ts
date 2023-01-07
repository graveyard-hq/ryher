import { FastifyRequest, FastifyReply } from "fastify";

import { createAccount, getAccountByEmail } from "./auth.service";
import { verify } from "../../utils/hash";
import { ISignInRequest, ISignUpRequest } from "../../types/auth";
import generateJWT from "../../utils/jwt";

const signUp = async (
  request: FastifyRequest<{ Body: ISignUpRequest }>,
  reply: FastifyReply,
): Promise<void> => {
  const { username, email, password } = request.body;
  const data = await getAccountByEmail(email);

  if (!data) {
    const user = await createAccount({
      username: username,
      email: email,
      password: password,
    });

    reply.status(201).send({
      message: "Created",
      payload: user,
      statusCode: 201,
    });

    return;
  }

  reply.status(409).send({
    message: "This email has already been used",
    error: "Conflict",
    statusCode: 409,
  });
};

const signIn = async (
  request: FastifyRequest<{ Body: ISignInRequest }>,
  reply: FastifyReply,
): Promise<void> => {
  const { email, password } = request.body;

  const account = await getAccountByEmail(email);

  if (!account) {
    reply.status(404).send({
      message: "Account was not found",
      error: "Not Found",
      statusCode: 404,
    });

    return;
  }

  if (!(await verify(password, account.password))) {
    reply.status(401).send({
      message: "Password is not correct",
      error: "Unauthorized",
      statusCode: 401,
    });
  }

  reply.status(200).send({
    message: "Created",
    payload: {
      access_token: await generateJWT(account.id),
    },
    statusCode: 201,
  });
};

export { signUp, signIn };
