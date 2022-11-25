import { connect } from 'react-redux';
import OffplanProject from './Offplan';
import { getOffplanWeb } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    offplan: state.offplanwebReducer.offplanProjects,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOffplanWeb: () => dispatch(getOffplanWeb()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OffplanProject);
