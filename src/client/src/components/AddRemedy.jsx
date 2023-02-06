import addBtn from "../images/add-button.png";
import { Link } from "react-router-dom";

//Add Remedy Button Component
export default function AddRemedyButton() {
  return (
    <div className="add-remedy d-flex align-items-center justify-content-center text-align-center vh10">
      <div className="green">
        <h2>Add a remedy</h2>
      </div>
      <div className="">
        <Link to="/add-remedy">
          <img alt="Add New Remedy Button" src={addBtn} className="addBtn" />
        </Link>
      </div>
    </div>
  );
}
