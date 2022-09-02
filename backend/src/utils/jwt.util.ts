import jwt from "jsonwebtoken";

const generateAccessToken = async (id: string) => {
  const value = jwt.sign({ id }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "7d",
  });

  return value;
};

export default generateAccessToken;