import { connect } from 'react-redux';
import Blog from './Nft';
import { getByIdBlog } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    blog: state.blogwebReducer.singleBlog.blog.length
      ? state.blogwebReducer.singleBlog.blog[0]
      : {},
    loading: state.blogwebReducer.singleBlog.loading,
    error: state.blogwebReducer.singleBlog.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getByIdBlog: id => dispatch(getByIdBlog(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
