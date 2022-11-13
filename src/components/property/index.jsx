import './property.scss';
import LocationIcon from '../svg/location';
import Bath from '../svg/bath';
import Whatsapp from '../svg/whatsapp';
import Favourite from '../svg/favourite';
import Share from '../svg/share';
import Phone from '../svg/phone';
import Mail from '../svg/mailsvg';
import Bed from '../svg/bed';
import Living from '../svg/living';
import Area from '../svg/area';
import { useNavigate } from 'react-router-dom';
import ImgPropCarousel from '../imgpropcarousel';
import { TITLE } from '../../utils/constants';

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

    return add.length < 50 ? add : add.substring(0, 50) + ' . . .';
  };

  const renderUnit = unit => {
    return unit.length < 10 ? unit : unit.substring(0, 7) + ' ...';
  };

  const renderVerified = verified =>
    verified ? (
      <div
        className={`new-listing verified-property ${
          props.check ? '' : 'no-verified'
        }`}
      >
        VERIFIED
      </div>
    ) : null;
  return (
    <div className="property-list" onContextMenu={e => e.preventDefault()}>
      <div
        className="property-list-item"
        onContextMenu={e => e.preventDefault()}
      >
        <ImgPropCarousel
          customClass="prop-list-img"
          imgArray={props.images}
          curImgClass="prop-list-img"
        />
        {props.check ? <div className="new-listing">New Listing</div> : ''}
        {renderVerified(props.verified)}
        <div className="property-rectangle favourite">
          <Favourite width="15" height="16" viewbox="0 -1.2 12 10" />
        </div>
        <div
          className="property-rectangle share"
          onClick={() =>
            window.open(
              `https://wa.me/?text=Hello, I found this Property on ${TITLE} please check it out and tell me how do you feel.  %0a%0ahttp://uaeassistant.com/property/${props.id}
             `
            )
          }
        >
          <Share width="14" height="15" fill="#979797" viewbox="1 -3 9 15" />
        </div>
        <div className="address">
          <LocationIcon
            fill="#2f70ff"
            opacity="1"
            width="9"
            height="12"
            viewbox="0 1 16 23"
          />
          <p>{renderAddress(props.address)}</p>
        </div>
        <div className="property-type-property" onClick={navigateTo}>
          {props.propertyType}
        </div>
        <div className="main-heading" onClick={navigateTo}>
          {props.title.toLowerCase()}
        </div>
        <div className="price-tag" onClick={navigateTo}>
          AED {props.price}
        </div>
        <div className="description" onClick={navigateTo}>
          {renderDescription(props.description).toLowerCase()}
        </div>
        <div className="spec" onClick={navigateTo}>
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
              {props.propertySize}{' '}
              {props.propertySizeUnit ? renderUnit(props.propertySizeUnit) : ''}
            </p>
          </div>
        </div>
        <div className="property-line" />
        <div className="service-property">
          <div
            className="service-btn-property email"
            onClick={() =>
              window.open('mailto:hello@uaeassistant.com', '_blank')
            }
          >
            <Mail width="15" height="15" viewBox="0 0 15 15" fill="#2f70ff" />
            Email
          </div>
          <div
            className="service-btn-property phone"
            onClick={() => window.open('tel:+971521278701', '_blank')}
          >
            <Phone width="17" height="17" viewBox="0 0 15 15" fill="#2f70ff" />
            Phone
          </div>

          <div
            className="service-btn-property whatsapp"
            onClick={() =>
              window.open(
                `https://wa.me/+971521278701/?text=Hello ${TITLE}. I’m interested in this property %0a%0aLink: http://uaeassistant.com/property/${props.id}
              %0a%0aPrice: AED ${props.price}
              %0aLocation: ${props.address.city}
                
                %0aReference: ${props.id}
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
        </div>
      </div>
    </div>
  );
};

export default Property;
