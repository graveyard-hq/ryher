import { FastifyRequest, FastifyReply } from "fastify";

const createNote = async (request: FastifyRequest<{}>, reply: FastifyReply): Promise<void> => {};
const getNotes = async (request: FastifyRequest<{}>, reply: FastifyReply): Promise<void> => {};
const getNote = async (request: FastifyRequest<{}>, reply: FastifyReply): Promise<void> => {};
const updateNote = async (request: FastifyRequest<{}>, reply: FastifyReply): Promise<void> => {};

export { createNote, getNotes, getNote, updateNote };
