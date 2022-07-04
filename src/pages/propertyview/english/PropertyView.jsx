import './propertyview.scss';
import Header from '../../../components/header/english/Header';
import Footer from '../../../components/footer/english';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BasicButton from '../../../components/button/BasicButton';
import RarrowIcon from '../../../components/svg/rarrow';
import LarrowIcon from '../../../components/svg/larrow';
import Bed from '../../../components/svg/bed';
import Bath from '../../../components/svg/bath';
import Living from '../../../components/svg/living';
import Area from '../../../components/svg/area';

const PropertyView = props => {
  let location = useLocation();

  const { property } = props;

  useEffect(() => {
    props.getPropertyByID(getID());
  }, []);

  const getID = () => location.pathname.split('/').pop();
  const [content, setContent] = useState(true);
  return (
    <div className="single-property-view">
      <Header />
      <div className="main-container">
        <div className="image-slider-container">
          {props.property.images && content ? (
            <ImageSlider imgArray={props.property.images} />
          ) : // <VideoView />
          props.property.VideoView ? (
            <VideoView url={props.property.VideoView} />
          ) : (
            // <VideoView />
            <>
              <VideoView />
            </>
          )}
        </div>
        <div className="main-details-container">
          <MainDetails setContent={setContent} property={property} />
        </div>
      </div>
      <div className="full-details-main-div">
        <FullDetails property={property} />
      </div>
      {property && property.agentId && (
        <div className="contact-agent-div">
          <h1 className="proerty-details-heading">
            Interested? Contact the agent.
          </h1>
          <ContactAgent property={property} />
        </div>
      )}
      <div className="similar-properties">
        <h1 className="proerty-details-heading">Similar Properties.</h1>
      </div>

      <Footer />
    </div>
  );
};

const VideoView = ({ url = 'https://www.youtube.com/embed/05DqIGS_koU' }) => {
  return (
    <iframe width="100%" height="400px" allow=" autoplay;" src={url}></iframe>
  );
};

const ImageSlider = ({ imgArray = ['/assets/image/noimage.jpg'] }) => {
  const [index, setIndex] = useState(0);

  const onsetIndex = add => {
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
const MainDetails = ({ property, setContent }) => {
  const renderUnit = unit => {
    if (unit && unit.length < 10) return unit;
    else if (!unit) return '';
    else return unit.substring(0, 7) + '...';
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
        <BasicButton customClass="btn-2" onClick={() => setContent(true)}>
          Photos
        </BasicButton>
        <BasicButton customClass="btn-2" onClick={() => setContent(false)}>
          Videos
        </BasicButton>
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
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '3px' }}
          >
            <path
              d="M9.38312 10.3426C8.93978 10.3426 8.54312 10.5426 8.23978 10.856L4.08062 8.0887C4.10978 7.93533 4.13312 7.78196 4.13312 7.62192C4.13312 7.46188 4.10978 7.30851 4.08062 7.15514L8.19312 4.41446C8.50812 4.74788 8.92228 4.9546 9.38312 4.9546C10.3515 4.9546 11.1331 4.06104 11.1331 2.9541C11.1331 1.84717 10.3515 0.953613 9.38312 0.953613C8.41478 0.953613 7.63312 1.84717 7.63312 2.9541C7.63312 3.11414 7.65645 3.26751 7.68562 3.42089L3.57312 6.16156C3.25812 5.82814 2.84395 5.62143 2.38312 5.62143C1.41478 5.62143 0.633118 6.51498 0.633118 7.62192C0.633118 8.72885 1.41478 9.62241 2.38312 9.62241C2.84395 9.62241 3.25812 9.41569 3.57312 9.08227L7.72645 11.8563C7.69728 11.9963 7.67978 12.143 7.67978 12.2897C7.67978 13.3633 8.44395 14.2369 9.38312 14.2369C10.3223 14.2369 11.0865 13.3633 11.0865 12.2897C11.0865 11.2161 10.3223 10.3426 9.38312 10.3426Z"
              fill="white"
            />
          </svg>
          Share Property
        </BasicButton>
      </div>
    </div>
  );
};

const FullDetails = ({ property }) => {
  console.log(property.agency);
  return (
    <>
      <div className="full-details-container">
        <h1 className="proerty-details-heading">Property Details</h1>
        <p className="property-description ">{property.description}</p>
      </div>
      <div className="ameneties-container">
        <h1 className="proerty-details-heading">Facilities And Amenities.</h1>

        <div className="amenities-list">
          {Object.keys(property).length !== 0 &&
            property.amenities &&
            property.amenities.map((item, i) => (
              <div key={i} className="amenities">
                <img
                  src="/assets/image/icon.png"
                  className="amenties-icon"
                  alt="building"
                />
                <h1 className="ameneties-text"> {item}</h1>
              </div>
            ))}
        </div>
      </div>
      {property && property.agencyId && (
        <div className="ameneties-container">
          <h1 className="proerty-details-heading">
            {property.agency.agencyName}
          </h1>

          <img
            src={property.agency.agencyLogo}
            className="agency-logo"
            style={{ width: '150px', marginTop: '20px' }}
            alt="logo"
          />
          <h2
            className="agency-name"
            style={{
              fontFamily: 'Poppins',
              fontSize: '17px',
              color: '#333333',
              fontWeight: '500',
              marginTop: '10px',
            }}
          >
            {property.agency.officeAddress}
          </h2>
        </div>
      )}
    </>
  );
};

