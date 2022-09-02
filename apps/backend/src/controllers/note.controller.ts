import { Response, Request } from "express";

import {
  createNewNote,
  findNoteById,
  fetchAllNotes,
  deleteNote,
  updateNote,
} from "../services/note.service";

import { findUserById } from "../services/account.service";

async function createNote(req: Request, res: Response) {
  try {
    const { title, description } = req.body;
    const data = await findUserById(req.user.id);

    if (!data) {
      res.status(404).send({
        statusCode: 404,
        message: "Not found",
        payload: null,
      });

      return;
    }

    const newNote = await createNewNote(
      {
        title: title,
        description: description,
      },
      data!.id,
    );

    res.status(201).send({
      statusCode: 201,
      message: "Created",
      payload: newNote,
    });
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
    const data = await findUserById(req.user.id);
    if (!data) {
      res.status(404).send({
        statusCode: 404,
        message: "Not found",
        payload: null,
      });
      return;
    }

    res.status(200).send({
      statusCode: 200,
      message: "Success",
      payload: await fetchAllNotes(data.id),
    });
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
    const data = await findUserById(req.user.id);

    if (!data) {
      res.status(404).send({
        statusCode: 404,
        message: "Not found",
        payload: null,
      });

      return;
    }
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
    const data = await findUserById(req.user.id);

    if (!data) {
      res.status(404).send({
        statusCode: 404,
        message: "Not found",
        payload: null,
      });

      return;
    }
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

export { createNote, getNotes, getNoteUsingId, deleteNoteUsingId };
