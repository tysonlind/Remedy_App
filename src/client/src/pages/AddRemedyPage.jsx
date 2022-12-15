import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function AddRemedyPage(props) {
  const [remedyName, setRemedyName] = useState("");
  const [remedyUses, setRemedyUses] = useState("");
  const [affectedOrgans, setAffectedOrgans] = useState("");
  const [dosage, setDosage] = useState("");
  const [description, setDescription] = useState("");

  const postData = {
    "Name": remedyName,
    "AffectedOrgans": affectedOrgans,
    "Description": description,
    "Dosage": dosage,
    "Uses": remedyUses,
  };

  function onSubmit(event){
event.preventDefault();
  };

  async function addRemedy(){
    try{
      console.log(postData);
        await fetch('http://localhost:8080/add-remedy', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          body: JSON.stringify(postData),
        });
    } catch (e){
        console.error(e);
    }
    
    };

  return (
    <div className="modal d-flex justify-content-center wrap align-items-center">
      <h3>Add a Remedy</h3>
        <form onSubmit={onSubmit}>
          <div>
            <div>
            <label htmlFor="remedyName">Remedy Name:</label>
            </div>
            <div>
            <input type="text" placeholder="Yarrow" name="remedyName" id="remedyName" value={remedyName} onChange={(event) => {
              setRemedyName(event.target.value);
            }} />
            </div>
          </div>
          <div>
            <div>
            <label htmlFor="remedyUses">Use Cases:</label>
            </div>
            <div>
            <input type="text" placeholder="Fever"  name="remedyUses" id="remedyUses" value={remedyUses} onChange={(event) => {
              setRemedyUses(event.target.value);
            }} />
            </div>
          </div>
          <div>
            <div>
            <label htmlFor="affectedOrgans">Affected Organs:</label>
            </div>
            <div>
            <input type="text" placeholder="lymphatic system, brain, etc..."  name="affectedOrgans" id="affectedOrgans" value={affectedOrgans} onChange={(event) => {
              setAffectedOrgans(event.target.value);
            }} />
            </div>
          </div>
          <div>
            <div>
            <label htmlFor="dosage">Dosage:</label>
            </div>
            <div>
            <input type="text" placeholder="i.e. 0.5mg/lb"  name="dosage" id="dosage" value={dosage} onChange={(event) => {
              setDosage(event.target.value);
            }} />
            </div>
          </div>
          <div>
            <div>
            <label htmlFor="description">Description</label>
            </div>
            <div>
            <textarea type="text" placeholder="write a description here"  name="description" id="description" value={description} onChange={(event) => {
              setDescription(event.target.value);
            }} />
            </div>
          </div>
          <div>
            <Link to="/"><button className="createBtn" type="button" onClick={() => {
              addRemedy() }} >
            Create Remedy
            </button>
            </Link>
          </div>
        </form>
    </div>
  );
}
