import mysql from "mysql";
import config from "../config";
//set up mysql connection
const connection = mysql.createPool(config.mysql);


export default connection;
