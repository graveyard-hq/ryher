import express from 'express';
import app_router from './router';
import middleware from './middleware';

const server = express();

server.use('/', app_router);
server.use(middleware.cors);

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
