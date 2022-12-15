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
app.use(express.json());

/**
 * Enables incoming requests from cross origin domains
 */
app.use(cors());

/**
 * Logs incoming request information to the dev console
 */
app.use(morgan("dev"));

/**
 * Directs incoming static asset requests to the public folder
 */
app.use(express.static("public"));

//path.join(__dirname, "../client/build")

/**
 * Directs all routes starting with /api to the top level api express router
 */
app.use("/", router);
/**
 * Setting up production route
 */
 //app.use("/", router);
/**
 * Sends the react app index.html for page requests
 * Only needed in production when you are not using the react dev server
 */
/* app.use((req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  } catch (error) {
    next(error);
  }
}); */

/**
 * Error handler middleware
 */
app.use(errorHandler);

/**
 * Bind the app to a specified port
 * You can access your app at http://localhost:<port>
 */
console.log(config);
app.listen(config.port, () =>
  console.log(`Server listening on port ${config.port}...`)
);
