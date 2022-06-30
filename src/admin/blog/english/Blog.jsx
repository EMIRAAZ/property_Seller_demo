import './blog.scss';
import Table from '../../../components/table';
import AdminHeader from '../../../components/adminheader';
import BlogHeader from '../blogheader';
import { tableHeader } from './table';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AddForm from '../addform';

const Blog = props => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const navigateTo = id => {
    navigate(`/admin/blog/${id}`);
  };

  useEffect(() => {
    props.getBlogAdmin();
    if (getID() !== 'blog') props.getByIdAdminBlog(getID());
  }, []);

  return (
    <div className="blog-admin-table">
      <AdminHeader />
      <BlogHeader />
      <div className="blog-admin-container">
        <div className="blog-admin-left">
          <Table
            rows={props.adminBlog.blog.rows || []}
            columns={tableHeader}
            onEdit={id => {
              navigateTo(id);
              props.getByIdAdminBlog(id);
            }}
            onClickDelete={id => {
              props.deleteAdminBlog(id, props.getBlogAdmin);
            }}
            onChangePage={page =>
              props.getBlogAdmin(`?offset=${page * 10 + 1}`)
            }
            count={props.adminBlog.blog.count || 0}
          />
        </div>
        <div className="blog-admin-right">
          <AddForm
            onChange={props.changeAdminBlogInput}
            clear={props.clearAddBlog}
            blogValue={props.blogValue}
            addBlog={props.addAdminBlog}
            getBlog={props.getBlogAdmin}
            editBlog={props.editAdminBlog}
            clearUpload={props.clearUpload}
            env={props.env}
            editing={getID() !== 'blog'}
            images={props.images}
            imgLoading={props.imgLoading}
            imgError={props.imgError}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
