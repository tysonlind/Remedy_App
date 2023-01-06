import { useEffect } from "react";
import { useState } from "react";

export default function ModifyRemedyPage({ open, onClose, id }) {
  const [remedy, setRemedy] = useState("");
  const [remedyName, setRemedyName] = useState("");
  const [remedyUses, setRemedyUses] = useState("");
  const [affectedOrgans, setAffectedOrgans] = useState("");
  const [dosage, setDosage] = useState("");
  const [description, setDescription] = useState("");

  const updateData = {
    Name: remedyName,
    AffectedOrgans: affectedOrgans,
    Description: description,
    Dosage: dosage,
    Uses: remedyUses,
    remedies_id: id,
  };

  async function getRemedies(id) {
    try {
      let res = await fetch(`http://localhost:8080/remedy/${id}`, {
        method: "GET",
      });
      let resJson = await res.json();
      setRemedy(resJson);
      setRemedyName(resJson[0].Name);
      setRemedyUses(resJson[0].Uses);
      setAffectedOrgans(resJson[0].AffectedOrgans);
      setDosage(resJson[0].Dosage);
      setDescription(resJson[0].Description);
    } catch (e) {
      console.error(e);
    }
  }

  async function updateRemedy(updateData) {
    try {
      console.log(updateData);
      await fetch("http://localhost:8080/update-remedy", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(updateData),
      });
    } catch (e) {
      console.error(e);
    }
  }

  function onSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    getRemedies(id);
  }, [id]);

  if (!open) {
    return null;
  } else {
    return (
      <div className="overlay">
        <div className="modify-remedy d-flex justify-content-center wrap align-items-center">
          {remedy.map((item) => {
            return (
              <>
                <form onSubmit={onSubmit}>
                  <div className="pad-10 top-20-down">
                    <div>
                      <p>
                        <strong>Remedy Name:</strong>
                      </p>
                    </div>
                    <div>
                      <p>{item.Name}</p>
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
                          console.log(updateData);
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
                    <a href="/">
                      <button
                        type="button"
                        className="modifyBtn"
                        onClick={() => {
                          updateRemedy(updateData);
                          onClose();
                        }}
                      >
                        Save Changes
                      </button>
                    </a>
                  </div>
                </form>
                <div className="top-right">
                  <button onClick={onClose}>X</button>
                </div>        
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
