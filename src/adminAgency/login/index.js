import { connect } from 'react-redux';
import Login from './Login';
import { loginAgency } from '../../redux/actions';

const mapStateToProps = state => {
  return {
    loading: state.agencyloginReducer.loading,
    error: state.agencyloginReducer.error,
    errorMsg: state.agencyloginReducer.errorMsg,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAgency: (payload, cb) => dispatch(loginAgency(payload, cb)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
