import { connect } from 'react-redux';
import OffplanViewNew from './OffplanViewNew';

import { getOffplanProjectsByIdWeb } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    property: state.offplanwebReducer.singleOffplanProject.offplan.length
      ? state.offplanwebReducer.singleOffplanProject.offplan[0]
      : {},
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOffplanProjectsByIdWeb: id => dispatch(getOffplanProjectsByIdWeb(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OffplanViewNew);
