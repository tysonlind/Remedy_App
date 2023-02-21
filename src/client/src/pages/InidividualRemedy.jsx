import React from "react";

export default function IndividualRemedy() {
  return (
    <div className="remedy-layout">
      <div className="remedy-image">
        <div className="likes"></div>
      </div>
      <div className="price"></div>
      <div className="buy-options"></div>
      <div className="details">
        <div className="name"></div>
        <div className="affected-organs"></div>
        <div className="uses"></div>
        <div className="dosage"></div>
        <div className="description"></div>
      </div>
    </div>
  );
}
