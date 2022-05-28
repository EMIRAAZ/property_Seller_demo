import './property.scss';
import Table from '../../../components/table';
import AdminHeader from '../../../components/adminheader';
import { tableHeader } from './table';
import { useEffect } from 'react';

const Property = props => {
  useEffect(() => {
    props.getAdminProperty();
  }, []);

  return (
    <div>
      <AdminHeader />
      <Table
        rows={props.adminProperty.property || []}
        columns={tableHeader}
        onEdit={() => {}}
        onClickDelete={() => {}}
        onChangePage={() => {}}
        count={4}
      />
    </div>
  );
};

export default Property;
