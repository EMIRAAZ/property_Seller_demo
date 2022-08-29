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
    getLuxuryVillaWeb: p => dispatch(getLuxuryVillaWeb(p)),
    getLuxuryPenthouseWeb: p => dispatch(getLuxuryPenthouseWeb(p)),
    getLuxuryTownhouseWeb: p => dispatch(getLuxuryTownhouseWeb(p)),
    getLuxuryAppartmentWeb: p => dispatch(getLuxuryAppartmentWeb(p)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Luxuary);
