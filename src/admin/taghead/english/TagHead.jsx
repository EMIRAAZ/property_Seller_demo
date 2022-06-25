import './taghead.scss';
import Table from '../../../components/table';
import AdminHeader from '../../../components/adminheader';
import TagHeader from '../tagheadheader';
import { tableHeader } from './table';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AddForm from '../addform';

const TagHead = props => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const navigateTo = id => {
    navigate(`/admin/taghead/${id}`);
  };

  useEffect(() => {
    props.getTagHeadAdmin();
    if (getID() !== 'taghead') props.getByIdAdminTagHead(getID());
  }, []);

  return (
    <div className="taghead-admin-table">
      <AdminHeader />
      <TagHeader />
      <div className="taghead-admin-container">
        <div className="taghead-admin-left">
          <Table
            rows={props.adminTagHead.taghead.rows || []}
            columns={tableHeader}
            onEdit={id => {
              navigateTo(id);
              props.getByIdAdminTagHead(id);
            }}
            onClickDelete={id => {
              props.deleteAdminTagHead(id, props.getTagHeadAdmin);
            }}
            onChangePage={() => {}}
            count={4}
          />
        </div>
        <div className="taghead-admin-right">
          <AddForm
            onChange={props.changeAdminTagHeadInput}
            clear={props.clearAddTagHead}
            tagheadValue={props.tagheadValue}
            addTagHead={props.addAdminTagHead}
            getTagHead={props.getTagHeadAdmin}
            editTagHead={props.editAdminTagHead}
            env={props.env}
            editing={getID() !== 'taghead'}
          />
        </div>
      </div>
    </div>
  );
};

export default TagHead;
