import { connect } from 'react-redux';
import Header from './Header';
import { clearAddProperty, clearAddAgency } from '../../../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    clearAddProperty: () => dispatch(clearAddProperty()),
    clearAddAgency: () => dispatch(clearAddAgency()),
  };
};

export default connect(null, mapDispatchToProps)(Header);
