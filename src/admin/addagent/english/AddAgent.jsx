import './addagent.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AdminHeader from '../../../components/adminheader';
import AgentHeader from '../agentheader';
import AddForm from '../addform';

const AddAgent = props => {
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  useEffect(() => {
    if (getID() !== 'add-agent') {
      props.getAdminAgentById(getID());
    }
  }, []);
  return (
    <div className="admin-add-agent">
      <AdminHeader />
      <div className="admin-add-agent-container">
        <AgentHeader />
        <AddForm
          addAgent={props.addAdminAgent}
          editAgent={props.editAdminAgent}
          env={props.env}
          editing={getID() !== 'add-agent'}
          onChange={props.onInputChange}
          images={props.images}
          imgLoading={props.imgLoading}
          imgError={props.imgError}
          agentValue={props.agentValue}
          agentOptions={props.agentOptions}
          clearAddAgency={props.clearAddAgency}
          clrUpload={props.clearUpload}
          addAgentImage={props.addAgentImage}
          deleteAgentImage={props.deleteAgentImage}
        />
      </div>
    </div>
  );
};

export default AddAgent;
