import { connect } from 'react-redux';
import AddItem from './AddItem';
import { clearAgencyAddProperty } from '../../../redux/actions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    clearAgencyAddProperty: () => dispatch(clearAgencyAddProperty()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
