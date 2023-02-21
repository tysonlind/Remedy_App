import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import useLocalStorage from "use-local-storage";
import themeChange from "./images/toggle-icon.png";
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
  Login,
  LoginButton,
  LogoutButton,
  Profile,
  Approvals,
} from "./pages/index.js";
import { useAuth0 } from "@auth0/auth0-react";
import IndividualRemedy from "./pages/InidividualRemedy.jsx";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const { isAuthenticated } = useAuth0();

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  //Application entry point
  return (
    <div className="app" data-theme={theme}>
      <BrowserRouter>
        <header>
          <div id="header-container" className="">
            <div id="toggle">
              <img
                src={themeChange}
                alt="theme change button"
                className="toggle-button"
                onClick={switchTheme}
              />
            </div>
            <div id="logo">
              <Link to="/">
                <h1>Remedy</h1>
              </Link>
            </div>
            <div id="login">
              <p className="login">
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
              </p>
            </div>
          </div>
        </header>
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
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/remedy/:id" element={<IndividualRemedy />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
