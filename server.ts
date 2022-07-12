import {ServerLoader, GlobalAcceptMimesMiddleware} from "@tsed/common";
import * as Path from "path";

export class Server extends ServerLoader {
  /**
   * In your constructor set the global endpoint and configure the folder to scan the controllers.
   * You can start the http and https server.
   */
  constructor() {
    super();

    const appPath: string = Path.resolve(__dirname);

    this.mount("/rest", appPath + "/controllers/**/**.js")    // Declare the directory that contains your controllers
      .createHttpServer(8000)
      .createHttpsServer({
        port: 8080
      });

  }

  /**
   * This method let you configure the middleware required by your application to works.
   * @returns {Server}
   */
  $onMountingMiddlewares(): void|Promise<any> {

    const morgan = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      compress = require('compression'),
      methodOverride = require('method-override');

    this
      .use(morgan('dev'))
      .use(GlobalAcceptMimesMiddleware)

      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }));

    return null;
  }

  public $onReady(){
    console.log('Server started...');
  }

  public $onServerInitError(err){
    console.error(err);
  }
}

new Server().start();
