import './buyproperty.scss';
import Property from '../../../components/property';

const BuyProperty = ({ property }) => {
  const renderProperty = () =>
    property.property.map(item => <Property key={item.id} {...item} />);
  return (
    <div className="buy-property">
      <div className="buy-property-content">
        <p className="heading">Properties for sale in UAE</p>
        <p className="sub">{property.count} Properties found</p>
        <div className="property-list-container">{renderProperty()}</div>
      </div>
    </div>
  );
};

export default BuyProperty;
