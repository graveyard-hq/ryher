import argon2 from "argon2";
import log from "./logger.util";

const hashPassword = async (value: string) => {
  try {
    const hash = await argon2.hash(value);
    return hash;
  } catch (error) {
    log.error(error);
  }
};

const verifyPassword = async (password: string, hash: string) => {
  try {
    const value = await argon2.verify(hash, password);
    return value;
  } catch (error) {
    log.error(error);
  }
};

export { hashPassword, verifyPassword };
