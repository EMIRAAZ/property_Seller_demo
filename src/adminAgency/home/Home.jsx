import React from "react";
import "./home.scss";
import BasicInput from "../../components/input/BasicInput";
import Search from "../../components/svg/search";
import Navbar from "./navbar/Navbar";
import AddAgent from "./addAgent/AddAgent";
import AddItem from "./addItem/AddItem";
import PropertyList from "./propertyList/PropertyList";
function Home() {
  return (
    <div className="admin-agency-home">
      <div className="side-nav-div">Navbar</div>
      <div className="main-div">
        <Navbar />

        <div className="add-div">
          <AddAgent />
          <AddItem />
          <PropertyList />
        </div>
      </div>
    </div>
  );
}

export default Home;
