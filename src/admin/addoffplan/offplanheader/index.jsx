import './offplanheader.scss';

const OffplanHeader = props => {
  return (
    <div className="admin-add-offplan-header-container">
      <div className="admin-add-offplan-header">
        <p>Add Offplan</p>
      </div>
      <span>
        The most important feature in the product adding part. When adding
        products here, do not ignore to fill in all the required fields
        completely and follow the product adding rules
      </span>
    </div>
  );
};

export default OffplanHeader;
