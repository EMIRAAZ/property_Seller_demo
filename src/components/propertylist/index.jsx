import './propertylist.scss';
import LocationIcon from '../svg/location';
import Bath from '../svg/bath';
import Bed from '../svg/bed';
import Living from '../svg/living';
import Area from '../svg/area';

const PropertyList = props => {
  const renderDescription = description => {
    return description.length < 120
      ? description
      : description.substring(0, 140) + '...';
  };

  const renderAddress = address => {
    return `${address.placeAddress}, ${
      address.building ? address.building : ''
    } ${address.city}`;
  };

  return (
    <div className="property-list">
      <div className="property-list-item">
        <img className="prop-list-img" src={props.images[0]} alt="img" />
        <div className="price-tag">AED {props.price}</div>
        <div className="main-heading">{props.title}</div>
        <div className="description">
          {renderDescription(props.description)}
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
            <Bed />
            <p>{props.noOfBedroom} Bed</p>
          </div>
          <div class="vl"></div>
          <div className="spec-wrap">
            <Bath />
            <p>{props.noOfBathroom} Bath</p>
          </div>
          <div class="vl"></div>
          <div className="spec-wrap">
            <Living />
            <p>8 Rooms</p>
          </div>
          <div class="vl"></div>
          <div className="spec-wrap">
            <Area />
            <p>
              {props.propertySize} {props.propertySizeUnit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
