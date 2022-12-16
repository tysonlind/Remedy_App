import query from "../db/utils";

const findAll = async () => {
  return await query("SELECT * FROM table");
};

 const findOrgan = async (AffectedOrgans) => {
  return await query(`SELECT * FROM remedies WHERE AffectedOrgans = ?`, [AffectedOrgans]);
};
const findRemedy = async (id) => {
  return await query(`SELECT * FROM remedies WHERE remedies_id = ?`, [id]);
};

 const addRemedy = async (req) => {
  return await query(`INSERT INTO remedies ( Name, AffectedOrgans, Description, AddedBy, Uses, Dosage) VALUES (?, ?, ?, 'test user', ?, ?);`, [req.Name, req.AffectedOrgans, req.Description, req.Uses, req.Dosage]);
};

const updateRemedy = async (req) => {
  return await query(`UPDATE remedies SET Name = ?, AffectedOrgans = ?, Description = ?, AddedBy = "test user", Uses = ?, Dosage = ? WHERE remedies_id = ?`, [req.Name, req.AffectedOrgans, req.Description, req.Uses, req.Dosage, req.remedies_id]);
};

const deleteRemedy = async (ID) => {
  return await query(`DELETE from remedies WHERE remedies_id = ?`, [ID]);
};


export default { findOrgan, addRemedy, updateRemedy, deleteRemedy, findRemedy };