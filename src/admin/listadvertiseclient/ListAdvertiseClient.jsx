import './listadvertiseclient.scss';
import Table from '../../components/table';
import AdminHeader from '../../components/adminheader';
import { tableHeader } from './table';
import { useEffect } from 'react';

const Advertise = props => {
  useEffect(() => {
    props.getAdminAdvertise();
  }, []);

  return (
    <div className="offplan-admin-table">
      <AdminHeader />
      <Table
        addAction={false}
        rows={props.advertise.list || []}
        columns={tableHeader}
        onEdit={() => {}}
        onClickDelete={() => {}}
        onChangePage={page =>
          props.getAdminAdvertise(`?offset=${page * 10 + 1}`)
        }
        count={props.advertise.count}
      />
    </div>
  );
};

export default Advertise;
