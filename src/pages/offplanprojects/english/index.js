import { connect } from 'react-redux';
import OffplanProject from './Offplan';
import { getOffplanProjectsWeb } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    offplan: state.offplanwebReducer.offplanProjects,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOffplanProjectsWeb: () => dispatch(getOffplanProjectsWeb()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OffplanProject);
