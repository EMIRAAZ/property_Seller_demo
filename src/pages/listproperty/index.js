import ListProperty from './ListProperty';
import { connect } from 'react-redux';
import {
  getCatFeatured,
  getRtmin,
  onChangeListPropParams,
  getListpropLocationSearch,
} from '../../redux/actions';

const mapStateToProps = state => {
  return {
    featured: state.listpropReducer.featured,
    readyToMoveIn: state.listpropReducer.readyToMoveIn,
    listSearch: state.listpropReducer.listSearch,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCatFeatured: params => dispatch(getCatFeatured(params)),
    getRtmin: params => dispatch(getRtmin(params)),
    onChangeListPropParams: input => dispatch(onChangeListPropParams(input)),
    getListpropLocationSearch: location =>
      dispatch(getListpropLocationSearch(location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProperty);
