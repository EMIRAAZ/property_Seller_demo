import { connect } from 'react-redux';
import AddAgency from './AddAgent';
import {
  changeAdminAgencyInput,
  addAdminAgency,
  editAdminAgency,
  getAdminAgencyById,
  getAdminAgentByAgency,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    env: state.adminaddagencyReducer.env,
    agencyValue: state.adminaddagencyReducer.agencyValue,
    agentValue: state.adminaddagencyReducer.agentValue,
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
    getAdminAgencyById: id => dispatch(getAdminAgencyById(id)),
    getAdminAgentByAgency: agencyId =>
      dispatch(getAdminAgentByAgency(agencyId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAgency);
