import './offplan.scss';
import React from 'react';

function OffplanCard(props) {
  return (
    <div className="image-container">
      <img src={props.images[0]} className="offplan-card" alt="building" />
      <div className="details-div">
        <h1 className="heading">{props.title}</h1>
        <h1 className="bedrooms">3&4 Bedrooms</h1>
        <h1 className="price">Starting from AED 3.6 Million </h1>
        <div className="logo-div">
          <h1 className="description">{props.description}</h1>
          <img
            src="/assets/image/emaar-logo.png"
            className="offplan-logo"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
export default OffplanCard;
