# Basic MERN Template - Backend

## Running this Application

1. Navigate to the src/client and src/server folders in your terminal and run "npm install" in each one. This should install dependencies.
2. Install the SQL dump files for the database into your MySQL Workbench database management system.
3. Navigate to the src/client and src/server folders in your terminal and run "npm start" in each one.
4. Open your browser to http://localhost:3000

## Project Structure

```txt
.
└── src
    └── config
    └── controllers
    └── db
    └── middlewares
    └── routes
    .babelrc
    server.js
```

1. `/src`: This directory will contain all of the code that makes up the backend component (server) of your full stack application. `src` is a convention for "_source code_".
2. `/src/config`: Responsible for using `dotenv` to load and export your **environment variables**.
3. `/src/controllers`: Controller functions used for handling business/data logic.
4. `/src/db`: Responsible for creating a database connection and exporting database utility functions.
5. `/src/middlewares`: Contains middleware functions used within your express application.
6. `/src/routes`: Contains your top level and sub level routes with Express Router.
7. `.babelrc`: Configures babel plugins for transpiling ESM to CommonJS.
8. `server.js`: Contains your main express server instance and binds the server to a specified port.

## Environment Variables

There is a `.env.template` file that models the `.env` file and variables. You will need to modify the .env file to match the correct setting to access your local MySQL server.

