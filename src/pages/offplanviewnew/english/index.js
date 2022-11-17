import { connect } from 'react-redux';
import OffplanViewNew from './OffplanViewNew';

import { getOffplanByIdWeb, getSimilarProperty } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    property: state.offplanwebReducer.singleOffplan.offplan.length
      ? state.offplanwebReducer.singleOffplan.offplan[0]
      : {},
    similarProperty: state.propertyReducer.similarProperty,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOffplanByIdWeb: id => dispatch(getOffplanByIdWeb(id)),

    getSimilarProperty: city => dispatch(getSimilarProperty(city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OffplanViewNew);
