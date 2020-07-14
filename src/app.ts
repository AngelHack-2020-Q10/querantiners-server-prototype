import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'strong-error-handler';

// App class는 반드시 Singleton으로 해야 합니다.
class App {

  public app: express.Application;
  //public routes: Routes = new Routes();

  constructor() {
      this.app = express(); 
      this.config();
      //this.routes.routes(this.app);
      this.errorHandler();
  }

  private config(): void{

      // 외부 라이브러리 설정은 여기서 합니다.      
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