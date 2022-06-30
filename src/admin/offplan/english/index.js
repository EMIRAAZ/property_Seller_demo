import { connect } from "react-redux";
import Offplan from "./Offplan";
import { getAdminAgency, deleteAdminAgency } from "../../../redux/actions";

const mapStateToProps = (state) => {
  return {
    adminAgency: state.adminagencyReducer.adminAgency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAdminAgency: (params) => dispatch(getAdminAgency(params)),
    deleteAdminAgency: (id, cb) => dispatch(deleteAdminAgency(id, cb)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offplan);
