import React, { useState, useEffect } from "react";

import LungsImg from "../images/lungs.png";

import ViewDetails from "./ViewDetails.jsx";
import ModifyRemedyPage from "./ModifyRemedyPage";
import { useAuth0 } from "@auth0/auth0-react";
import sadPanda from "../images/sadpanda.png";

export default function Lungs() {
  //import isAuthenticated property from useAuth0 hook
  const { isAuthenticated, isLoading } = useAuth0();
  //the state of the list of remeides for this component
  const [remedies, setRemedies] = useState("");
  //states that control whether the "view" and "modify" modals are visible, triggered by the button "view" and "modify"
  const [openModal, setOpenModal] = useState(false);
  const [openModify, setOpenModify] = useState(false);

  //A state that captures the ID of the current item that should be fetched and rendered to the view or modify modal
  let [queryID, setQueryID] = useState("");

  async function getRemedies(isAuthenticated) {
    if (isAuthenticated){
      try {
        let res = await fetch("http://localhost:8080/lungs", {
          method: "GET",
        });
        let resJson = await res.json();
        setRemedies(resJson);
      } catch (e) {
        console.error(e);
      }
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
  //initial load of getRemedies when page renders
  //being used similar to ComponentDidMount()
  useEffect(() => {
    getRemedies(isAuthenticated);
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated ? (
    <div className="d-flex wrap justify-content-center padding-top-40 page-imgs margin-left-10 align-items-center">
      <div>
        <img alt="Lungs"  className="category-image" src={LungsImg} />
      </div>
      <div className="organ-heading">
        <h1>
          <strong>Lungs Related Remedies</strong>
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
          <tr className="theader-styling">
            <th className="prio-1">Info</th>
            <th className="prio-2">Name</th>
            <th className="prio-3">Affects</th>
            <th className="prio-4">Dosage</th>
            <th className="prio-5">Use Cases</th>
            <th className="prio-6">Description</th>
            <th className="prio-7">Edit/Delete</th>
          </tr>
          {remedies.length > 0 ? (
            remedies.map((item) => {
              return (
                <tr className="query-styling">
                  <td className="prio-1">
                    <button
                      className="info"
                      value={item.remedies_id}
                      onClick={(e) => {
                        setQueryID(e.target.value);
                        setOpenModal(true);
                      }}
                    >
                      view
                    </button>
                  </td>
                  <td className="prio-2">{item.Name}</td>
                  <td className="prio-3">
                    {item.AffectedOrgans.length > 10
                      ? `${item.AffectedOrgans.slice(0, 10)}...`
                      : `${item.AffectedOrgans}`}
                  </td>
                  <td className="prio-4">{item.Dosage ? `${item.Dosage}` : "1 drop/ 5 lbs"}</td>
                  <td className="prio-5">
                    {item.Uses.length > 10
                      ? `${item.Uses.slice(0, 10)}...`
                      : `${item.Uses}`}
                  </td>
                  <td className="prio-6">
                    {item.Description.length > 10
                      ? `${item.Description.slice(0, 10)}...`
                      : `${item.Description}`}
                  </td>
                  <td className="prio-7">
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
            <p className="text-align-center"><i className="fa-solid fa-box-open"></i>No entries</p>
          )}
        </table>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center not-logged-in"><div><img src={sadPanda} alt="you are not logged in" className="sad-panda" /></div><div><p>Oh no! You are not currently signed in... Please sign in to view this page</p></div></div>
  ));
}
