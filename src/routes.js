import { Router } from 'express';

import UserController from './app/controllers/UserConstroller';

const routes = new Router();

routes.post('/users', UserController.store);

export default routes;
