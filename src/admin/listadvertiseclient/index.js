import { connect } from 'react-redux';
import Advertise from './ListAdvertiseClient';
import { getAdminAdvertise } from '../../redux/actions';

const mapStateToProps = state => {
  return {
    advertise: state.advertiseReducer.advertise,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdminAdvertise: params => dispatch(getAdminAdvertise(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Advertise);
