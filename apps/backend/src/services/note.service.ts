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

const findNoteById = async (noteId: string) => {
  return await db.note.findUnique({
    where: { id: noteId },
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

const deleteNote = async (noteId: string, accountId: string) => {
  return await db.note.deleteMany({
    where: {
      id: noteId,
      accountId: accountId,
    },
  });
};

const updateNote = async (data: any, noteId: string, accountId: string) => {
  return await db.note.updateMany({
    where: {
      id: noteId,
      accountId: accountId,
    },
    data: {
      title: data.title || undefined,
      description: data.description || undefined,
    },
  });
};

export { createNewNote, findNoteById, fetchAllNotes, deleteNote, updateNote };
