import ListProperty from './ListProperty';
import { connect } from 'react-redux';
import {
  getCatFeatured,
  getRtmin,
  onChangePropsList,
  getListpropLocationSearch,
  getPropWithNeighSale,
  getVP,
  getPropWithTag,
} from '../../redux/actions';

const mapStateToProps = state => {
  return {
    featured: state.listpropReducer.featured,
    readyToMoveIn: state.listpropReducer.readyToMoveIn,
    listSearch: state.listpropReducer.listSearch,
    propWithNeighbor: state.listpropReducer.propWithNeighbor,
    vp: state.listpropReducer.vp,
    tag: state.listpropReducer.tag,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCatFeatured: params => dispatch(getCatFeatured(params)),
    getPropWithTag: params => dispatch(getPropWithTag(params)),
    getVP: params => dispatch(getVP(params)),
    getPropWithNeighSale: param => dispatch(getPropWithNeighSale(param)),
    getRtmin: params => dispatch(getRtmin(params)),
    inputChange: input => dispatch(onChangePropsList(input)),
    getListpropLocationSearch: location =>
      dispatch(getListpropLocationSearch(location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProperty);
