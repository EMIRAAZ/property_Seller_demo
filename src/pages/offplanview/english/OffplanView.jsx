import "./Offplanview.scss";

import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ImageFrame from "../imageframe";
import OffplanCard from "../../../components/offpaln/offplanCard/OffplanCard";

const OffplanView = () => {
  return (
    <>
      <div className="offplan-main-container">
        <Header />
        <ImageFrame />
        <div className="offplans-projects">
          <h1 className="Heading">Offplan Projects</h1>
          <h2 className="sub-heading">358 properties found</h2>
          <div className="offplan-card-div">
            <div className="offplan-card-size-div">
              <OffplanCard />
            </div>
            <div className="offplan-card-size-div">
              <OffplanCard />
            </div>
            <div className="offplan-card-size-div">
              <OffplanCard />
            </div>
            <div className="offplan-card-size-div">
              <OffplanCard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

////////////////////////////////

const Wallpaper = () => {
  return (
    <div className="wallpaper-div">
      {/* <img
        src="/assets/image/offplan.png"
        className="offplan-wallpaper"
        alt="building"
      /> */}
    </div>
  );
};
////////////////////

export default OffplanView;
