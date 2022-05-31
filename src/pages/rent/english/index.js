import { connect } from 'react-redux';
import Rent from './Rent';
import { getRentProperty } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    rentProperty: state.rentReducer.rentProperty,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRentProperty: params => dispatch(getRentProperty(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rent);
