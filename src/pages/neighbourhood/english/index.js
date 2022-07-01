import NeighBourhood from './NeighBourhood';
import { connect } from 'react-redux';
import { getNeighborhoodWeb } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    neighbor: state.neighwebReducer.neighbor,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNeighborhoodWeb: params => dispatch(getNeighborhoodWeb(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NeighBourhood);
