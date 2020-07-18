import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'strong-error-handler';
import { Route } from './rotues/Route';

// App class must be only one
class App {

  public app: express.Application;
  public route: Route = new Route();

  constructor() {
      this.app = express(); 
      this.config();
      this.route.initialize(this.app);
      this.errorHandler();
  }

  private config(): void{

      // request and response settings     
      this.app.use(bodyParser.json({limit: '5mb'}));
      this.app.use(bodyParser.urlencoded({extended: true}));
  }
  
  private errorHandler(): void {
      this.app.use(errorhandler({
          debug: process.env.ENV !== 'prod',
          log: true,
      }));
  } 
}

export default new App().app;