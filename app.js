import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

class App {
  constructor() {
    // Every time that you create a instance of the "App" class
    // you'll call all the constructor functions.
    this.app = express();
    this.middlewares();
    this.routes();
  }

  // Functions that stay in the middle of certain "actions".
  // The "action required" needs to pass through these functions to reach the final objective.
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  // Routes that will help you handle HTTP requests.
  routes() {
    this.app.use('/', homeRoutes);
  }
}

// Exporting express
export default new App().app;
