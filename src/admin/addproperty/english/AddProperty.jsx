import './addproperty.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AdminHeader from '../../../components/adminheader';
import PropertyHeader from '../propertyheader';
import AddForm from '../addform';

const AddProperty = props => {
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  useEffect(() => {
    props.getAgentProperty();
    props.getAmenityProperty();
    props.getAdminPropertyById(getID());
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
