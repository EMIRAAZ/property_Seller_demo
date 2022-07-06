import { connect } from 'react-redux';
import AddAgency from './AddAgent';
import {
  changeAdminAgentInput,
  addAdminAgent,
  editAdminAgent,
  getAdminAgentById,
  clearAddAgency,
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
    onInputChange: payload => dispatch(changeAdminAgentInput(payload)),
    addAdminAgent: (payload, cb) => dispatch(addAdminAgent(payload, cb)),
    editAdminAgent: (id, payload, cb) =>
      dispatch(editAdminAgent(id, payload, cb)),
    getAdminAgentById: id => dispatch(getAdminAgentById(id)),
    clearAddAgency: () => dispatch(clearAddAgency()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAgency);
