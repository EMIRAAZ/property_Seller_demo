import './addoffplan.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AdminHeader from '../../../components/adminheader';
import OffplanHeader from '../offplanheader';
import AddForm from '../addform';

const AddOffplan = props => {
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  useEffect(() => {
    props.getAmenityOffplan();
    if (getID() !== 'add-offplan') props.getAdminOffplanById(getID());
  }, []);
  return (
    <div className="admin-add-offplan">
      <AdminHeader />
      <div className="admin-add-offplan-container">
        <OffplanHeader />
        <AddForm
          addOffplan={props.addAdminOffplan}
          editOffplan={props.editAdminOffplan}
          env={props.env}
          editing={getID() !== 'add-offplan'}
          onChange={props.onInputChange}
          images={props.images}
          imgLoading={props.imgLoading}
          imgError={props.imgError}
          offplanValue={props.offplanValue}
          offplanOptions={props.offplanOptions}
          clear={props.clearUpload}
        />
      </div>
    </div>
  );
};

export default AddOffplan;
