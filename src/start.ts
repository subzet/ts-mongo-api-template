import { start } from './api';
import { setupDatabase } from './util';

setupDatabase();

start().catch((error) => console.error('core failed to start', error));
