import "./footer.scss";
import RightArrow from "../../svg/rightarrow";
import React from "react";
import BasicButton from "../../button/BasicButton";
function Footer() {
  return (
    <div className="footer-english">
      <div className="mini-container">
        <p className="header-text">
          Lets find you a <span className="text-span">Home</span>
        </p>
        <BasicButton customClass="list-your-property-button">
          List Your Property <RightArrow customClass="right-arrow" />
        </BasicButton>
      </div>
    </div>
  );
}

export default Footer;
