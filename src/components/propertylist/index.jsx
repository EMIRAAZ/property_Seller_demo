import './propertylist.scss';
import LocationIcon from '../svg/location';
import Bath from '../svg/bath';
import Bed from '../svg/bed';
import Living from '../svg/living';
import Area from '../svg/area';

const PropertyList = () => {
  const propertyListItem = img => (
    <div className="property-list-item">
      <img className="prop-list-img" src="/assets/image/house.jpg" alt="img" />
      <div className="price-tag">AED 32000</div>
      <div className="main-heading">Bravo Apollo Apartments</div>
      <div className="description">
        There are many variations of passages of lorem Ipsum available, but the
        majority have suffered alteration in some form injected.
      </div>
      <div className="address">
        <LocationIcon
          fill="#1FA0E9"
          opacity="1"
          width="12"
          height="20"
          viewbox="0 0 16 23"
        />
        <p>779 6th Ave Business Bay, Dubai 120400</p>
      </div>
      <div className="property-line" />
      <div className="spec">
        <div className="spec-wrap">
          <Bed />
          <p>4 Bed</p>
        </div>
        <div class="vl"></div>
        <div className="spec-wrap">
          <Bath />
          <p>3 Bath</p>
        </div>
        <div class="vl"></div>
        <div className="spec-wrap">
          <Living />
          <p>8 Rooms</p>
        </div>
        <div class="vl"></div>
        <div className="spec-wrap">
          <Area />
          <p>1574 sq</p>
        </div>
      </div>
    </div>
  );

  return <div className="property-list">{propertyListItem()}</div>;
};

export default PropertyList;
