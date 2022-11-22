import { connect } from 'react-redux';
import AddAgent from './AddAgent';
import {
  changeAgencyAgentInput,
  addAgencyAgent,
  editAgencyAgent,
  getAgencyAgentById,
  clearAddAgency,
  clearUpload,
  deleteAgencyAgentImage,
  addAgencyAgentImage,
} from '../../redux/actions';

const mapStateToProps = state => {
  return {
    env: state.agencyagentReducer.env,
    agentValue: state.agencyagentReducer.agentValue,
    images: state.uploadReducer.link,
    imgLoading: state.uploadReducer.loading,
    imgError: state.uploadReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: payload => dispatch(changeAgencyAgentInput(payload)),
    addAgencyAgent: (payload, cb) => dispatch(addAgencyAgent(payload, cb)),
    editAgencyAgent: (id, payload, cb) =>
      dispatch(editAgencyAgent(id, payload, cb)),
    getAgencyAgentById: id => dispatch(getAgencyAgentById(id)),
    clearAddAgency: () => dispatch(clearAddAgency()),
    clearUpload: () => dispatch(clearUpload()),
    deleteAgencyAgentImage: payload =>
      dispatch(deleteAgencyAgentImage(payload)),
    addAgencyAgentImage: payload => dispatch(addAgencyAgentImage(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAgent);
