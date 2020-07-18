import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'strong-error-handler';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerJSDoc from 'swagger-jsdoc';
import { Route } from './rotues/Route';


const swaggerDefinition = {
    info: { // API informations (required)
      title: 'Hello World', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'A sample API', // Description (optional)
    },
    host: 'localhost:8000', // Host (optional)
    basePath: '/', // Base path (optional)
  }
  
  // Options for the swagger docs
  const options = {
    // Import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // Path to the API docs
    apis: ['./src/rotues/Route.ts'],
  }

const swaggerSpec = swaggerJSDoc(options);

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
      this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }
  
  private errorHandler(): void {
      this.app.use(errorhandler({
          debug: process.env.ENV !== 'prod',
          log: true,
      }));
  } 
}

export default new App().app;