const ContactAgent = ({ property }) => {
  const { agent } = property;
  return (
    <div className="contact-agent-container">
      <div className="image-div">
        <img src={agent.agentImage} alt="agentName" className="agent-image" />
      </div>
      <div className="details-div">
        <h1 className="agent-name">{agent.agentName}</h1>
        <h1 className="agent-designation">{agent.position}</h1>
        <h1 className="agent-no">RERA NO:{agent.rera}</h1>
        <h1 className="agent-no"> Contact No: {agent.phoneNumber}</h1>
        <h1 className="reference">
          Reference: <span className="reference-span">{agent.id}</span>
        </h1>
        <h1 className="reference">
          price: <span className="reference-span">AED {property.price}</span>
        </h1>
        <div className="btn-div">
          {/* <a href="tel:+971521278701" className="button-a-tag"> */}
          <BasicButton
            customClass="btn-1"
            onClick={() => window.open(`tel:${agent.phoneNumbe}`, '_blank')}
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
            onClick={() => window.open(`tel:${agent.phoneNumber}`, '_blank')}
            customClass="btn-2"
          >
            Call{' '}
            <svg
              width="13"
              height="13"
              viewBox="0 0 11 11"
              fill="none"
              style={{ marginLeft: '5px', marginTop: '2px' }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1228 6.96333C9.4512 6.96333 8.80142 6.85412 8.19531 6.65754C8.0042 6.59202 7.79125 6.64116 7.64382 6.78859L6.78654 7.86429C5.24125 7.12714 3.79425 5.73474 3.02433 4.13485L4.08911 3.22842C4.23654 3.07553 4.28022 2.86258 4.22016 2.67146C4.01812 2.06536 3.91437 1.41557 3.91437 0.743947C3.91437 0.449086 3.66866 0.203369 3.3738 0.203369H1.4845C1.18964 0.203369 0.834717 0.334418 0.834717 0.743947C0.834717 5.81664 5.05559 10.0321 10.1228 10.0321C10.5105 10.0321 10.6634 9.68806 10.6634 9.38774V7.5039C10.6634 7.20904 10.4177 6.96333 10.1228 6.96333Z"
                fill="black"
              />
            </svg>
          </BasicButton>
          {/* </a> */}
          <BasicButton
            onClick={() =>
              window.open(
                `whatsapp://send?abid=${agent.whatsAppNumber}&text=Hello`,
                '_blank'
              )
            }
            customClass="btn-3"
          >
            Whatsapp
          </BasicButton>
          <BasicButton
            onClick={() => window.open(`tel:${agent.phoneNumber}`, '_blank')}
            customClass="btn-2"
          >
            Email
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: '5px' }}
            >
              <path
                d="M12.2886 -0.000244141H2.0529C1.34919 -0.000244141 0.779835 0.575512 0.779835 1.27921L0.773438 8.95596C0.773438 9.65966 1.34919 10.2354 2.0529 10.2354H12.2886C12.9923 10.2354 13.568 9.65966 13.568 8.95596V1.27921C13.568 0.575512 12.9923 -0.000244141 12.2886 -0.000244141ZM12.2886 2.55867L7.17073 5.75732L2.0529 2.55867V1.27921L7.17073 4.47786L12.2886 1.27921V2.55867Z"
                fill="black"
              />
            </svg>
          </BasicButton>
          <BasicButton
            onClick={() => window.open('tel:+971521278701', '_blank')}
            customClass="btn-2"
          >
            Save
            <svg
              width="14"
              height="12"
              viewBox="0 0 8 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.04569 4.83566V7.97713H1.21153V4.83566H0.378082V7.97713C0.378082 8.47079 0.753135 8.87469 1.21153 8.87469H7.04569C7.50409 8.87469 7.87914 8.47079 7.87914 7.97713V4.83566H7.04569ZM4.54534 5.13635L5.62466 3.97849L6.21224 4.61127L4.12861 6.85518L2.04498 4.61127L2.63257 3.97849L3.71189 5.13635V0.796631H4.54534V5.13635Z"
                fill="#2A2C30"
              />
            </svg>
          </BasicButton>
          <BasicButton
            onClick={() => window.open('tel:+971521278701', '_blank')}
            customClass="btn-2"
            style={{ color: 'red' }}
          >
            Report
            <svg
              width="14"
              height="12"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.868591 7.80087H9.32138L5.09499 0.500732L0.868591 7.80087ZM5.47921 6.64822H4.71077V5.87978H5.47921V6.64822ZM5.47921 5.11135H4.71077V3.57448H5.47921V5.11135Z"
                fill="#D72020"
              />
            </svg>
          </BasicButton>
        </div>
      </div>
    </div>
  );
};
export default PropertyView;
