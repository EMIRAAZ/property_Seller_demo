import "./newhome.scss";
import React from "react";
import Header from "../../header";
import HomeFormCard from "../../../pages/home/homeformcard";

function NewHome() {
  return (
    <div className="new-home">
      <Header />

      <div className="main-container">
        <h1 className="heading">
          Lets Find Your <span>Properties in Dubai</span>
        </h1>
        {/* <HomeFormCard
          onInputChange={() => {}}
          onSearchLocation={() => {}}
          homeSearch={{}}
          onSearch={() => {}}
        /> */}
      </div>
    </div>
  );
}

export default NewHome;
