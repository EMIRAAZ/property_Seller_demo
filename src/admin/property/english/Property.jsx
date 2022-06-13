import './property.scss';
import Table from '../../../components/table';
import AdminHeader from '../../../components/adminheader';
import { tableHeader } from './table';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Property = props => {
  let navigate = useNavigate();

  const navigateTo = id => {
    navigate(`/admin/add-property/${id}`);
  };

  useEffect(() => {
    props.getAdminProperty();
  }, []);

  return (
    <div className="property-admin-table">
      <AdminHeader />
      <Table
        rows={props.adminProperty.property || []}
        columns={tableHeader}
        onEdit={id => {
          navigateTo(id);
        }}
        onClickDelete={id => {
          props.getAdminProperty();
          props.deleteAdminProperty(id, props.getAdminProperty);
        }}
        onChangePage={() => {}}
        count={4}
      />
    </div>
  );
};

export default Property;
