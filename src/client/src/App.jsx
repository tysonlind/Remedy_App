//uncomment the line below to test the API connection
// import TestingState from "./components/Testing.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import {Brain, Heart, Liver, Lungs, Lymphnodes, Kidneys, Intestines, AddRemedyPage, Homepage} from "./pages/index.js";
import leaf from "./images/leaf.png";

function App() {
  //test API connection
 // let [testState, setTestState] = useState(null);

  // WILL ADD THIS FUNCTIONALITY LATER to the H2 element in this component after "you can"
  //Set the changing text for the app's front page
  /* let [changingText1, setChangingText1] = useState("share remedies");
  //Array of the items that changingtext can be set to
  let changingText = ["share remedies", "learn about Homeopathics", "find alternative medical solutions"]; */

 /* useEffect(() => {
    fetch("http://localhost:8080/api/test")
      .then((res) => res.text())
      .then((msg) => setTestState(msg))
      .catch((err) => {
        console.error(err);
        setTestState("Could not connect to test api endpoint :(");
      });
  }, [testState]); */

  // Insert <TestingState testState={testState} /> somewhere into the return to test that the API is working

  return (
    <BrowserRouter>
      <div className="header logo text-align-center align-items-center d-flex justify-content-center wrap">
            
              <div>
              <Link to="/"> 
              <h1>
              Remedy
            </h1>
            </Link>
            </div>
            <div className="logo-img">
            <img alt="logo leaf" src={leaf} />
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
