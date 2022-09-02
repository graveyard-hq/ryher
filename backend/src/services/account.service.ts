import db from "../utils/db.util";

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

export { findUserByEmail, createUser, findUserById };
