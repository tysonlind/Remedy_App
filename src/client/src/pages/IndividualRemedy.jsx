import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


export default function IndividualRemedy() {
let { id } = useParams();

const [remedy, setRemedy] = useState([]);

//gets remedy by ID, value is populated from a button that is mapped with the ID and passes it to getRemedies when clicked
  //gets remedy by ID, value is populated from a button that is mapped with the ID and passes it to getRemedies when clicked
  async function getRemedies(id) {
    try {
      let res = await fetch(`http://localhost:8080/remedy/${id}`, {
        method: "GET",
      });
      let resJson = await res.json();
      setRemedy(resJson);
    } catch (e) {
      console.error(e);
    }
  }
//useEffect allows getRemedies to perform a new fetch when ID is updated, ensuring that the state of ID is current at the time of query
  useEffect(() => {
    getRemedies(id);
  }, [id]);

  return (
    <div className="remedy-layout">
      {remedy.length > 0 ? (
            remedy.map((item) => {
              return (
      <>
      <div className="remedy-image">
        <div className="likes">{item.productRating}</div>
      </div>
      <div className="price">{item.price}</div>
      <div className="buy-options">
        <button className="add-to-cart">

        </button>
        <button className="buy-now">

        </button>
      </div>
      <div className="details">
        <div className="name"><h3>{item.Name}</h3></div>
        <div className="affected-organs"><p>Affected Organs: <br />{item.AffectedOrgans}</p></div>
        <div className="uses"><p>Uses: <br />{item.Uses}</p></div>
        <div className="dosage"><p>Dosage: <br />{item.Dosage}</p></div>
        <div className="description"><p>Description: <br />{item.Description}</p></div>
      </div>
      </> )})) : (
        <p className="text-align-center"><i className="fa-solid fa-box-open"></i>Could not fetch API data</p>
      )}
    </div>
  );
  
}
