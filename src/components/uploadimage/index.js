import { connect } from 'react-redux';
import UploadImage from './UploadImage';

import { uploadAdminPropertyImage } from '../../redux/actions';

const mapStateToProps = state => {
  return {
    link: state.uploadReducer.link,
    loading: state.uploadReducer.loading,
    error: state.uploadReducer.error,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    uploadImage: (payload, cb, i) =>
      dispatch(uploadAdminPropertyImage(payload, cb, i)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);
