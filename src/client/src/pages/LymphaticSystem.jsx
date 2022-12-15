import React, { useState, useEffect } from "react";

import LymphnodesImg from "../images/lymphatic-system.png";

import ViewDetails from "./ViewDetails.jsx";
import ModifyRemedyPage from "./ModifyRemedyPage";


export default function Lymphnodes() {
  //the state of the list of remeides for this component
  const [remedies, setRemedies] = useState("");
  //states that control whether the "view" and "modify" modals are visible, triggered by the button "view" and "modify"
  const [openModal, setOpenModal] = useState(false);
  const [openModify, setOpenModify] = useState(false);

  //A state that captures the ID of the current item that should be fetched and rendered to the view or modify modal
  let [queryID, setQueryID] = useState("");

  async function getRemedies() {
    try {
      let res = await fetch("http://localhost:8080/lymphnodes", {
        method: "GET",
      });
      let resJson = await res.json();
      setRemedies(resJson);
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteRemedy(id) {
    try {
      await fetch("http://localhost:8080/delete-remedy", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ id: id }),
      });
      getRemedies();
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getRemedies();
  }, []);


  return (
    <div className="d-flex wrap justify-content-center padding-top-40 page-imgs margin-left-10 align-items-center">
      <div>
        <img alt="Lungs" src={LymphnodesImg} />
      </div>
      <div className="organ-heading">
        <h1>
          <strong>Lymphnodes Related Remedies</strong>
        </h1>
      </div>
      <div>
        <ViewDetails
          open={openModal}
          id={queryID}
          onClose={() => setOpenModal(false)}
        />
        <ModifyRemedyPage
          open={openModify}
          id={queryID}
          onClose={() => setOpenModify(false)}
        />
        <table>
          <tr>
            <th>View</th>
            <th>Name</th>
            <th>Affects</th>
            <th>Dosage</th>
            <th>Use Cases</th>
            <th>Description</th>
            <th>Edit/Delete</th>
          </tr>
          {remedies.length > 0 ? (
            remedies.map((item) => {
              return (
                <tr>
                  <td>
                    <button
                      className="info"
                      value={item.remedies_id}
                      onClick={(e) => {
                        setQueryID(e.target.value)
                        setOpenModal(true);
                      }}
                    >
                      info
                    </button>
                  </td>
                  <td>{item.Name}</td>
                  <td>
                    {item.AffectedOrgans.length > 10
                      ? `${item.AffectedOrgans.slice(0, 10)}...`
                      : `${item.AffectedOrgans}`}
                  </td>
                  <td>{item.Dosage ? `${item.Dosage}` : "1 drop/ 5 lbs"}</td>
                  <td>
                    {item.Uses.length > 10
                      ? `${item.Uses.slice(0, 10)}...`
                      : `${item.Uses}`}
                  </td>
                  <td>
                    {item.Description.length > 10
                      ? `${item.Description.slice(0, 10)}...`
                      : `${item.Description}`}
                  </td>
                  <td>
                    <button
                      className="modify"
                      value={item.remedies_id}
                      onClick={() => {
                        setQueryID(item.remedies_id);
                        setOpenModify(true);
                      }}
                    >
                      ✎
                    </button>
                    <span> </span>
                    <button
                      className="delete"
                      value={item.remedies_id}
                      onClick={() => {
                        deleteRemedy(item.remedies_id);
                      }}
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <p>No entries</p>
          )}
        </table>
      </div>
    </div>
  );
}
