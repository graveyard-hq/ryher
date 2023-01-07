import jwt from "jsonwebtoken";

const generateJWT = async (id: string) => {
  const value = jwt.sign({ id }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "1d",
  });

  return value;
};

export default generateJWT;
