import { setupServer } from '../src/server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

initMongoConnection();
setupServer();
