import Organs from "../components/organs.jsx";
import AddRemedyButton from "../components/AddRemedy.jsx";



function Homepage() {  
    return (
      
      <div className="">
            <div>
              <h2>
                <span className="green">
                  Share alternative medicine with{" "}
                  <span className="blue font-weight-400">friends</span> and{" "}
                  <span className="red font-weight-400">family</span>
                </span>
              </h2>
              
            </div>
          <Organs />
          <br />
          <AddRemedyButton />
        </div>
    
    );
  }
  
  export default Homepage;