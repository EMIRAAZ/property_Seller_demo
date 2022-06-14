import "./propertyview.scss";
import Header from "../../../components/header/english/Header";
import Footer from "../../../components/footer/english/Footer";
import { useState } from "react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BasicButton from "../../../components/button/BasicButton";
import RightArrow from "../../../components/svg/rightarrow";
import RarrowIcon from "../../../components/svg/rarrow";
import LarrowIcon from "../../../components/svg/larrow";
import ShareIcon from "../../../components/svg/share";
import Bed from "../../../components/svg/bed";
import Bath from "../../../components/svg/bath";
import Living from "../../../components/svg/living";
import Area from "../../../components/svg/area";

const PropertyView = (props) => {
  let location = useLocation();

  const { property } = props;

  useEffect(() => {
    props.getPropertyByID(getID());
  }, []);

  const getID = () => location.pathname.split("/").pop();
  console.log(props);
  return (
    <div className="single-property-view">
      <Header />
      <div className="main-container">
        <div className="image-slider-container">
          {props.property.images ? (
            <ImageSlider imgArray={props.property.images} />
          ) : (
            // <VideoView />
            <></>
          )}
        </div>
        <div className="main-details-container">
          <MainDetails property={property} />
        </div>
      </div>
      <div className="full-details-main-div">
        <FullDetails property={property} />
      </div>
      <div className="contact-agent-div">
        <h1 className="proerty-details-heading">
          Interested? Contact the agent.
        </h1>
        <ContactAgent property={property} />
      </div>
      <div className="similar-properties">
        <h1 className="proerty-details-heading">Similar Properties.</h1>
      </div>

      <Footer />
    </div>
  );
};

const VideoView = () => {
  return (
    <iframe
      width="100%"
      height="400px"
      src="https://www.youtube.com/embed/tgbNymZ7vqY"
    ></iframe>
  );
};

const ImageSlider = ({ imgArray = ["/assets/image/noimage.jpg"] }) => {
  const [index, setIndex] = useState(0);

  const onsetIndex = (add) => {
    if (index === 0 && add === -1) {
      setIndex(imgArray.length - 1);
    } else if (index === imgArray.length - 1 && add === 1) {
      setIndex(0);
    } else setIndex(index + add);
  };

  return (
    <div
      className="image-container"
      style={{
        backgroundImage: `url(${imgArray[index]})`,
      }}
    >
      <div className="div-1">
        <LarrowIcon className="rArrow" onClick={() => onsetIndex(-1)} />
      </div>
      <div className="div-2">
        <RarrowIcon className="rArrow" onClick={() => onsetIndex(1)} />
      </div>
    </div>
  );
};
const MainDetails = ({ property }) => {
  const renderUnit = (unit) => {
    if (unit && unit.length < 10) return unit;
    else if (!unit) return "";
    else return unit.substring(0, 7) + "...";
  };
  return (
    <div className="details-container">
      <h1 className="heading">{property.mainTitle}</h1>
      <div className="spec">
        <div className="spec-wrap">
          <Bed
            className="property-bed"
            width="15"
            height="14"
            viewBox="0 0 17 1"
          />
          <p>{property.noOfBedroom} Bed</p>
        </div>
        <div class="vl"></div>
        <div className="spec-wrap">
          <Bath
            className="property-bath"
            width="15"
            height="14"
            viewBox="0 0 17 17"
          />
          <p>{property.noOfBathroom} Bath</p>
        </div>
        <div class="vl"></div>
        <div className="spec-wrap">
          <Living
            className="property-living"
            width="15"
            height="14"
            viewBox="0 0 17 14"
          />
          <p>8 Rooms</p>
        </div>
        <div class="vl"></div>
        <div className="spec-wrap">
          <Area
            className="property-area"
            width="15"
            height="14"
            viewBox="0 0 17 16"
          />
          <p>
            {property.propertySize} {renderUnit(property.propertySizeUnit)}
          </p>
        </div>
      </div>
      <div className="button-div">
        <BasicButton customClass="btn-1"> Book a Viewing</BasicButton>
        <BasicButton customClass="btn-2"> Photos</BasicButton>
        <BasicButton customClass="btn-2"> Videos</BasicButton>
        <BasicButton customClass="btn-2"> Map</BasicButton>
      </div>
      <div>
        <h1 className="reference">
          Reference:
          <span className="reference-span">{property.referenceNo}</span>
        </h1>
        <h1 className="reference">
          Approx size:
          <span className="reference-span">{property.propertySize} </span>
        </h1>
        <h1 className="reference">
          RERA Permit No: <span className="reference-span">BHM-S-55166</span>
        </h1>
        <BasicButton customClass="btn-3">
          {/* <ShareIcon />  */}
          Share Property
        </BasicButton>
      </div>
    </div>
  );
};

