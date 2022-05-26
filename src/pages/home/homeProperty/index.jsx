import './homeproperty.scss';
import Property from '../../../components/property';

const HomeProperty = ({ property }) => {
  const renderProperty = () =>
    property.property.map(item => <Property key={item.id} {...item} />);

  const renderPropertyHeader = () => {
    if (property.property && property.property.length > 0)
      return (
        <>
          <p className="heading">Properties</p>
          <p className="sub">{property.count} Properties found</p>
        </>
      );
    else return null;
  };
  return (
    <div className="home-property">
      <div className="home-property-content">
        {renderPropertyHeader()}
        <div className="property-list-container">{renderProperty()}</div>
      </div>
    </div>
  );
};

export default HomeProperty;
