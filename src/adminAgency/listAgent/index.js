import { connect } from "react-redux";
import AgentList from "./AgentList";
import { getAgencyProperty, deleteAgencyProperty } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    agencyProperty: state.agencypropertyReducer.agencyProperty,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAgencyProperty: (params) => dispatch(getAgencyProperty(params)),
    deleteAgencyProperty: (id, cb) => dispatch(deleteAgencyProperty(id, cb)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgentList);
