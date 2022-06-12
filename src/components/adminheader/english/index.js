import { connect } from 'react-redux';
import Header from './Header';
import { clearAddProperty } from '../../../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    clearAddProperty: () => dispatch(clearAddProperty()),
  };
};

export default connect(null, mapDispatchToProps)(Header);
