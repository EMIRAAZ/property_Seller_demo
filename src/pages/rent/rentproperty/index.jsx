import './rentproperty.scss';
import Property from '../../../components/property';

const RentProperty = ({ property }) => {
  const renderProperty = () =>
    property.property.map(item => <Property key={item.id} {...item} />);
  return (
    <div className="rent-property">
      <div className="rent-property-content">
        <p className="heading">Properties for rent in UAE</p>
        <p className="sub">{property.count} Properties found</p>
        <div className="property-list-container">{renderProperty()}</div>
      </div>
    </div>
  );
};

export default RentProperty;