const FullDetails = ({ property }) => {
  return (
    <>
      <div className="full-details-container">
        <h1 className="proerty-details-heading">Property Details</h1>
        <p className="property-description ">{property.description}</p>
      </div>
      <div className="ameneties-container">
        <h1 className="proerty-details-heading">Facilities And Amenities.</h1>

        <div className="amenities-list">
          {/* {property.ame} */}
          <div className="amenities">
            <img
              src="/assets/image/bedicon.png"
              className="amenties-icon"
              alt="building"
            />
            <h1 className="ameneties-text"> Furnished</h1>
          </div>
          <div className="amenities">
            <img
              src="/assets/image/bedicon.png"
              className="amenties-icon"
              alt="building"
            />
            <h1 className="ameneties-text">Balcony</h1>
          </div>
          <div className="amenities">
            <img
              src="/assets/image/bedicon.png"
              className="amenties-icon"
              alt="building"
            />
            <h1 className="ameneties-text">Children's Play Area</h1>
          </div>
          <div className="amenities">
            <img
              src="/assets/image/bedicon.png"
              className="amenties-icon"
              alt="building"
            />
            <h1 className="ameneties-text">Shared Gym</h1>
          </div>
          <div className="amenities">
            <img
              src="/assets/image/bedicon.png"
              className="amenties-icon"
              alt="building"
            />
            <h1 className="ameneties-text">Private Garden</h1>
          </div>
          <div className="amenities">
            <img
              src="/assets/image/bedicon.png"
              className="amenties-icon"
              alt="building"
            />
            <h1 className="ameneties-text">Shared Pool</h1>
          </div>
        </div>
      </div>
    </>
  );
};

const ContactAgent = ({ property }) => {
  return (
    <div className="contact-agent-container">
      <div className="image-div">
        <img
          // src={property && property.images && property.images[0]}
          src="/assets/image/agents.jpg"
          alt=""
          className="agent-image"
        />
      </div>
      <div className="details-div">
        <h1 className="agent-name">Jordan Miccheal</h1>
        <h1 className="agent-designation">Residantial consultant</h1>
        <h1 className="agent-no">RERA NO:3442</h1>
        <h1 className="agent-no"> Contact No: +971521278701</h1>
        <h1 className="reference">
          Reference: <span className="reference-span">BHM-S-55166</span>
        </h1>
        <h1 className="reference">
          price: <span className="reference-span">AED {property.price}</span>
        </h1>
        <div className="btn-div">
          {/* <a href="tel:+971521278701" className="button-a-tag"> */}
          <BasicButton
            customClass="btn-1"
            onClick={() => window.open("tel:+971521278701", "_blank")}
          >
            {/* <a
              style={{ textDecoration: "none", color: "white" }}
              href="tel:+971521278701"
              className="button-a-tag"
            > */}
            Book a Viewing
            {/* </a> */}
          </BasicButton>
          {/* <a href="tel:+971521278701"> */}
          <BasicButton
            onClick={() => window.open("tel:+971521278701", "_blank")}
            customClass="btn-2"
          >
            Call
          </BasicButton>
          {/* </a> */}
          <BasicButton
            onClick={() =>
              window.open(
                "whatsapp://send?abid=+971521278701&text=Hello",
                "_blank"
              )
            }
            customClass="btn-3"
          >
            Whatsapp
          </BasicButton>
        </div>
      </div>
    </div>
  );
};
export default PropertyView;
