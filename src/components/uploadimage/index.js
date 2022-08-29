import { connect } from 'react-redux';
import UploadImage from './UploadImage';

import { uploadAdminPropertyImage, removeImage } from '../../redux/actions';

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
    removeImage: img => dispatch(removeImage(img)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);
