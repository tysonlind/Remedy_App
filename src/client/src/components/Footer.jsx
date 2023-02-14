import darkMode from "../images/toggle-icon.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Footer() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="text-align-center padding-none margin-none" id="footer">
      <Link to="/"><i className="fa-solid fa-house prio-10"></i></Link>
      {isAuthenticated ? (<Link to="/add-remedy"><i className="fa-solid fa-plus prio-10"></i></Link>) : ""}
    </div>
  );
}
