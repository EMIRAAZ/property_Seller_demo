import './homeproperty.scss';
import PropertyList from '../../../components/propertylist';

const HomeProperty = () => {
  return (
    <div className="home-property">
      <div className="home-property-content">
        <p className="heading">Properties</p>
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

export default HomeProperty;
