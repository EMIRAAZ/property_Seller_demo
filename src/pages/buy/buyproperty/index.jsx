import './buyproperty.scss';
import Property from '../../../components/property';

const BuyProperty = () => {
  return (
    <div className="buy-property">
      <div className="buy-property-content">
        <p className="heading">Properties for sale in UAE</p>
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

export default BuyProperty;
