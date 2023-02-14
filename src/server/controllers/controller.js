import query from "../db/utils";

const findAll = async () => {
  return await query("SELECT * FROM remedies");
};
//receives AffectedOrgans from a url parameter and returns an array of objects
const getApprovals = async () => {
  return await query(`SELECT * FROM approvals`);
};
//receives AffectedOrgans from a url parameter and returns an array of objects
const findOrgan = async (AffectedOrgans) => {
  return await query(`SELECT * FROM remedies WHERE AffectedOrgans = ?`, [
    AffectedOrgans
  ]);
};
//receives the ID (Number) of a single database entry and returns that object from remedies
const findRemedy = async (id) => {
  return await query(`SELECT * FROM remedies WHERE remedies_id = ?`, [id]);
};
//receives the ID (Number) of a single database entry and returns that object from approvals
const findApproval = async (id) => {
  return await query(`SELECT * FROM approvals WHERE remedies_id = ?`, [id]);
};
//Posts a new line item to the database by destructuring an object received by the post event
const addApproval = async (req) => {
  return await query(
    `INSERT INTO approvals (remedies_id, Name, AffectedOrgans, Description, AddedBy, Uses, Dosage, isApproved) VALUES (?, ?, ?, ?, 'test user', ?, ?, 0);`,
    [req.remedies_id, req.Name, req.AffectedOrgans, req.Description, req.Uses, req.Dosage]
  );
};
const addRemedy = async (req) => {
  return await query(
    `INSERT INTO remedies (remedies_id, Name, AffectedOrgans, Description, AddedBy, Uses, Dosage, isApproved) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
    [req.remedies_id, req.Name, req.AffectedOrgans, req.Description, req.AddedBy, req.Uses, req.Dosage, req.isApproved]
  );
};
//Receives ID (Number) and deletes a database entry based on the selected ID. ID value is controlled by a button, so user cannot delete unwanted entries
//Future iterations of this application may include a requirement that users can only delete entries that they themselves have added
const deleteApproval = async (ID) => {
  return await query(`DELETE FROM approvals WHERE remedies_id = ?`, [ID]);
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
  return await query(`DELETE FROM remedies WHERE remedies_id = ?`, [ID]);
};

export default { findOrgan, addApproval, updateRemedy, deleteRemedy, findRemedy, getApprovals, addRemedy, deleteApproval, findApproval };
