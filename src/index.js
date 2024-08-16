import { setupServer } from '../src/server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

async function bootstrap() {
  try {
    await initMongoConnection();
    setupServer();
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
