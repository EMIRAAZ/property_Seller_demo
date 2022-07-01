import ListProperty from './ListProperty';
import { connect } from 'react-redux';
import { getCatFeatured, getRtmin } from '../../redux/actions';

const mapStateToProps = state => {
  return {
    featured: state.listpropReducer.featured,
    readyToMoveIn: state.listpropReducer.readyToMoveIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCatFeatured: params => dispatch(getCatFeatured(params)),
    getRtmin: params => dispatch(getRtmin(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProperty);
