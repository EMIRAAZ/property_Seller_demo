import { connect } from 'react-redux';
import Luxuary from './Luxuary';
import {
  getLuxuryVillaWeb,
  getLuxuryAppartmentWeb,
  getLuxuryPenthouseWeb,
  getLuxuryTownhouseWeb,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    villa: state.luxurywebReducer.villa,
    apartment: state.luxurywebReducer.apartment,
    penthouse: state.luxurywebReducer.penthouse,
    townhouse: state.luxurywebReducer.townhouse,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLuxuryVillaWeb: () => dispatch(getLuxuryVillaWeb()),
    getLuxuryPenthouseWeb: () => dispatch(getLuxuryPenthouseWeb()),
    getLuxuryTownhouseWeb: () => dispatch(getLuxuryTownhouseWeb()),
    getLuxuryAppartmentWeb: () => dispatch(getLuxuryAppartmentWeb()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Luxuary);
