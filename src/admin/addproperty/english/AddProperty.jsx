import './addproperty.scss';
import { useEffect } from 'react';
import AdminHeader from '../../../components/adminheader';
import PropertyHeader from '../propertyheader';
import AddForm from '../addform';

const AddProperty = props => {
  useEffect(() => {
    props.getAgentProperty();
  }, []);
  return (
    <div className="admin-add-property">
      <AdminHeader />
      <div className="admin-add-property-container">
        <PropertyHeader />
        <AddForm
          addAdminProperty={props.addAdminProperty}
          property={props.addProperty}
          images={props.images}
          onChange={props.onInputChange}
          sale={props.sale}
          propertyType={props.propertyType}
          agent={props.agent}
          amenities={props.amenities}
          imgLoading={props.imgLoading}
          imgError={props.imgError}
          addAdmin={props.addAdmin}
        />
      </div>
    </div>
  );
};

export default AddProperty;
