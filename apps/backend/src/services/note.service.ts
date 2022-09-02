import db from "../utils/db.util";

const createNewNote = async (data: any, accountId: string) => {
  return await db.note.create({
    data: {
      title: data.title,
      description: data.description,
      accountId: accountId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const findNoteById = async (noteId: string, accountId: string) => {
  return await db.note.findFirst({
    where: { id: noteId, accountId: accountId },
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const fetchAllNotes = async (accountId: string) => {
  return await db.note.findMany({
    where: {
      accountId: accountId,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const deleteNote = async () => {};

const updateNote = async () => {};

export { createNewNote, findNoteById, fetchAllNotes, deleteNote, updateNote };
