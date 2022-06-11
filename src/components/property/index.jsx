import './property.scss';
import LocationIcon from '../svg/location';
import Bath from '../svg/bath';
import Whatsapp from '../svg/whatsapp';
import Phone from '../svg/phone';
import Bed from '../svg/bed';
import Living from '../svg/living';
import Verified from '../svg/verified';
import Area from '../svg/area';
import { useNavigate } from 'react-router-dom';
import ImgPropCarousel from '../imgpropcarousel';

const Property = props => {
  let navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/property/${props.id}`);
  };
  const renderDescription = description => {
    return description.length < 120
      ? description
      : description.substring(0, 140) + '...';
  };

  const renderAddress = address => {
    let add = `${address.placeAddress}, ${
      address.building ? address.building : ''
    } ${address.city}`;

    return add.length < 50 ? add : add.substring(0, 49) + '...';
  };

  const renderUnit = unit => {
    return unit.length < 10 ? unit : unit.substring(0, 7) + '...';
  };

  return (
    <div className="property-list">
      <div className="property-list-item">
        <ImgPropCarousel imgArray={props.images} />
        <div className="property-verified">
          <Verified /> VERIFIED
        </div>
        <div className="price-tag">AED {props.price}</div>
        <div className="main-heading" onClick={navigateTo}>
          {props.title}
        </div>
        <div className="description" onClick={navigateTo}>
          {renderDescription(props.description).toLowerCase()}
        </div>
        <div className="address">
          <LocationIcon
            fill="#1FA0E9"
            opacity="1"
            width="12"
            height="20"
            viewbox="0 0 16 23"
          />
          <p>{renderAddress(props.address)}</p>
        </div>
        <div className="property-line" />
        <div className="spec">
          <div className="spec-wrap">
            <Bed
              className="property-bed"
              width="15"
              height="14"
              viewBox="0 0 17 14"
            />
            <p>{props.noOfBedroom} Bed</p>
          </div>
          <div class="vl"></div>
          <div className="spec-wrap">
            <Bath
              className="property-bath"
              width="15"
              height="14"
              viewBox="0 0 17 17"
            />
            <p>{props.noOfBathroom} Bath</p>
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
              {props.propertySize} {renderUnit(props.propertySizeUnit)}
            </p>
          </div>
        </div>
        <div className="service-property">
          <div className="service-btn-property whatsapp">
            <Whatsapp />
            whatsapp
          </div>
          <div className="service-btn-property phone">
            <Phone />
            Phone
          </div>
          <div className="service-btn-property email">Mail</div>
        </div>
      </div>
    </div>
  );
};

export default Property;
