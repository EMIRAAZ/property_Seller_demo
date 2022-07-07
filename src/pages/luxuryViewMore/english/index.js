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
    getLuxuryWithTypeWeb: propertyType =>
      dispatch(getLuxuryWithTypeWeb(propertyType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LuxuaryViewMore);
