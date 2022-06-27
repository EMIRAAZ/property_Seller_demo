import './news.scss';
import Table from '../../../components/table';
import AdminHeader from '../../../components/adminheader';
import NewsHeader from '../newsheader';
import { tableHeader } from './table';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AddForm from '../addform';

const News = props => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const navigateTo = id => {
    navigate(`/admin/news/${id}`);
  };

  useEffect(() => {
    props.getNewsAdmin();
    props.getTopicsNews();
    if (getID() !== 'news') props.getByIdAdminNews(getID());
  }, []);

  return (
    <div className="news-admin-table">
      <AdminHeader />
      <NewsHeader />
      <div className="news-admin-container">
        <div className="news-admin-left">
          <Table
            rows={props.adminNews.news.rows || []}
            columns={tableHeader}
            onEdit={id => {
              navigateTo(id);
              props.getByIdAdminNews(id);
            }}
            onClickDelete={id => {
              props.deleteAdminNews(id, props.getNewsAdmin);
            }}
            onChangePage={page =>
              props.getNewsAdmin(`?offset=${page * 10 + 1}`)
            }
            count={props.adminNews.news.count || 0}
          />
        </div>
        <div className="news-admin-right">
          <AddForm
            onChange={props.changeAdminNewsInput}
            topics={props.topics}
            clear={props.clearAddNews}
            newsValue={props.newsValue}
            addNews={props.addAdminNews}
            getNews={props.getNewsAdmin}
            editNews={props.editAdminNews}
            env={props.env}
            editing={getID() !== 'news'}
            images={props.images}
            imgLoading={props.imgLoading}
            imgError={props.imgError}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
