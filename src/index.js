import http from 'http';
import app from './app';

const { SERVER_PORT } = process.env;

const init = () => {
  const server = http.createServer(app);

  server.listen(SERVER_PORT);

  console.log(`Server is running on port ${SERVER_PORT}!`);

};

init();

