import fastify, { FastifyInstance } from "fastify";
import * as dotenv from "dotenv";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import { fastifyYupSchema } from "fastify-yup-schema";

import router from "./routes/router";

dotenv.config();

const app: FastifyInstance = fastify({
  logger: true,
});

app.register(cors, { origin: process.env.ORIGIN || "*" });
app.register(helmet);
app.register(fastifyYupSchema);

app.register(router, { prefix: "/" });

const start = async (port: number) => {
  try {
    app.listen({ port: port, host: "0.0.0.0" });
  } catch (error) {
    process.exit(1);
  }
};

start(Number(process.env.PORT) || 8080);
