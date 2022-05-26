import './rentproperty.scss';
import Property from '../../../components/property';

const RentProperty = () => {
  return (
    <div className="rent-property">
      <div className="rent-property-content">
        <p className="heading">Properties for rent in UAE</p>
        <p className="sub">3587 Properties found</p>
        <div className="property-list-container">
          <Property />
          <Property />
          <Property />
          <Property />
        </div>
      </div>
    </div>
  );
};

export default RentProperty;
