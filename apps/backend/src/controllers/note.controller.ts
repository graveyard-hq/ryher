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
    const id = req.params.id as any;

    if (!data) {
      res.status(404).send({
        statusCode: 404,
        message: "Not found",
        payload: null,
      });

      return;
    }

    const note = await findNoteById(id);

    if (!note) {
      res.status(404).send({
        statusCode: 404,
        message: "Not found",
        payload: null,
      });

      return;
    }

    if (note?.accountId != data.id) {
      res.status(403).send({
        statusCode: 406,
        message: "Forbidden",
        payload: null,
      });

      return;
    }

    res.status(200).send({
      statusCode: 200,
      message: "Success",
      payload: note,
    });

    return;
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

async function updateNoteById(req: Request, res: Response) {
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

    const { title, description } = req.body;

    res.status(200).send({
      statusCode: 404,
      message: "Success",
      payload: await updateNote(
        { title: title, description: description },
        req.params.id as string,
        data.id,
      ),
    });
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

    res.status(200).send({
      statusCode: 200,
      message: "Success",
      payload: await deleteNote(req.body.id, data.id),
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

export { createNote, getNotes, getNoteUsingId, deleteNoteUsingId, updateNoteById };
