import { connect } from "react-redux";
import Offplan from "./Offplan";
import { getLuxuryVillaWeb } from "../../../redux/actions";

const mapStateToProps = (state) => {
  return {
    villa: state.luxurywebReducer.villa,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLuxuryVillaWeb: () => dispatch(getLuxuryVillaWeb()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offplan);
