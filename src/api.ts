import express from 'express';
import { createServer } from 'http';

import router from './controller';
import { environment } from './util';

const rest = () => {
  const app = express();

  app.set('trust proxy', 1);
  app.set('view cache', false);
  app.set('view engine', 'mustache');
  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());
  app.get('/health-check', async (_, response) => {
    return response.json({ ok: true });
  });

  app.use('/', router);

  return app;
};

export async function server() {
  const app = rest();

  return createServer(app);
}

export async function start(): Promise<void> {
  const httpServer = await server();

  httpServer.listen(environment.PORT, '0.0.0.0', () => {
    console.info(`🚀 REST http://localhost:${environment.PORT}`);
  });
}
