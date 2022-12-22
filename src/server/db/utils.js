import connection from "./index";
//structuring the query promise to be used by controller.js
const query = (qryStr, values) => {
  return new Promise((resolve, reject) => {
    connection.query(qryStr, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export default query;
