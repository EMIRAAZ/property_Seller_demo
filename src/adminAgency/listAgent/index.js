import { connect } from 'react-redux';
import AgentList from './AgentList';
import { listAgencyAgent, deleteAgencyAgent } from '../../redux/actions';

const mapStateToProps = state => {
  return {
    agentList: state.agencylistagentReducer.agents,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listAgencyAgent: params => dispatch(listAgencyAgent(params)),
    deleteAgencyAgent: (id, cb) => dispatch(deleteAgencyAgent(id, cb)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgentList);
