import "./Offplanviewnew.scss";
import Header from "../../../components/header/english/Header";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RarrowIcon from "../../../components/svg/rarrow";
import LarrowIcon from "../../../components/svg/larrow";
import Whatsapp from "../../../components/svg/whatsapp";
import { MoveToTop } from "../../../components/movetotop";
import FooterNew from "../../../components/footerNew";
import Phone from "../../../components/svg/phone";
import Mail from "../../../components/svg/mailsvg";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { Button } from "@mui/material";

const OffplanViewNew = (props) => {
  let location = useLocation();

  const { property } = props;
  const getID = () => location.pathname.split("/").pop();

  useEffect(() => {
    props.getOffplanProjectsByIdWeb(getID());
  }, []);

  const [read, setRead] = useState(false);
  const [read1, setRead2] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  const getDescription = (description) => {
    if (description) {
      if (read) {
        return description;
      } else {
        if (description.length > 200)
          return description.substring(0, 200) + " . . .";
        else return description;
      }
    } else return "";
  };
  const getDescription2 = (description) => {
    if (description) {
      if (read1) {
        return description;
      } else {
        if (description.length > 200)
          return description.substring(0, 200) + " . . .";
        else return description;
      }
    } else return "";
  };

  const openMap = ({ lat, lng }) => {
    // If it's an iPhone..
    if (
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPod") != -1 ||
      navigator.platform.indexOf("iPad") != -1
    )
      window.open(
        `maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${lat},${lng}`
      );
    else
      window.open(
        `https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${lat},${lng}`
      );
  };

  const getCord = () => {
    if (
      property &&
      property.address &&
      property.address.latitude &&
      property.address.longitude
    ) {
      return {
        lat: parseFloat(property.address.latitude),
        lng: parseFloat(property.address.longitude),
      };
    } else return { lat: 25.1972, lng: 55.2744 };
  };

  if (property.updatedAt) {
    var d = property.updatedAt;
    d = d.split("T");
  }

  return (
    <div className="OffplanViewNew">
      <Header customClass="prop-view-header-class" />
      <div className="main-container">
        <div className="img-container">
          {property.images ? (
            <ImageSlider
              imgArray={property.images}
              videoView={property.videoView}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="content-container">
          <div className="left-container">
            <div className="details">
              <p className="heading">{property.title}</p>
              <p className="city">
                {property && property.address && property.address.city},{" "}
                {property && property.address && property.address.emirate}
              </p>
            </div>
            <hr />
            <div className="details-two">
              <div className="loc-column">
                <p className="location-header">Location</p>
                <div className="property-view-google-map">
                  {isLoaded ? (
                    <>
                      <GoogleMap
                        center={getCord()}
                        mapContainerStyle={{ width: "100%", height: "100%" }}
                        zoom={15}
                      >
                        <Marker position={getCord()} />
                      </GoogleMap>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="loc-column-ad">
                <p>
                  {property && property.address && property.address.building}
                </p>
                <p>
                  {property &&
                    property.address &&
                    property.address.placeAddress}
                </p>
                <p>{property && property.address && property.address.city}</p>
                <a className="loc-open-mp" onClick={() => openMap(getCord())}>
                  Open in Map
                </a>
              </div>
            </div>
            <hr />
            <div className="details-three">
              <div className="dtails-inside-div">
                <p className="head">Project Overview</p>
                <p className="description">
                  {getDescription(property.projectOverview)}
                </p>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => setRead(!read)}
                >
                  {read ? "Read less" : "Read more"}
                </Button>
              </div>
              <div className="dtails-inside-div">
                <p className="head">Interior Details</p>
                <p className="description">
                  {getDescription2(property.interiorDetails)}
                </p>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => setRead2(!read1)}
                >
                  {read ? "Read less" : "Read more"}
                </Button>
              </div>

              <div className="amenities-main-div">
                <h1>Facilities and Amenities.</h1>
                {property.amenities &&
                  property.amenities.map((item, i) => (
                    <div className="amenties-div" key={i}>
                      <div className="dot-div"></div>
                      <p>{item}</p>
                    </div>
                  ))}
              </div>
              <div className="main-video-container2">
                <VideoView url={property.videoView} />
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="agent-card">
              <div className="top-header-agent">
                <div className="agent-details">
                  <p style={{ color: "grey" }}>Agent</p>

                  {property && property.agent ? (
                    <>
                      <p>{property.agent.agentName}</p>

                      <h1>
                        Response time :
                        <span style={{ color: "black" }}>
                          {" "}
                          within 5 minutes
                        </span>
                      </h1>
                      <h1>
                        Languages :{" "}
                        <span style={{ color: "black" }}>
                          {property.agent.languages}{" "}
                        </span>
                      </h1>
                      <h1>
                        Experience :{" "}
                        <span style={{ color: "black" }}>
                          {property.agent.yearsOfExperience}{" "}
                        </span>
                      </h1>
                      {/* <h2>Agency : {property.agency.agencyName}</h2> */}
                      {/* <p>{property.agency.officeAddress}</p> */}
                    </>
                  ) : null}
                </div>
                {property && property.agent && property.agent.agentImage ? (
                  <img src={property.agent.agentImage} alt="agent img" />
                ) : null}
                {property && property.agency && property.agency.agencyLogo ? (
                  <img src={property.agency.agencyLogo} alt="agency img" />
                ) : null}
              </div>
              <div className="service-property-x">
                <div
                  className="service-btn-property whatsapp"
                  onClick={() =>
                    window.open(
                      `https://wa.me/+971553011274/?text=Hello Property Assistant. I’m interested in this property %0a%0aLink: https://propertyassistant.ae/property/${property.id}
              %0a%0aPrice: AED ${property.price}
              %0aLocation: ${property.address.city}
                
                %0aReference: ${property.id}
                %0a%0aPlease send me more information regards`
                    )
                  }
                >
                  <Whatsapp
                    width="17"
                    height="17"
                    viewBox="0 0 15 15"
                    fill="#6565D6"
                  />
                  WhatsApp
                </div>
                <div
                  className="service-btn-property phone"
                  onClick={() => window.open("tel:+971553011274", "_blank")}
                >
                  <Phone
                    width="17"
                    height="17"
                    viewBox="0 0 15 15"
                    fill="#6565D6"
                  />
                  Phone
                </div>
                <div
                  className="service-btn-property email"
                  onClick={() =>
                    window.open("mailto:hello@propertyassistant.ae", "_blank")
                  }
                >
                  <Mail
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="#6565D6"
                  />
                  Email
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-this-property">
        <div className="head-div">
          <h1>ABOUT</h1>
          <hr className="hr-tag" />
        </div>
        <h1>Why This Property?</h1>

        <p>
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>

        <div className="component-div">
          {property &&
            property.whyThisProperty?.map((why, index) => (
              <Whythis key={index} title={why.feature} desc={why.description} />
            ))}
        </div>
      </div>
      <div className="why-this-property">
        <h1>Price For Availability</h1>

        <div className="component-div">
          {property.priceForAvailability?.map((plans, index) => (
            <div className="Priceforavailability" key={index}>
              <PriceForAvailability plans={plans} />
            </div>
          ))}
        </div>
      </div>

      <div className="why-this-property">
        <div className="head-div">
          <h1>Plans</h1>
          <hr className="hr-tag" />
        </div>
        <h1>Payment Plan</h1>

        <p>
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>

        <div className="component-div">
          {property.paymentPlan?.map((plans, index) => (
            <PaymentPlan
              key={index}
              percentage={plans.percentage}
              title={plans.type}
              desc={plans.description}
            />
          ))}
        </div>
      </div>
      <MoveToTop />
      <NewFooter property={property} />
      <FooterNew />
    </div>
  );
};

const VideoView = ({ url = "https://www.youtube.com/embed/WGf3tNSbXs0" }) => {
  return (
    <iframe
      style={{ borderRadius: "10px" }}
      title="drf4rf4r"
      width="100%"
      height="100%"
      allow="autoplay;"
      allow="fullscreen"
      src={url ? url : "https://www.youtube.com/embed/WGf3tNSbXs0"}
    ></iframe>
  );
};

const ImageSlider = ({
  imgArray = ["/assets/image/noimage.jpg"],
  videoView = "https://www.youtube.com/embed/WGf3tNSbXs0",
}) => {
  const [index, setIndex] = useState(0);

  const onsetIndex = (add) => {
    if (index === 0 && add === -1) {
      setIndex(imgArray.length - 1);
    } else if (index === imgArray.length - 1 && add === 1) {
      setIndex(0);
    } else setIndex(index + add);
  };
  const getIndex = () => {
    if (imgArray.length - 1 < index + 1) {
      return 0;
    } else return index + 1;
  };
  return (
    <>
      <div className="main-img-container">
        <div
          className="image-slide-container"
          style={{
            backgroundImage: `url(${imgArray[index]})`,
            backgroundRepeat: "space",
            backgroundSize: "100%",
          }}
        >
          <div className="carousel-panel-prop">
            <LarrowIcon className="rArrow" onClick={() => onsetIndex(-1)} />
            <RarrowIcon className="rArrow" onClick={() => onsetIndex(1)} />
          </div>
        </div>
      </div>
      <div
        className="sub-img-container"
        style={{
          backgroundImage: `url(${imgArray[getIndex()]})`,
          backgroundRepeat: "space",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="main-video-container">
        <VideoView url={videoView} />
      </div>
    </>
  );
};

const Whythis = ({ key, title, desc }) => {
  return (
    <div key={key} className="why-this-property-component">
      <svg
        width="68"
        height="69"
        viewBox="0 0 78 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.8301 0.859375C17.5156 0.859375 0.245117 18.208 0.245117 39.6188C0.245117 61.0297 17.5156 78.3783 38.8301 78.3783C60.1445 78.3783 77.415 61.0297 77.415 39.6188C77.415 18.208 60.1445 0.859375 38.8301 0.859375ZM32.8754 53.3524C32.4302 53.7996 31.7994 54.1723 31.2429 54.1723C30.6864 54.1723 30.0557 53.781 29.5919 53.3337L19.2037 42.8985L22.5057 39.5816L31.2615 48.377L54.4124 24.9536L57.6588 28.3264L32.8754 53.3524Z"
          fill="#6565d6"
        />
      </svg>
      <h1>{title}</h1>

      <p className="description">{desc}</p>
    </div>
  );
};

const PriceForAvailability = ({ plans }) => {
  return (
    <>
      <img
        style={{ width: "100%" }}
        className="image-class"
        src={plans.image}
        alt=""
      />
      <div className="price-div">
        <div className="title">
          <h1 className="name">{plans.name}</h1>
          <h2 className="price"> {plans.price} AED </h2>
        </div>
        <div className="svg-div">
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.96405 15.2515L2.60948 14.897C2.88939 14.617 3.26904 14.4598 3.6649 14.4598L25.7277 14.4598L20.3777 9.1114L20.3776 9.11135C20.0975 8.8312 19.9401 8.45123 19.9401 8.05504C19.9401 7.65885 20.0975 7.27888 20.3776 6.99873C20.6578 6.71858 21.0377 6.5612 21.4339 6.5612C21.8301 6.5612 22.2101 6.71858 22.4902 6.99873L30.3871 14.8956L2.96405 15.2515ZM2.96405 15.2515L2.60948 14.897C2.32956 15.1769 2.1723 15.5565 2.1723 15.9524C2.1723 16.3482 2.32956 16.7279 2.60948 17.0078C2.88939 17.2877 3.26904 17.445 3.6649 17.445H25.7277M2.96405 15.2515L25.7277 17.445M25.7277 17.445L20.3777 22.7934L20.3776 22.7934C20.0975 23.0736 19.9401 23.4535 19.9401 23.8497C19.9401 24.2459 20.0975 24.6259 20.3776 24.906C20.6578 25.1862 21.0377 25.3436 21.4339 25.3436C21.8301 25.3436 22.2101 25.1862 22.4902 24.906L30.3871 17.0091L25.7277 17.445ZM30.7116 15.3803C30.7869 15.5616 30.8256 15.756 30.8256 15.9524C30.8256 16.1487 30.7869 16.3431 30.7116 16.5244C30.6365 16.7056 30.5264 16.8701 30.3876 17.0087L30.7116 15.3803ZM30.7116 15.3803C30.6365 15.1992 30.5264 15.0346 30.3876 14.8961L30.7116 15.3803Z"
              fill="white"
              stroke="white"
              stroke-width="1.01086"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

const PaymentPlan = ({ percentage, title, key, desc }) => {
  return (
    <div className="why-this-property-component" key={key}>
      <div className="circle">
        <h1 className="percentage">{percentage}%</h1>
      </div>

      <h1>{title}</h1>

      <p className="description">{desc}</p>
    </div>
  );
};
const NewFooter = ({ property }) => {
  return (
    <div className="new-footer">
      <div className="main-title">
        <h1 className="heading">
          let's discuss making your apartment like a dream place!
        </h1>
      </div>

      <div className="sub-title">
        <h1 className="sub-heading">
          Contact us below to work together to build your amazing project.
        </h1>
        <div className="svg-div">
          <div
            className="wp-div"
            onClick={() =>
              window.open(
                `https://wa.me/+971553011274/?text=Hello Property Assistant. I’m interested in this property %0a%0aLink: http://propertyassistant.ae/property/${property.id}
              %0a%0aPrice: AED ${property.price}
              %0aLocation: ${property.address.city}
                
                %0aReference: ${property.id}
                %0a%0aPlease send me more information regards`
              )
            }
          >
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_2267)">
                <path
                  d="M11.0749 0.310547H11.0695C5.08786 0.310547 0.223647 5.17612 0.223647 11.1591C0.219933 13.4441 0.943243 15.671 2.28894 17.5177L0.936939 21.5479L5.10685 20.2149C6.87566 21.3884 8.95221 22.0122 11.0749 22.0076C17.0565 22.0076 21.9207 17.1407 21.9207 11.1591C21.9207 5.17747 17.0565 0.310547 11.0749 0.310547Z"
                  fill="#4CAF50"
                />
                <path
                  d="M17.3863 15.6303C17.1246 16.3694 16.0858 16.9823 15.2572 17.1613C14.6904 17.282 13.95 17.3783 11.4575 16.345C8.26943 15.0242 6.21635 11.7845 6.05633 11.5744C5.90309 11.3642 4.76807 9.85893 4.76807 8.30216C4.76807 6.74539 5.55865 5.98735 5.87733 5.6619C6.13905 5.39475 6.57164 5.27271 6.98659 5.27271C7.12084 5.27271 7.24153 5.27949 7.35002 5.28491C7.66869 5.29847 7.82871 5.31746 8.0389 5.82056C8.30062 6.45113 8.93797 8.00789 9.01391 8.16791C9.09121 8.32793 9.16851 8.5449 9.06002 8.75509C8.95831 8.97206 8.86881 9.06834 8.7088 9.25276C8.54878 9.43719 8.3969 9.57822 8.23689 9.77621C8.09043 9.94843 7.92499 10.1329 8.10942 10.4515C8.29384 10.7634 8.93119 11.8035 9.86959 12.6389C11.0806 13.7169 12.0624 14.0614 12.4136 14.2078C12.6753 14.3163 12.9872 14.2906 13.1784 14.0871C13.4211 13.8254 13.7208 13.3915 14.0259 12.9643C14.2429 12.6578 14.5168 12.6199 14.8043 12.7284C15.0972 12.8301 16.6472 13.5962 16.9659 13.7549C17.2846 13.9149 17.4948 13.9909 17.5721 14.1251C17.648 14.2594 17.648 14.8899 17.3863 15.6303Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2267">
                  <rect
                    width="21.6971"
                    height="21.6971"
                    fill="white"
                    transform="translate(0.223633 0.310547)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h1>Whatsapp</h1>
          </div>
          <div
            className="wp-div"
            onClick={() =>
              window.open("mailto:hello@propertyassistant.ae", "_blank")
            }
          >
            <svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.879883 2.89779V2.33763C0.879883 1.97562 1.02369 1.62843 1.27968 1.37245C1.53566 1.11647 1.88285 0.972656 2.24486 0.972656L21.3545 0.972656C21.7166 0.972656 22.0637 1.11647 22.3197 1.37245C22.5757 1.62843 22.7195 1.97562 22.7195 2.33763V2.89779L11.7997 9.72267L0.879883 2.89779ZM12.1614 11.1064C12.0529 11.1741 11.9276 11.21 11.7997 11.21C11.6718 11.21 11.5465 11.1741 11.438 11.1064L0.879883 4.50743V15.9874C0.879883 16.3494 1.02369 16.6966 1.27968 16.9526C1.53566 17.2086 1.88285 17.3524 2.24486 17.3524H21.3545C21.7166 17.3524 22.0637 17.2086 22.3197 16.9526C22.5757 16.6966 22.7195 16.3494 22.7195 15.9874V4.50743L12.1614 11.1064Z"
                fill="#6565d6"
              />
            </svg>

            <h1>Email</h1>
          </div>

          <div
            className="wp-div"
            onClick={() => window.open("tel:+971553011274", "_blank")}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.65978 5.07917C8.40685 2.16985 5.37173 0.742338 5.24328 0.684072C5.1232 0.627625 4.98863 0.60959 4.85793 0.632427C1.35403 1.21376 0.826991 3.25307 0.805804 3.33782C0.776977 3.45592 0.781562 3.57971 0.819046 3.69536C4.9983 16.6622 13.6839 19.0656 16.5389 19.8562C16.7587 19.9171 16.9401 19.9661 17.0779 20.0111C17.235 20.0625 17.4058 20.0525 17.5559 19.9833C17.6433 19.9436 19.7065 18.9716 20.211 15.8014C20.2334 15.663 20.2111 15.5211 20.1474 15.3962C20.1024 15.3088 19.0232 13.2549 16.0304 12.5293C15.9289 12.5033 15.8226 12.5024 15.7206 12.5266C15.6186 12.5508 15.5241 12.5994 15.4451 12.6683C14.5009 13.4748 13.1966 14.3342 12.6338 14.4229C8.86106 12.5783 6.75422 9.0386 6.67476 8.36722C6.62842 7.98982 7.49313 6.66427 8.48763 5.58635C8.55013 5.51851 8.59774 5.43833 8.62739 5.35098C8.65704 5.26363 8.66807 5.17104 8.65978 5.07917Z"
                fill="#6565d6"
              />
            </svg>

            <h1>Phone</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OffplanViewNew;
