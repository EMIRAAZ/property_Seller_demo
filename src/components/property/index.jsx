import './property.scss';
import LocationIcon from '../svg/location';
import Bath from '../svg/bath';
import Whatsapp from '../svg/whatsapp';
import Tick from '../svg/tic';
import Favourite from '../svg/favourite';
import Share from '../svg/share';
import Phone from '../svg/phone';
import Mail from '../svg/mailsvg';
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

    return add.length < 64 ? add : add.substring(0, 63) + ' . . .';
  };

  const renderUnit = unit => {
    return unit.length < 10 ? unit : unit.substring(0, 7) + ' ...';
  };

  const renderVerified = verified =>
    verified ? (
      <div className="property-rectangle verified-property">
        <Tick width="25" height="20" />
      </div>
    ) : null;
  return (
    <div className="property-list">
      <div className="property-list-item">
        <ImgPropCarousel customClass="" imgArray={props.images} />
        {props.check ? <div className="new-listing">New Listing</div> : ''}
        {renderVerified(props.verified)}
        <div className="property-rectangle favourite">
          <Favourite width="23" height="21" viewbox="0 -1 12 10" />
        </div>
        <div className="property-rectangle share">
          <Share width="18" height="23" fill="#979797" viewbox="1 -2 9 15" />
        </div>
        <div className="address">
          <LocationIcon
            fill="#1FA0E9"
            opacity="1"
            width="9"
            height="12"
            viewbox="0 2 16 23"
          />
          <p>{renderAddress(props.address)}</p>
        </div>
        <div className="property-type-property">{props.propertyType}</div>
        <div className="main-heading" onClick={navigateTo}>
          {props.title.toLowerCase()}
        </div>
        <div className="price-tag">AED {props.price}</div>
        <div className="description" onClick={navigateTo}>
          {renderDescription(props.description).toLowerCase()}
        </div>
        <div className="spec">
          <div className="spec-wrap">
            <Bed
              className="property-bed"
              width="15"
              height="14"
              viewBox="0 -2 17 14"
              fill="#979797"
            />
            <p>{props.noOfBedroom}</p>
          </div>
          {/* <div class="vl"></div> */}
          <div className="spec-wrap">
            <Bath
              className="property-bath"
              width="15"
              height="14"
              viewBox="0 0 17 17"
              fill="#979797"
            />
            <p>{props.noOfBathroom}</p>
          </div>
          {/* <div class="vl"></div> */}
          <div className="spec-wrap">
            <Living
              className="property-living"
              width="15"
              height="14"
              viewBox="0 0 17 14"
              fill="#979797"
            />
            <p>{props.noOfBathroom + props.noOfBedroom}</p>
          </div>
          {/* <div class="vl"></div> */}
          <div className="spec-wrap go-right">
            <Area
              className="property-area"
              width="15"
              height="14"
              viewBox="0 0 17 16"
              fill="#979797"
            />
            <p>
              {props.propertySize} {renderUnit(props.propertySizeUnit)}
            </p>
          </div>
        </div>
        <div className="property-line" />
        <div className="service-property">
          <div
            className="service-btn-property whatsapp"
            onClick={() =>
              window.open(
                `whatsapp://send?abid=+971521278701&text=Hello UAE Assistant. I’m interested in this property http://uaeassistant.com/property/${props.id}
                Price: AED ${props.price}
                Location: ${props.address}
                Reference: ${props.id}
                Please send me more information regards`,
                '_blank'
              )
            }
          >
            <Whatsapp
              width="17"
              height="17"
              viewBox="0 0 15 15"
              fill="#2D79FC"
            />
            whatsapp
          </div>
          <div
            className="service-btn-property phone"
            onClick={() => window.open('tel:+971521278701', '_blank')}
          >
            <Phone width="17" height="17" viewBox="0 0 15 15" />
            Phone
          </div>
          <div
            className="service-btn-property email"
            onClick={() =>
              window.open('mailto:hello@uaeassistant.com', '_blank')
            }
          >
            <Mail width="15" height="15" viewBox="0 0 15 15" fill="#2D79FC" />
            Mail
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
