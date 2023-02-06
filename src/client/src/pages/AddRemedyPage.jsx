import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddRemedyPage(props) {
  //These states store the data that will be posted to the homeopathicDB remedies table
  //Posts to remedies.Name
  const [remedyName, setRemedyName] = useState("");
  //Posts to remedies.Uses
  const [remedyUses, setRemedyUses] = useState("");
  //Posts to remedies.AffectedOrgans
  const [affectedOrgans, setAffectedOrgans] = useState("");
  //Posts to remedies.Dosage
  const [dosage, setDosage] = useState("");
  //Posts to remedies.Description
  const [description, setDescription] = useState("");

  //Object container to formats the POST data for easy readability and testability that it's receiving the correct variables
  const postData = {
    Name: remedyName,
    AffectedOrgans: affectedOrgans,
    Description: description,
    Dosage: dosage,
    Uses: remedyUses,
  };

  //Disabling the URL query that is built into forms so we can perform a custom POST event using REST API
  function onSubmit(event) {
    event.preventDefault();
  }

  //Posts data onClick from .createBtn button
  //input: postData (Object)
  //output: none
  async function addRemedy() {
    try {
      console.log(postData);
      await fetch("http://localhost:8080/add-remedy", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(postData),
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
    <br />
    <div className="modal d-flex justify-content-center wrap align-items-center">
      <h2 className="add-remedy-header">Add a Remedy</h2>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label htmlFor="remedyName">Remedy Name:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Yarrow"
              name="remedyName"
              id="remedyName"
              value={remedyName}
              onChange={(event) => {
                setRemedyName(event.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="remedyUses">Use Cases:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Fever"
              name="remedyUses"
              id="remedyUses"
              value={remedyUses}
              onChange={(event) => {
                setRemedyUses(event.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="affectedOrgans">Affected Organs:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="lymphatic system, brain, etc..."
              name="affectedOrgans"
              id="affectedOrgans"
              value={affectedOrgans}
              onChange={(event) => {
                setAffectedOrgans(event.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="dosage">Dosage:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="i.e. 0.5mg/lb"
              name="dosage"
              id="dosage"
              value={dosage}
              onChange={(event) => {
                setDosage(event.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="description">Description</label>
          </div>
          <div>
            <textarea
              type="text"
              placeholder="write a description here"
              name="description"
              id="description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <Link to="/">
            <button
              className="createBtn"
              type="button"
              onClick={() => {
                addRemedy();
              }}
            >
              Create Remedy
            </button>
          </Link>
        </div>
      </form>
    </div>
    </>
  );
}
