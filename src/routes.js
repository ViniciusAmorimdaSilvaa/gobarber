import { Router } from 'express';

import UserController from './app/controllers/UserConstroller';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
