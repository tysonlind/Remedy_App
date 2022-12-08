# Basic MERN Template - Backend

## Getting Started

New to this template? Here's how to get started:

1. Open your terminal to `src/server`
2. Run `npm install`
3. Start the development server with `npm start`
4. Your express server will be running at [http://localhost:8080](http://localhost:8080)
5. Read through the [project structure](#project-structure) below to get a better understanding about where and how to go about developing your backend.
6. Happy Hacking!

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

There is a `.env.template` file that models the `.env` file and variables you will need to create to start.

Create a `.env` file based on the template file, and provide the appropriate values for the preset variables.
