import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // receber requisições no formato JSON
  }

  routes(){
    this.server.use(routes);
  }
}

export default new App().server;