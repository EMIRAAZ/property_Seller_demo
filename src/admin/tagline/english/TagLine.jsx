import './tagline.scss';
import Table from '../../../components/table';
import AdminHeader from '../../../components/adminheader';
import TagLineHeader from '../taglineheader';
import { tableHeader } from './table';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AddForm from '../addform';

const TagLine = props => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const navigateTo = id => {
    navigate(`/admin/tagline/${id}`);
  };

  useEffect(() => {
    props.getTagLineAdmin();
    props.getTagHeadTagLine();
    if (getID() !== 'tagline') props.getByIdAdminTagLine(getID());
  }, []);

  return (
    <div className="tagline-admin-table">
      <AdminHeader />
      <TagLineHeader />
      <div className="tagline-admin-container">
        <div className="tagline-admin-left">
          <Table
            rows={props.adminTagLine.tagline.rows || []}
            columns={tableHeader}
            onEdit={id => {
              navigateTo(id);
              props.getByIdAdminTagLine(id);
            }}
            onClickDelete={id => {
              props.deleteAdminTagLine(id, props.getTagLineAdmin);
            }}
            onChangePage={page =>
              props.getTagLineAdmin(`?offset=${page * 10 + 1}`)
            }
            count={props.adminTagLine.tagline.count || 0}
          />
        </div>
        <div className="tagline-admin-right">
          <AddForm
            onChange={props.changeAdminTagLineInput}
            taghead={props.taghead}
            clear={props.clearAddTagLine}
            taglineValue={props.taglineValue}
            addTagLine={props.addAdminTagLine}
            getTagLine={props.getTagLineAdmin}
            editTagLine={props.editAdminTagLine}
            env={props.env}
            editing={getID() !== 'tagline'}
          />
        </div>
      </div>
    </div>
  );
};

export default TagLine;
