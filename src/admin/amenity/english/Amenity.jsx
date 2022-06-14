import './amenity.scss';
import Table from '../../../components/table';
import AdminHeader from '../../../components/adminheader';
import { tableHeader } from './table';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AddForm from '../addform';

const Property = props => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const navigateTo = id => {
    navigate(`/admin/amenity/${id}`);
  };

  useEffect(() => {
    props.getAmenityAdmin();
    if (getID() !== 'amenity') props.getByIdAdminAmenity(getID());
  }, []);

  return (
    <div className="amenity-admin-table">
      <AdminHeader />
      <div className="amenity-admin-container">
        <div className="amenity-admin-left">
          <Table
            rows={props.adminAmenity.amenity.rows || []}
            columns={tableHeader}
            onEdit={id => {
              navigateTo(id);
              props.getByIdAdminAmenity(id);
            }}
            onClickDelete={id => {
              props.getAdminProperty();
              props.deleteAdminProperty(id, props.getAdminProperty);
            }}
            onChangePage={() => {}}
            count={4}
          />
        </div>
        <div className="amenity-admin-right">
          <AddForm
            onChange={props.changeAdminAmenityInput}
            amenityValue={props.amenityValue}
            addAmenity={props.addAdminAmenity}
            editAmenity={props.editAdminAmenity}
            env={props.env}
            editing={getID() !== 'amenity'}
            images={props.images}
            imgLoading={props.imgLoading}
            imgError={props.imgError}
          />
        </div>
      </div>
    </div>
  );
};

export default Property;
