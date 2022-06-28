import { connect } from 'react-redux';
import Rent from './Rent';
import {
  getRentProperty,
  onChangeRentParams,
  getRentLocationSearch,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    rentProperty: state.rentReducer.rentProperty,
    paramInput: state.rentReducer.paramInput,
    locationSearch: state.rentReducer.locationSearch,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRentProperty: params => dispatch(getRentProperty(params)),
    onChangeRentParams: input => dispatch(onChangeRentParams(input)),
    getRentLocationSearch: payload => dispatch(getRentLocationSearch(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rent);
