import { connect } from 'react-redux';
import Buy from './Buy';
import { getBuyProperty } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    buyProperty: state.buyReducer.buyProperty,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBuyProperty: params => dispatch(getBuyProperty(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
