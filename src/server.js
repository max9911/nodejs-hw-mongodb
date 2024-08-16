import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import contactsRoutes from './routes/contacts.js';
import { notFoundError } from './middlewares/notFoundError.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(cors());
app.use(pino({ transport: { target: 'pino-pretty' } }));

app.use(contactsRoutes);

app.use(notFoundError);
app.use(errorHandler);

function setupServer() {
  const serverPort = process.env.PORT;
  app.listen(serverPort, () => {
    console.log(`Server started on port ${serverPort}`);
  });
}
export { setupServer };
