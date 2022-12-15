import { useEffect } from "react";
import { useState } from "react";

export default function ViewDetails({ open, onClose, id }) {
  const [remedy, setRemedy] = useState([]);

  async function getRemedies(id) {
    try {
      let res = await fetch(`http://localhost:8080/remedy/${id}`, {
        method: "GET",
      });
      let resJson = await res.json();
      setRemedy(resJson);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => { 
      getRemedies(id);
  }, [id]);

  if (!open) {
    return null;
  } else {
    return (
      <div className="overlay">
        {remedy.length > 0 ? (
          remedy.map((item) => {
            return (
                <div className="view-details d-flex justify-content-center wrap align-items-center">
          <div className="pad-10">
            <div>
            <p><strong>Remedy Name:</strong></p>
            </div>
            <div>
            <p>{item.Name}</p>
            </div>
          </div>
          <div className="pad-10">
            <div>
            <p><strong>Use Cases:</strong></p>
            </div>
            <div>
            <p>{item.Uses}</p>
            </div>
          </div>
          <div className="pad-10">
            <div>
            <p><strong>Affected Organs:</strong></p>
            </div>
            <div>
            <p>{item.AffectedOrgans}</p>
            </div>
          </div>
          <div className="pad-10">
            <div>
            <p><strong>Dosage:</strong></p>
            </div>
            <div>
            <p>{item.Dosage}</p>
            </div>
          </div>
          <div className="pad-10">
            <div>
            <p><strong>Description</strong></p>
            </div>
            <div>
              <p>{item.Description}</p>
            </div>
          </div>
          <div className="top-right">
            <button onClick={onClose}>X</button>
          </div>
          <div className="top-center">
            <h1>Remedy</h1>
          </div>
        </div>
              );
            })
          ) : (
            <p>API Error: Data not received</p>
          )}
          
      </div>
    );
}
}

/*
    <div className="pad-10">
            <div>
            <p><strong>Remedy Name:</strong></p>
            </div>
            <div>
            <p>{remedyName}</p>
            </div>
          </div>
          <div className="pad-10">
            <div>
            <p><strong>Use Cases:</strong></p>
            </div>
            <div>
            <p>{remedyUses}</p>
            </div>
          </div>
          <div className="pad-10">
            <div>
            <p><strong>Affected Organs:</strong></p>
            </div>
            <div>
            <p>{affectedOrgans}</p>
            </div>
          </div>
          <div className="pad-10">
            <div>
            <p><strong>Dosage:</strong></p>
            </div>
            <div>
            <p>{dosage}</p>
            </div>
          </div>
          <div className="pad-10">
            <div>
            <p><strong>Description</strong></p>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </div>
          */
