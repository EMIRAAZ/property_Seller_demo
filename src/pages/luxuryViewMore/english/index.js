import { connect } from 'react-redux';
import LuxuaryViewMore from './LuxuryViewMore';
import { getLuxuryWithTypeWeb } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    luxury: state.luxurywebReducer.luxury,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLuxuryWithTypeWeb: (propertyType, offset) =>
      dispatch(getLuxuryWithTypeWeb(propertyType, offset)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LuxuaryViewMore);
