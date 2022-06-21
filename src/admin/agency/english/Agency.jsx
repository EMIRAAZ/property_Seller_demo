import './agency.scss';
import Table from '../../../components/table';
import AdminHeader from '../../../components/adminheader';
import { tableHeader } from './table';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Agency = props => {
  let navigate = useNavigate();

  const navigateTo = id => {
    navigate(`/admin/add-agency/${id}`);
  };

  useEffect(() => {
    props.getAdminAgency();
  }, []);

  return (
    <div className="agency-admin-table">
      <AdminHeader />
      <Table
        rows={props.adminAgency.agency || []}
        columns={tableHeader}
        onEdit={id => {
          navigateTo(id);
        }}
        onClickDelete={id => {
          props.getAdminAgency();
          props.deleteAdminAgency(id, props.getAdminAgency);
        }}
        onChangePage={() => {}}
        count={4}
      />
    </div>
  );
};

export default Agency;
