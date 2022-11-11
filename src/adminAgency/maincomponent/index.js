import { connect } from 'react-redux';
import MainComponent from './MainComponent';
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
    clrAddAgent: () => dispatch(clearAddAgent()),
    clrUpload: () => dispatch(clearUpload()),
    clrProperty: () => dispatch(clearAgencyAddProperty()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
