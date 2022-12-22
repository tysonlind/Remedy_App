import query from "../db/utils";

const findAll = async () => {
  return await query("SELECT * FROM table");
};
//receives AffectedOrgans from a url parameter and returns an array of objects
const findOrgan = async (AffectedOrgans) => {
  return await query(`SELECT * FROM remedies WHERE AffectedOrgans = ?`, [
    AffectedOrgans,
  ]);
};
//receives the ID (Number) of a single database entry and returns that object
const findRemedy = async (id) => {
  return await query(`SELECT * FROM remedies WHERE remedies_id = ?`, [id]);
};
//Posts a new line item to the database by destructuring an object received by the post event
const addRemedy = async (req) => {
  return await query(
    `INSERT INTO remedies ( Name, AffectedOrgans, Description, AddedBy, Uses, Dosage) VALUES (?, ?, ?, 'test user', ?, ?);`,
    [req.Name, req.AffectedOrgans, req.Description, req.Uses, req.Dosage]
  );
};
//Receives a PUT request with an object and modifies a current database entry. The ID is controlled and user cannot modify it at the time of entry.
const updateRemedy = async (req) => {
  return await query(
    `UPDATE remedies SET Name = ?, AffectedOrgans = ?, Description = ?, AddedBy = "test user", Uses = ?, Dosage = ? WHERE remedies_id = ?`,
    [
      req.Name,
      req.AffectedOrgans,
      req.Description,
      req.Uses,
      req.Dosage,
      req.remedies_id,
    ]
  );
};
//Receives ID (Number) and deletes a database entry based on the selected ID. ID value is controlled by a button, so user cannot delete unwanted entries
//Future iterations of this application may include a requirement that users can only delete entries that they themselves have added
const deleteRemedy = async (ID) => {
  return await query(`DELETE from remedies WHERE remedies_id = ?`, [ID]);
};

export default { findOrgan, addRemedy, updateRemedy, deleteRemedy, findRemedy };
