import { connect } from 'react-redux';
import Blog from './Blog';
import {
  getBlogAdmin,
  changeAdminBlogInput,
  addAdminBlog,
  getByIdAdminBlog,
  editAdminBlog,
  clearAddBlog,
  deleteAdminBlog,
  clearUpload,
  addBlogImage,
  deleteBlogImage,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    adminBlog: state.blogReducer,
    blogValue: state.blogReducer.blogValue,
    env: state.blogReducer.env,
    images: state.uploadReducer.link,
    imgLoading: state.uploadReducer.loading,
    imgError: state.uploadReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBlogAdmin: params => dispatch(getBlogAdmin(params)),
    changeAdminBlogInput: payload => dispatch(changeAdminBlogInput(payload)),
    addAdminBlog: (blog, cb) => dispatch(addAdminBlog(blog, cb)),
    editAdminBlog: (id, blog, cb) => dispatch(editAdminBlog(id, blog, cb)),
    getByIdAdminBlog: id => dispatch(getByIdAdminBlog(id)),
    deleteAdminBlog: (id, cb) => dispatch(deleteAdminBlog(id, cb)),
    clearAddBlog: () => dispatch(clearAddBlog()),
    clearUpload: () => dispatch(clearUpload()),
    deleteBlogImage: payload => dispatch(deleteBlogImage(payload)),
    addBlogImage: payload => dispatch(addBlogImage(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
