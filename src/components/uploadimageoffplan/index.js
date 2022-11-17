import { connect } from 'react-redux';
import UploadOffplanImage from './UploadImageOffplan';

import { uploadOffplanAdminImage } from '../../redux/actions';

const mapStateToProps = state => {
  return {
    link: state.uploadReducer.offplanLink,
    loading: state.uploadReducer.offplanLoading,
    error: state.uploadReducer.offplanError,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    uploadOffplanAdminImage: (payload, cb, i) => {
      dispatch(uploadOffplanAdminImage(payload, cb, i));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadOffplanImage);
