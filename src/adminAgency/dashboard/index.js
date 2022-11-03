import { connect } from 'react-redux';
import Home from './Dashboard';
import {
  clearAddAgent,
  clearUpload,
  clearAgencyAddProperty,
} from '../../redux/actions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    clearAddAgent: () => dispatch(clearAddAgent()),
    clearUpload: () => dispatch(clearUpload()),
    clearAgencyAddProperty: () => dispatch(clearAgencyAddProperty()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
