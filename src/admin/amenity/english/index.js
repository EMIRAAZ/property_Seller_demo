import { connect } from 'react-redux';
import Amenity from './Amenity';
import {
  getAmenityAdmin,
  changeAdminAmenityInput,
  addAdminAmenity,
  getByIdAdminAmenity,
  editAdminAmenity,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    adminAmenity: state.amenityReducer,
    amenityValue: state.amenityReducer.amenityValue,
    env: state.amenityReducer.env,
    images: state.uploadReducer.link,
    imgLoading: state.uploadReducer.loading,
    imgError: state.uploadReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAmenityAdmin: params => dispatch(getAmenityAdmin(params)),
    changeAdminAmenityInput: payload =>
      dispatch(changeAdminAmenityInput(payload)),
    addAdminAmenity: (amenity, cb) => dispatch(addAdminAmenity(amenity, cb)),
    editAdminAmenity: (id, amenity, cb) =>
      dispatch(editAdminAmenity(id, amenity, cb)),
    getByIdAdminAmenity: id => dispatch(getByIdAdminAmenity(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Amenity);
