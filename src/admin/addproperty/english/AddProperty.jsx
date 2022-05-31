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
          addProperty={props.addAdminProperty}
          env={props.env}
          onChange={props.onInputChange}
          images={props.images}
          imgLoading={props.imgLoading}
          imgError={props.imgError}
          propertyValue={props.propertyValue}
          propertyOptions={props.propertyOptions}
        />
      </div>
    </div>
  );
};

export default AddProperty;
