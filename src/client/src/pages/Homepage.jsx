import Organs from "../components/organs.jsx";
import AddRemedyButton from "../components/AddRemedy.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import malemodel from "../images/malemodel.png";
import femalemodel from "../images/femalemodel.png";
import childboy from "../images/childboy.png";
import childgirl from "../images/childgirl.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const { isAuthenticated } = useAuth0();
  const [imgSrc, setImgSrc] = useState(malemodel);

  return (
    <div className="">
      <div>
        <h2>
          <span className="green">
            Share alternative medicine solutions with{" "}
            <span className="blue font-weight-400">friends</span> and{" "}
            <span className="red font-weight-400">family!</span>
          </span>    
        </h2>
        <h3>
        <span className="font-weight-400">Click where you're experiencing symptoms:</span>
        </h3>
      </div>
      <div className="model-types">
        <p className="small-text">Select the category that best describes your biology:</p>
        <select 
        name="model" 
        id="model"
        value={imgSrc}
        onChange={(event) => {
          setImgSrc(event.target.value);
        }}>
          <option value={malemodel}>Male Adult</option>
          <option value={femalemodel}>Female Adult</option>
          <option value={childboy}>Male Child</option>
          <option value={childgirl}>Female Child</option>
        </select>
      </div>
      <div>
      <img src={imgSrc} alt="anatomical models" id="models" />
      {/* <Link to="/"><button className="model-button head"></button></Link>
      <Link to="/"><button className="model-button lymphnode-1"></button></Link>
      <Link to="/"><button className="model-button lymphnode-2"></button></Link>
      <Link to="/"><button className="model-button lymphnode-3"></button></Link>
      <Link to="/"><button className="model-button chest"></button></Link>
      <Link to="/"><button className="model-button abdomen"></button></Link>
      <Link to="/"><button className="model-button extremity-1"></button></Link>
      <Link to="/"><button className="model-button extremity-2"></button></Link>
      <Link to="/"><button className="model-button extremity-3"></button></Link>
      <Link to="/"><button className="model-button extremity-4"></button></Link>
      <Link to="/"><button className="model-button legs"></button></Link> */}
      </div>
      <br />
      <h3>
        <span className="font-weight-400">Or the organ where you think the problem might be:</span>
        </h3>
      <Organs />
      
      <br />
      {isAuthenticated ? <div className="logged-in-buttons"><AddRemedyButton /><Link to="/approvals"><button className="test-approvals">test approvals</button></Link></div> : null}
      
    </div>
  );
}

export default Homepage;
