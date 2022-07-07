import './offplan.scss';
import Table from '../../../components/table';
import AdminHeader from '../../../components/adminheader';
import { tableHeader } from './table';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Offplan = props => {
  let navigate = useNavigate();

  const navigateTo = id => {
    navigate(`/admin/add-offplan/${id}`);
  };

  useEffect(() => {
    props.getAdminOffplan();
  }, []);

  return (
    <div className="offplan-admin-table">
      <AdminHeader />
      <Table
        rows={props.adminOffplan.offplan || []}
        columns={tableHeader}
        onEdit={id => {
          navigateTo(id);
        }}
        onClickDelete={id => {
          props.getAdminOffplan();
          props.deleteAdminOffplan(id, props.getAdminOffplan);
        }}
        onChangePage={page => props.getAdminOffplan(`?offset=${page * 10 + 1}`)}
        count={props.adminOffplan.count || 0}
      />
    </div>
  );
};

export default Offplan;
