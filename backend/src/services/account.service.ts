import db from "../utils/db.util";

const checkUser = async (email: string) => {
  return await db.account.findUnique({ where: { email: email } });
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

export { checkUser, createUser };