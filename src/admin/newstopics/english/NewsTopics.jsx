import './newstopics.scss';
import Table from '../../../components/table';
import AdminHeader from '../../../components/adminheader';
import NewsTopicsHeader from '../newstopicsheader';
import { tableHeader } from './table';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AddForm from '../addform';

const NewsTopics = props => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const navigateTo = id => {
    navigate(`/admin/newstopics/${id}`);
  };

  useEffect(() => {
    props.getNewsTopicsAdmin();
    if (getID() !== 'newstopics') props.getByIdAdminNewsTopics(getID());
  }, []);

  return (
    <div className="newstopics-admin-table">
      <AdminHeader />
      <NewsTopicsHeader />
      <div className="newstopics-admin-container">
        <div className="newstopics-admin-left">
          <Table
            rows={props.adminNewsTopics.newstopics.rows || []}
            columns={tableHeader}
            onEdit={id => {
              navigateTo(id);
              props.getByIdAdminNewsTopics(id);
            }}
            onClickDelete={id => {
              props.deleteAdminNewsTopics(id, props.getNewsTopicsAdmin);
            }}
            onChangePage={page =>
              props.getNewsTopicsAdmin(`?offset=${page * 10 + 1}`)
            }
            count={props.adminNewsTopics.newstopics.count || 0}
          />
        </div>
        <div className="newstopics-admin-right">
          <AddForm
            onChange={props.changeAdminNewsTopicsInput}
            clear={props.clearAddNewsTopics}
            newstopicsValue={props.newstopicsValue}
            addNewsTopics={props.addAdminNewsTopics}
            getNewsTopics={props.getNewsTopicsAdmin}
            editNewsTopics={props.editAdminNewsTopics}
            env={props.env}
            editing={getID() !== 'newstopics'}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsTopics;
