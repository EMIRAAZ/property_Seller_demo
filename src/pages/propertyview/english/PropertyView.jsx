import "./propertyview.scss";
import Header from "../../../components/header/english/Header";
import Footer from "../../../components/footer/english/Footer";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BasicButton from "../../../components/button/BasicButton";

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
            <ImageSlider images={props.property.images} />
          ) : (
            <></>
          )}
        </div>
        <div className="main-details-container">
          <MainDetails />
        </div>
      </div>
      <div className="full-details-main-div">
        <FullDetails />
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

const ImageSlider = ({ images }) => {
  let img1 = images && images[0] ? images[0] : "";
  let img2 = images && images[1] ? images[1] : "";
  let img3 = images && images[2] ? images[2] : "";
  return (
    <div
      className="image-container"
      style={{
        backgroundImage: `url(${img2})`,
      }}
    >
      <div className="div-1"></div>
      <div className="div-2"></div>
    </div>
  );
};
const MainDetails = () => {
  return (
    <div className="details-container">
      <h1 className="heading">Bravoo Apollo Apartment</h1>
      <div className="button-div">
        <BasicButton customClass="btn-1"> Book a Viewing</BasicButton>
        <BasicButton customClass="btn-2"> Photos</BasicButton>
        <BasicButton customClass="btn-2"> Videos</BasicButton>
        <BasicButton customClass="btn-2"> Map</BasicButton>
      </div>
      <div>
        <h1 className="reference">
          Reference: <span className="reference-span">BHM-S-55166</span>
        </h1>
        <h1 className="reference">
          Approx size: <span className="reference-span">BHM-S-55166</span>
        </h1>
        <h1 className="reference">
          RERA Permit No: <span className="reference-span">BHM-S-55166</span>
        </h1>
        <BasicButton customClass="btn-3"> Share Property</BasicButton>
      </div>
    </div>
  );
};

const FullDetails = () => {
  return (
    <div className="full-details-container">
      <h1 className="proerty-details-heading">Property Details</h1>
      <p className="property-description ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ipsam
        debitis mollitia rerum in omnis, culpa dignissimos amet ex ullam
        deserunt harum magni aspernatur beatae saepe architecto obcaecati
        laboriosam alias. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Laudantium hic at, facere molestiae, asperiores accusamus quo vel
        officia tempore quae qui sunt iusto eaque fugiat perferendis numquam
        reiciendis, velit illum. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fugit ipsum eligendi minus unde, accusantium nulla
        deserunt, assumenda, libero neque quidem pariatur dicta ratione
        consequatur aliquid explicabo consequuntur consectetur reprehenderit
        temporibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Labore dolor neque facere quam? Sed obcaecati delectus sapiente ipsam
        nemo quaerat consequatur nobis nulla nesciunt similique incidunt
        voluptatibus, tempora aspernatur? Ab! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Numquam iste harum nihil aspernatur
        voluptatem consectetur provident possimus? Deleniti pariatur expedita
        placeat doloremque, possimus sunt ducimus consectetur accusamus vel.
        Ipsa, exercitationem.lorem
      </p>
      <h1 className="proerty-details-heading">Facilities And Amenities.</h1>
    </div>
  );
};

const ContactAgent = ({ property }) => {
  return (
    <div className="contact-agent-container">
      <div className="image-div">
        <img
          src={property && property.images && property.images[0]}
          alt=""
          className="agent-image"
        />
      </div>
      <div className="details-div">
        <h1 className="agent-name">Jordan Miccheal</h1>
        <h1 className="agent-designation">Residantial consultant</h1>
        <h1 className="agent-no">RERA NO:3442</h1>
        <h1 className="agent-no"> Contact No:93939929283</h1>
        <h1 className="reference">
          Reference: <span className="reference-span">BHM-S-55166</span>
        </h1>
        <h1 className="reference">
          price: <span className="reference-span">AED 30384902</span>
        </h1>
        <div className="btn-div">
          <BasicButton customClass="btn-1"> Book a Viewing</BasicButton>
          <BasicButton customClass="btn-2"> Call</BasicButton>
          <BasicButton customClass="btn-3"> Whatsapp</BasicButton>
        </div>
      </div>
    </div>
  );
};
export default PropertyView;
