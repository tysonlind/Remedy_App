import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import moon from "./images/moon.png";
import {
  Brain,
  Heart,
  Liver,
  Lungs,
  Lymphnodes,
  Kidneys,
  Intestines,
  AddRemedyPage,
  Homepage,
} from "./pages/index.js";

function App() {
  //Application entry point
  return (
    <BrowserRouter>
      <div className="header logo text-align-center align-items-center d-flex justify-content-center wrap">
        <div>
          <Link to="/">
            <h1>Remedy</h1>
          </Link>
        </div>
        <div className="toggle">
            <img src={moon} alt="toggle website color theme" className="toggle-button"/>
        </div>
      </div>
      <div className="d-block justify-content-center text-align-center vw100 ff-column-100 align-items-center">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add-remedy" element={<AddRemedyPage />} />
          <Route path="/brain" element={<Brain />} />
          <Route path="/heart" element={<Heart />} />
          <Route path="/liver" element={<Liver />} />
          <Route path="/kidneys" element={<Kidneys />} />
          <Route path="/lungs" element={<Lungs />} />
          <Route path="/intestines" element={<Intestines />} />
          <Route path="/lymphnodes" element={<Lymphnodes />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
