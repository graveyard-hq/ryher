import db from "../utils/db.util";
import { hashPassword } from "../utils/hash.util";

const findUserByEmail = async (email: string) => {
  return await db.account.findUnique({ where: { email: email } });
};

const findUserById = async (id: string) => {
  return await db.account.findUnique({
    where: { id: id },
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const createUser = async (user: any) => {
  return await db.account.create({
    data: {
      username: user.username,
      email: user.email,
      password: user.password,
    },
  });
};

const updateUser = async (id: string, body: any) => {
  return await db.account.update({
    where: {
      id: id,
    },
    data: {
      username: body.username || undefined,
      email: body.email || undefined,
      password: (await hashPassword(body.password)) || undefined,
    },
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const deleteUser = async (id: string) => {
  return await db.account.delete({
    where: {
      id: id,
    },
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export { findUserByEmail, createUser, findUserById, updateUser, deleteUser };
