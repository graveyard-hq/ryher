import { randomBytes } from "crypto";
import crypto from "crypto";

import db from "../../utils/db";
import { hash } from "../../utils/hash";
import { ICreateAccount } from "../../types/auth";

const createAccount = async (body: ICreateAccount) => {
  const hashedPassword = await hash(body.password);
  return await db.account.create({
    data: {
      username: body.username,
      email: body.email,
      password: hashedPassword,
      secret: crypto
        .privateEncrypt(process.env.RSA_PRIVATE_KEY!, Buffer.from(randomBytes(32).toString("hex")))
        .toString(),
    },
    select: {
      id: true,
      username: true,
      email: true,
      password: false,
      secret: false,
      verified: false,
      createdAt: true,
      updatedAt: true,
      notes: false,
    },
  });
};

const getAccountById = async (id: string) => {
  return await db.account.findUnique({
    where: {
      id: id,
    },
  });
};

const getAccountByEmail = async (email: string) => {
  return await db.account.findUnique({
    where: {
      email: email,
    },
  });
};

export { createAccount, getAccountById, getAccountByEmail };
