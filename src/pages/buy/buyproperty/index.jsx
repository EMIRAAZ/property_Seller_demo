import './buyproperty.scss';
import PropertyList from '../../../components/propertylist';

const BuyProperty = () => {
  return (
    <div className="buy-property">
      <div className="buy-property-content">
        <p className="heading">Properties for sale in UAE</p>
        <p className="sub">3587 Properties found</p>
        <div className="property-list-container">
          <PropertyList />
          <PropertyList />
        </div>
      </div>
    </div>
  );
};

export default BuyProperty;
