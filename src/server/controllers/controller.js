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

 const addRemedy = async (AffectedOrgan) => {
  return await query(`INSERT INTO remedies ( Name, AffectedOrgans, Description, AddedBy, Uses, Dosage) VALUES ('${AffectedOrgan.Name}', '${AffectedOrgan.AffectedOrgans}', '${AffectedOrgan.Description}', 'test user', '${AffectedOrgan.Uses}', '${AffectedOrgan.Dosage}');`, [AffectedOrgan]);
};

const updateRemedy = async (AffectedOrgan) => {
  return await query(`UPDATE remedies SET Name = '${AffectedOrgan.Name}', AffectedOrgans = '${AffectedOrgan.AffectedOrgans}', Description = '${AffectedOrgan.Description}', AddedBy = "test user", Uses = '${AffectedOrgan.Uses}', Dosage = '${AffectedOrgan.Dosage}' WHERE remedies_id = '${AffectedOrgan.remedies_id}'`, [AffectedOrgan]);
};

const deleteRemedy = async (ID) => {
  return await query(`DELETE from remedies WHERE remedies_id = ?`, [ID]);
};


export default { findOrgan, addRemedy, updateRemedy, deleteRemedy, findRemedy };