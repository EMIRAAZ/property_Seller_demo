import './homeproperty.scss';
import Property from '../../../components/property';

const HomeProperty = ({ property }) => {
  const renderProperty = () =>
    property.property.map(item => <Property key={item.id} {...item} />);
  return (
    <div className="home-property">
      <div className="home-property-content">
        <p className="heading">Properties</p>
        <p className="sub">{property.count} Properties found</p>
        <div className="property-list-container">{renderProperty()}</div>
      </div>
    </div>
  );
};

export default HomeProperty;
