import { Router } from 'express';

import TestController from './app/controllers/TestController';

const routes = new Router();

routes.get('/', TestController.index);

export default routes;