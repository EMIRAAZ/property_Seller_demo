import './propertyheader.scss';

const PropertyHeader = props => {
  return (
    <div className="admin-add-property-header-container">
      <div className="admin-add-property-header">
        <p>Add Property</p>
      </div>
      <span>
        The most important feature in the product adding part. When adding
        products here, do not ignore to fill in all the required fields
        completely and follow the product adding rules
      </span>
    </div>
  );
};

export default PropertyHeader;
