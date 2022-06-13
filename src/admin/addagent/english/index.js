import { connect } from 'react-redux';
import AddAgency from './AddAgent';
import {
  changeAdminAgencyInput,
  addAdminAgency,
  editAdminAgency,
  getAdminAgentById,
  getAdminAgentByAgency,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    env: state.adminaddagentReducer.env,
    agentValue: state.adminaddagentReducer.agentValue,
    images: state.uploadReducer.link,
    imgLoading: state.uploadReducer.loading,
    imgError: state.uploadReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: payload => dispatch(changeAdminAgencyInput(payload)),
    addAdminAgency: (payload, cb) => dispatch(addAdminAgency(payload, cb)),
    editAdminAgency: (id, payload, cb) =>
      dispatch(editAdminAgency(id, payload, cb)),
    getAdminAgentById: id => dispatch(getAdminAgentById(id)),
    getAdminAgentByAgency: agencyId =>
      dispatch(getAdminAgentByAgency(agencyId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAgency);
