import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

import authRoute from "../modules/auth/auth.route";

export default async function router(fastify: FastifyInstance) {
  fastify.register(authRoute, { prefix: "/auth" });

  fastify.get("/health", (request: FastifyRequest, reply: FastifyReply) => {
    reply.status(200).send({
      statusCode: 200,
      message: "Success",
      payload: {
        status: "online",
        uptime: process.uptime(),
        timestamp: Date.now(),
        environment: process.env.NODE_ENV,
        commit_sha: process.env.COMMIT_SHA,
      },
    });
  });
}
