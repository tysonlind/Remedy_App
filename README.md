# Remedy Application README

![Homepage](./src/client/src/images/screenshot1.jpg)
![QueryPage](./src/client/src/images/screenshot2.jpg)
![Add Remedies](./src/client/src/images/screenshot3.jpg)
![Update Remedies](./src/client/src/images/screenshot4.jpg)
![View Remedy Details](./src/client/src/images/screenshot5.jpg)

## Getting Started

1. Navigate to the src/client and src/server folders in your terminal and run "npm install" in each one. This should install dependencies.
2. Install the SQL dump files for the database into your MySQL Workbench database management system.
3. Navigate to the src/client and src/server folders in your terminal and run "npm start" in each one.
4. Open your browser to http://localhost:3000

## Project Structure

The project is seperated into `server/` and `client/` code bases within the `src/` folder.

Within `server/`, you will find a few folders for database connection and utils (`db/`), controllers for business logic (`controllers/`), functions for express middlewars (`middlewares/`), server routes (`routes/`), and configuration (`config/`).

Within `client/`, you will find the `App.jsx` to start, along with other folders for frontend organization.

Read [Frontend Project Structure](./src/client/README.md#project-structure) and [Backend Project Structure](./src/server/README.md#project-structure) for more details on the respective `/client` and `/server/` organization.

## Issues

If you come across any bugs, please submit an [issue on the repo github page](https://github.com/Bryantellius/basic-mern-template/issues).

You can also contact any contributors with details.

## Contributors

[Ben Bryant](https://github.com/Bryantellius) MERN Template
[Tyson Lind](https://github.com/tysonlind) Application Creator
