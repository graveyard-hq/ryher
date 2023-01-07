import { randomBytes } from "crypto";
import crypto from "crypto";

import db from "../../utils/db";

import { ICreateNote, IUpdateNoteById } from "../../types/note";

const createNote = async (body: ICreateNote) => {
    return await db.note.create({
        data: {
            title: body.title,
            text: body.text,
            accountId: body.accountId,
        },
    })
};

const getNoteById = async (id: string) => {
    return await db.note.findUnique({
        where: {
            id: id,
        },
    })
};

const getNotesByAccountId = async (accountId: string) => {
    return await db.note.findMany({
        where: {
            accountId: accountId,
        },
    })
};

const updateNoteById = async (body: IUpdateNoteById) => {
    return await db.note.update({
        where: {
            id: body.id,
        },
        data: {
            title: body.title || undefined,
            text: body.text || undefined
        },
    })
};

const deleteNoteById = async (id: string) => {
    return await db.note.delete({
        where: {
            id: id,
        },
    })
};

export { createNote, getNoteById, getNotesByAccountId, updateNoteById, deleteNoteById }