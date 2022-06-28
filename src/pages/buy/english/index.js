import { connect } from 'react-redux';
import Buy from './Buy';
import {
  getBuyProperty,
  onChangeBuyParams,
  getBuyLocationSearch,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    buyProperty: state.buyReducer.buyProperty,
    paramInput: state.buyReducer.paramInput,
    locationSearch: state.buyReducer.locationSearch,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBuyProperty: params => dispatch(getBuyProperty(params)),
    onChangeBuyParams: input => dispatch(onChangeBuyParams(input)),
    getBuyLocationSearch: payload => dispatch(getBuyLocationSearch(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
