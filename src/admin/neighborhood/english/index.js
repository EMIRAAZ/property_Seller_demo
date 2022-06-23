import { connect } from 'react-redux';
import Neighborhood from './Neighborhood';
import {
  getNeighborhoodAdmin,
  changeAdminNeighborhoodInput,
  addAdminNeighborhood,
  getByIdAdminNeighborhood,
  editAdminNeighborhood,
  clearAddNeighborhood,
  deleteAdminNeighborhood,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    adminNeighborhood: state.neighborReducer,
    neighborValue: state.neighborReducer.neighborValue,
    env: state.neighborReducer.env,
    images: state.uploadReducer.link,
    imgLoading: state.uploadReducer.loading,
    imgError: state.uploadReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNeighborhoodAdmin: params => dispatch(getNeighborhoodAdmin(params)),
    changeAdminNeighborhoodInput: payload =>
      dispatch(changeAdminNeighborhoodInput(payload)),
    addAdminNeighborhood: (neighbor, cb) =>
      dispatch(addAdminNeighborhood(neighbor, cb)),
    editAdminNeighborhood: (id, neighbor, cb) =>
      dispatch(editAdminNeighborhood(id, neighbor, cb)),
    getByIdAdminNeighborhood: id => dispatch(getByIdAdminNeighborhood(id)),
    deleteAdminNeighborhood: (id, cb) =>
      dispatch(deleteAdminNeighborhood(id, cb)),
    clearAddNeighborhood: () => dispatch(clearAddNeighborhood()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Neighborhood);
