import { connect } from 'react-redux';
import Offplan from './Offplan';
import { getOffplanWeb } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    offplan: state.offplanwebReducer.offplan,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOffplanWeb: () => dispatch(getOffplanWeb()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offplan);
