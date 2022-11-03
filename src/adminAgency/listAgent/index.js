import { connect } from 'react-redux';
import AgentList from './AgentList';
import { listAgencyAgent } from '../../redux/actions';

const mapStateToProps = state => {
  return {
    agentList: state.agencylistagentReducer.agents,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listAgencyAgent: params => dispatch(listAgencyAgent(params)),
    // deleteAgencyProperty: (id, cb) => dispatch(deleteAgencyProperty(id, cb)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgentList);
