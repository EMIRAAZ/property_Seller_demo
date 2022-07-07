import { connect } from 'react-redux';
import Header from './Header';
import {
  clearAddProperty,
  clearAddAgency,
  clearUpload,
  clearAddOffplan,
} from '../../../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    clearAddProperty: () => dispatch(clearAddProperty()),
    clearAddAgency: () => dispatch(clearAddAgency()),
    clearAddOffplan: () => dispatch(clearAddOffplan()),
    clearUpload: () => dispatch(clearUpload()),
  };
};

export default connect(null, mapDispatchToProps)(Header);
