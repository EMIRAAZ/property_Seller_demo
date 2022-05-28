import { connect } from 'react-redux';
import Login from './Login';
import { loginAdmin } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    loading: state.adminloginReducer.loading,
    error: state.adminloginReducer.error,
    errorMsg: state.adminloginReducer.errorMsg,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAdmin: (payload, cb) => dispatch(loginAdmin(payload, cb)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
