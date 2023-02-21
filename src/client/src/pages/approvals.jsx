import React, { useState, useEffect } from "react";
import ViewApprovalsDetails from "./ViewApprovalsDetails.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import sadPanda from "../images/sadpanda.png";

export default function Approvals() {

  //the state of the list of remeides for this component
  const [approvals, setApprovals] = useState([]);
  //states that control whether the "view" and "modify" modals are visible, triggered by the button "view" and "modify"
  const [openModal, setOpenModal] = useState(false);
  const [openModify, setOpenModify] = useState(false);

  //A state that captures the ID of the current item that should be fetched and rendered to the view or modify modal
  let [queryID, setQueryID] = useState("");

  //only render page if user is authenticated
  const { isAuthenticated, isLoading } = useAuth0();

  let postData = {
    remedies_id: "",
    Name: "",
    AffectedOrgans: "",
    Description: "",
    AddedBy: "admin",
    Dosage: "",
    Uses: "",
    isApproved: "",
  };

  function filterAndSetPostData(id) {
    for (let i = 0; i < approvals.length; i++) {
      if (approvals[i].remedies_id === id) {
        postData = {
          remedies_id: approvals[i].remedies_id,
          Name: approvals[i].Name,
          AffectedOrgans: approvals[i].AffectedOrgans,
          Description: approvals[i].Description,
          AddedBy: "admin",
          Dosage: approvals[i].Dosage,
          Uses: approvals[i].Uses,
          isApproved: 1,
        };
      }
    }
  }

  function filterApprovals(id) {
    let newApprovals = approvals.filter((approval) => {
      return approval.remedies_id !== id;
    });
    setApprovals(newApprovals);
  }

  //queries the database for matching items based on the url parameter
  async function getApprovals(isAuthenticated) {
    if (isAuthenticated) {
      try {
        let res = await fetch("http://localhost:8080/approvals", {
          method: "GET",
        });
        let resJson = await res.json();
        setApprovals(resJson);
      } catch (e) {
        console.error(e);
      }
    }
  }
  async function addRemedy(postData, isAuthenticated) {
    console.log(postData);
    if (isAuthenticated) {
      try {
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
      console.log("remedy added");
    }
  }
  //deletes entries from DB based on the ID
  //input type: Number
  async function deleteApproval(id) {
    try {
      await fetch("http://localhost:8080/delete-approval", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ id: id }),
      });
      getApprovals();
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getApprovals(isAuthenticated);
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <div className="d-flex wrap justify-content-center padding-top-40 page-imgs margin-left-10 align-items-center">
      <div className="organ-heading">
        <h1>
          <strong>Admin Remedy Approvals</strong>
        </h1>
      </div>
      <div>
        <ViewApprovalsDetails
          open={openModal}
          id={queryID}
          onClose={() => setOpenModal(false)}
        />
        <table>
          <tr className="theader-styling">
            <th className="prio-1">Info</th>
            <th className="prio-2">Name</th>
            <th className="prio-3">Affects</th>
            <th className="prio-4">Dosage</th>
            <th className="prio-5">Use Cases</th>
            <th className="prio-6">Description</th>
            <th className="prio-7">Approve?</th>
          </tr>
          {approvals.length > 0 ? (
            approvals.map((item) => {
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
                  <td className="prio-4">
                    {item.Dosage ? `${item.Dosage}` : "1 drop/ 5 lbs"}
                  </td>
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
                      className="approve-remedy"
                      value={item.remedies_id}
                      onClick={(event) => {
                        filterAndSetPostData(event.target.value);
                        addRemedy(postData, isAuthenticated);
                        deleteApproval(event.target.value);
                        filterApprovals(event.target.value);
                      }}
                    >
                      &#x2714;
                    </button>
                    <span> </span>
                    <button
                      className="reject-remedy"
                      value={item.remedies_id}
                      onClick={(event) => {
                        deleteApproval(event.target.value);
                        filterApprovals(event.target.value);
                      }}
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <p className="text-align-center">
              <i className="fa-solid fa-box-open"></i>No entries
            </p>
          )}
        </table>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center not-logged-in">
      <div>
        <img src={sadPanda} alt="you are not logged in" className="sad-panda" />
      </div>
      <div>
        <p>
          Oh no! You are not currently signed in... Please sign in to view this
          page
        </p>
      </div>
    </div>
  );
}
