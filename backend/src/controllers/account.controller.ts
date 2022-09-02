import { Response, Request } from "express";

async function createAccount(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

async function getAccount(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

async function updateAccount(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

async function deleteAccount(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

export {
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
};
