import ListProperty from './ListProperty';
import { connect } from 'react-redux';
import {
  getCatFeatured,
  getRtmin,
  onChangeListPropParams,
  getListpropLocationSearch,
  getPropWithNeighSale,
  getVP,
} from '../../redux/actions';

const mapStateToProps = state => {
  return {
    featured: state.listpropReducer.featured,
    readyToMoveIn: state.listpropReducer.readyToMoveIn,
    listSearch: state.listpropReducer.listSearch,
    propWithNeighbor: state.listpropReducer.propWithNeighbor,
    vp: state.listpropReducer.vp,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCatFeatured: params => dispatch(getCatFeatured(params)),
    getVP: params => dispatch(getVP(params)),
    getPropWithNeighSale: param => dispatch(getPropWithNeighSale(param)),
    getRtmin: params => dispatch(getRtmin(params)),
    onChangeListPropParams: input => dispatch(onChangeListPropParams(input)),
    getListpropLocationSearch: location =>
      dispatch(getListpropLocationSearch(location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProperty);
