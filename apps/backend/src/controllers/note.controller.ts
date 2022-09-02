import { Response, Request } from "express";

async function createNote(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

async function getNotes(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

async function getNoteUsingId(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

async function deleteNoteUsingId(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

export { createNote, getNotes, getNoteUsingId, deleteNoteUsingId };
