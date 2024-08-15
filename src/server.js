import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { getContacts, getContactById } from './controllers/contacts.js';

function setupServer() {
  const app = express();
  const serverPort = process.env.PORT;

  app.use(cors());
  app.use(pino({ transport: { target: 'pino-pretty' } }));

  app.get('/contacts', getContacts);
  app.get('/contacts/:contactId', getContactById);

  app.use((_, res) => {
    res.status(404).send({ status: 404, message: 'Not found' });
  });
  app.use((err, req, res, next) => {
    res.status(500).send({ message: 'Server error', status: 500 });
  });

  app.listen(serverPort, () => {
    console.log(`Server started on port ${serverPort}`);
  });
}
export { setupServer };
