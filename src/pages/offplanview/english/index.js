import { connect } from 'react-redux';
import OffplanView from './OffplanView';
import { getOffplanByIdWeb } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    offplan: state.offplanwebReducer.singleOffplan.offplan.length
      ? state.offplanwebReducer.singleOffplan.offplan[0]
      : {},
    loading: state.offplanwebReducer.singleOffplan.loading,
    error: state.offplanwebReducer.singleOffplan.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOffplanByIdWeb: id => dispatch(getOffplanByIdWeb(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OffplanView);
