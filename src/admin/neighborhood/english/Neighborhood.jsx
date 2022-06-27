import './neighbor.scss';
import Table from '../../../components/table';
import AdminHeader from '../../../components/adminheader';
import NeighborHeader from '../neighborhoodheader';
import { tableHeader } from './table';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AddForm from '../addform';

const Property = props => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const navigateTo = id => {
    navigate(`/admin/neighborhood/${id}`);
  };

  useEffect(() => {
    props.getNeighborhoodAdmin();
    if (getID() !== 'neighborhood') props.getByIdAdminNeighborhood(getID());
  }, []);

  return (
    <div className="neighbor-admin-table">
      <AdminHeader />
      <NeighborHeader />
      <div className="neighbor-admin-container">
        <div className="neighbor-admin-left">
          <Table
            rows={props.adminNeighborhood.neighbor.rows || []}
            columns={tableHeader}
            onEdit={id => {
              navigateTo(id);
              props.getByIdAdminNeighborhood(id);
            }}
            onClickDelete={id => {
              props.deleteAdminNeighborhood(id, props.getNeighborhoodAdmin);
            }}
            onChangePage={page =>
              props.getNeighborhoodAdmin(`?offset=${page * 10 + 1}`)
            }
            count={props.adminNeighborhood.neighbor.count || 0}
          />
        </div>
        <div className="neighbor-admin-right">
          <AddForm
            onChange={props.changeAdminNeighborhoodInput}
            clear={props.clearAddNeighborhood}
            neighborValue={props.neighborValue}
            addNeighborhood={props.addAdminNeighborhood}
            getNeighborhood={props.getNeighborhoodAdmin}
            editNeighborhood={props.editAdminNeighborhood}
            env={props.env}
            editing={getID() !== 'neighborhood'}
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
