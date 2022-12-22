import { Link } from "react-router-dom";
import brain from "../images/brain.png";
import heart from "../images/heart.png";
import liver from "../images/liver.png";
import lungs from "../images/lungs.png";
import lymphaticSystem from "../images/lymphatic-system.png";
import kidneys from "../images/kidneys.png";
import giTract from "../images/GI_Tract.png";

//Main links to each organ component that renders on the Homepage
export default function Organs() {
  return (
    <div className="d-flex justify-content-around align-items-center wrap dw-75 center font-weight-800">
      <div className="flex-child">
        <p>Brain</p>
        <Link to="/brain">
          <img alt="Brain" src={brain} />
        </Link>
      </div>
      <div className="flex-child">
        <p>Heart</p>
        <Link to="/heart">
          <img alt="Heart" src={heart} />
        </Link>
      </div>
      <div className="flex-child">
        <p>Liver</p>
        <Link to="/liver">
          <img alt="Liver" src={liver} />
        </Link>
      </div>
      <div className="flex-child">
        <p>Kidneys</p>
        <Link to="/kidneys">
          <img alt="Kidneys" src={kidneys} />
        </Link>
      </div>
      <div className="flex-child">
        <p>Lungs</p>
        <Link to="/lungs">
          <img alt="Lungs" src={lungs} />
        </Link>
      </div>
      <div className="flex-child">
        <p>Intestines</p>
        <Link to="/intestines">
          <img alt="GI tract" src={giTract} />
        </Link>
      </div>
      <div className="flex-child">
        <p>Lymphnodes</p>
        <Link to="/lymphnodes">
          <img alt="Lymphatic System" src={lymphaticSystem} />
        </Link>
      </div>
    </div>
  );
}
