import "./propertyview.scss";
import Header from "../../../components/header/english/Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PropertyView = (props) => {
  let location = useLocation();

  const { property } = props;

  useEffect(() => {
    props.getPropertyByID(getID());
  }, []);

  const getID = () => location.pathname.split("/").pop();
  return (
    <div className="single-property-view">
      <Header />
      <div className="main-container">
        <div className="image-slider-container">
          <ImageSlider />
        </div>
        <div className="main-details-container">hello</div>
      </div>
      <div>{property.images[0]}</div>
    </div>
  );
};

const ImageSlider = () => {
  return (
    <div className="image-container">
      <div className="div-1"></div>
      <div className="div-2"></div>
    </div>
  );
};

export default PropertyView;
