import { connect } from "react-redux";
import Blog from "./Blog";
import { getBlogWeb } from "../../../redux/actions";

const mapStateToProps = (state) => {
  return {
    blogs: state.blogwebReducer.blogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogWeb: (params) => dispatch(getBlogWeb(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
