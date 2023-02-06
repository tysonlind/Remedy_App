import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/index.js";
//import router from "./routes/organs.router.js";
import config from "./config";
import { errorHandler } from "./middlewares/errorHandler";
//import path from 'path';

const app = express();

/**
 * Parses incoming request body as json if header indicates application/json
 */
//allow express to perform json formatting of data
app.use(express.json());

/**
 * Enables incoming requests from cross origin domains
 */
//allow cors
app.use(cors());

/**
 * Logs incoming request information to the dev console
 */
//development information only
app.use(morgan("dev"));

/**
 * Directs incoming static asset requests to the public folder
 */
app.use(express.static("public"));

//path.join(__dirname, "../client/build")

/**
 * Directs all routes starting with /api to the top level api express router
 */
//define which router paths reference root
app.use("/", router);
/**

/**
 * Error handler middleware
 */
//app.use(errorHandler);

/**
 * Bind the app to a specified port
 * You can access your app at http://localhost:<port>
 */
//Configure connection options in the .env file, default port is 8080
app.listen(config.port || 8080, () =>
  console.log(`Server listening on port ${config.port}...`)
);
