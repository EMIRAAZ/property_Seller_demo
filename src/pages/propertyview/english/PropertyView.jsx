import './propertyview.scss';
import Header from '../../../components/header/english/Header';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RarrowIcon from '../../../components/svg/rarrow';
import LarrowIcon from '../../../components/svg/larrow';
import Bed from '../../../components/svg/bed';
import Bath from '../../../components/svg/bath';
import Living from '../../../components/svg/living';
import Area from '../../../components/svg/area';
import Whatsapp from '../../../components/svg/whatsapp';
import { MoveToTop } from '../../../components/movetotop';
import FooterNew from '../../../components/footerNew';
import Phone from '../../../components/svg/phone';
import Mail from '../../../components/svg/mailsvg';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import BottomFixed from '../../../components/bottomfixed/BottomFixed';
import { Button } from '@mui/material';
import SimilarProperty from '../../../components/similarproperty';

const PropertyView = props => {
  let location = useLocation();

  const { property } = props;

  useEffect(() => {
    props.getPropertyByID(getID());
  }, []);

  const getID = () => location.pathname.split('/').pop();
  const [content, setContent] = useState(true);
  const [read, setRead] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  const renderLinkFromString = str => {
    const strArr = str?.split(' ');
    for (let i = 0; i < strArr?.length; i++) {
      if (strArr[i].includes('http')) {
        strArr[i] = (
          <span>
            &nbsp;
            <a
              href={`https://${strArr[i]}`}
              target="_blank"
            >{`${strArr[i]}`}</a>
          </span>
        );
      } else strArr[i] = <span>{` ${strArr[i]}`}</span>;
    }
    return strArr;
  };

  const getDescription = description => {
    if (description) {
      if (read) {
        return renderLinkFromString(description);
      } else {
        if (description.length > 200)
          return renderLinkFromString(description.substring(0, 200) + ' . . .');
        else return renderLinkFromString(description);
      }
    } else return '';
  };

  const openMap = ({ lat, lng }) => {
    // If it's an iPhone..
    if (
      navigator.platform.indexOf('iPhone') != -1 ||
      navigator.platform.indexOf('iPod') != -1 ||
      navigator.platform.indexOf('iPad') != -1
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
    d = d.split('T');
  }

  return (
    <div className="single-property-view">
      <Header customClass="prop-view-header-class" />
      <div className="main-container">
        <div className="img-container">
          {property.images && content ? (
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
              <p className="heading1">{property.mainTitle}</p>

              <p className="price">{` ${property.price} AED`}</p>
              <div className="spec">
                <div className="spec-wrap">
                  <Bed
                    className="property-bed"
                    width="18"
                    height="18"
                    viewBox="0 0 17 1"
                    fill="#2f70ff"
                  />
                  <div className="ft">
                    <div>Bedrooms:</div>
                    {property.noOfBedroom}
                  </div>
                </div>
                <div class="vl"></div>
                <div className="spec-wrap">
                  <Bath
                    className="property-bath"
                    width="18"
                    height="18"
                    fill="#2f70ff"
                    viewBox="0 0 17 17"
                  />
                  <div className="ft">
                    <div> Bathrooms:</div>
                    {property.noOfBathroom}
                  </div>
                </div>
                <div class="vl"></div>
                <div className="spec-wrap">
                  <Living
                    className="property-living"
                    width="18"
                    fill="#2f70ff"
                    height="18"
                    viewBox="0 0 17 14"
                  />
                  <div className="ft">
                    <div> Property Type:</div>
                    {property.propertyType}
                  </div>
                </div>
                <div class="vl"></div>
                <div className="spec-wrap">
                  <Area
                    className="property-area"
                    width="18"
                    height="18"
                    fill="#2f70ff"
                    viewBox="0 0 17 16"
                  />
                  <div className="ft">
                    <div> Area:</div>
                    {property.propertySize}
                    {/* {renderUnit(property.propertySizeUnit)} */}
                  </div>
                </div>
              </div>
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
                        mapContainerStyle={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '10px',
                        }}
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
              <p className="head">Description</p>
              <p className="description">
                {getDescription(property.description)}
              </p>
              <Button
                size="small"
                variant="outlined"
                onClick={() => setRead(!read)}
              >
                {read ? 'Read less' : 'Read more'}
              </Button>

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

            <hr />
            <div className="more-details">
              <div className="details">
                <p>Reference:</p>
                <h1>{property.id}</h1>
              </div>
              <div className="details">
                <p>property age:</p>
                <h1>{property.propertyAge}</h1>
              </div>
              <div className="details">
                <p>Listed Date:</p>
                {d && <h1>{d[0]}</h1>}
              </div>
              <div className="details">
                <p> Tarkheesi permit:</p>
                <h1>{property.trakheesiPermit}</h1>
              </div>
              <div className="details">
                <p> Broker ORN:</p>
                <h1>{property.brokerORN}</h1>
              </div>
              <div className="details">
                <p> Agent BRN:</p>
                <h1>{property.agentBRN}</h1>
              </div>
              <div className="details">
                <p> Ownership:</p>
                <h1>{property.ownership}</h1>
              </div>
            </div>
            <hr />
          </div>
          <div className="right-container">
            <div className="agent-card">
              <div className="top-header-agent">
                <div className="agent-details">
                  <p style={{ color: 'black' }}>Contact Agent</p>

                  {property && property.agent ? (
                    <>
                      <p style={{ marginTop: '10px' }}>
                        {property.agent.agentName}
                      </p>

                      <h1 style={{ color: 'black', marginTop: '10px' }}>
                        Response time :{' '}
                        <span style={{ color: 'grey' }}>Within 5 minutes</span>
                      </h1>
                      <h1 style={{ color: 'black' }}>
                        Languages :{' '}
                        <span style={{ color: 'grey' }}>
                          {property.agent.languages}{' '}
                        </span>
                      </h1>
                      <h1 style={{ color: 'black' }}>
                        Experience :{' '}
                        <span style={{ color: 'grey' }}>
                          {property.agent.yearsOfExperience}{' '}
                        </span>
                      </h1>
                      {/* <p>{property.agency.officeAddress}</p> */}
                    </>
                  ) : null}
                </div>
                <div className="agent-img-div">
                  {property && property.agent && property.agent.agentImage ? (
                    <img src={property.agent.agentImage} alt="agent img" />
                  ) : null}
                  {property && property.agency && property.agency.agencyLogo ? (
                    <img src={property.agency.agencyLogo} alt="agency img" />
                  ) : null}
                  {console.log(property.agent)}
                </div>
              </div>
              <div className="service-property-x">
                <div
                  className="service-btn-property whatsapp"
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
                  <Whatsapp
                    width="17"
                    height="17"
                    viewBox="0 0 15 15"
                    fill="#2f70ff"
                  />
                  WhatsApp
                </div>
                <div
                  className="service-btn-property phone"
                  onClick={() => window.open('tel:+971553011274', '_blank')}
                >
                  <Phone
                    width="17"
                    height="17"
                    viewBox="0 0 15 15"
                    fill="#2f70ff"
                  />
                  Phone
                </div>
                <div
                  className="service-btn-property email"
                  onClick={() =>
                    window.open('mailto:hello@propertyassistant.ae', '_blank')
                  }
                >
                  <Mail
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="#2f70ff"
                  />
                  Email
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomFixed property={property} />
      {property && property.address && property.address.city ? (
        <SimilarProperty
          getSimilarProperty={props.getSimilarProperty}
          city={property.address.city}
          id={property.id}
          similarProperty={
            props.similarProperty.length ? props.similarProperty : []
          }
        />
      ) : (
        <></>
      )}
      <MoveToTop />
      <FooterNew />
    </div>
  );
};

const VideoView = ({ url = 'https://www.youtube.com/embed/WGf3tNSbXs0' }) => {
  return (
    <iframe
      style={{ borderRadius: '10px' }}
      title="drf4rf4r"
      width="100%"
      height="100%"
      allow="autoplay;"
      allow="fullscreen"
      src={url}
    ></iframe>
  );
};

const ImageSlider = ({
  imgArray = ['/assets/image/noimage.jpg'],
  videoView = 'https://www.youtube.com/embed/WGf3tNSbXs0',
}) => {
  const [index, setIndex] = useState(0);

  const onsetIndex = add => {
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
            backgroundRepeat: 'space',
            backgroundSize: 'cover',
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
          backgroundRepeat: 'space',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="main-video-container">
        <VideoView url={videoView} />
      </div>
    </>
  );
};

export default PropertyView;
