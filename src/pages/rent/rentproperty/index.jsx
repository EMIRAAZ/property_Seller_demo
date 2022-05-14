import './rentproperty.scss';
import PropertyList from '../../../components/propertylist';

const RentProperty = () => {
  return (
    <div className="rent-property">
      <div className="rent-property-content">
        <p className="heading">Properties for rent in UAE</p>
        <p className="sub">3587 Properties found</p>
        <div className="property-list-container">
          <PropertyList />
          <PropertyList />
          <PropertyList />
          <PropertyList />
        </div>
      </div>
    </div>
  );
};

export default RentProperty;
