import './addagent.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainComponent from '../maincomponent';
import AgencyHeadTag from '../../components/agencyheadtag';
import Form from './form';

const AddAgent = props => {
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  useEffect(() => {
    if (getID() !== 'add-agent') {
      props.getAdminAgentById(getID());
    }
  }, []);
  return (
    <MainComponent>
      <div className="agency-add-agent">
        <AgencyHeadTag
          main="Add Agent"
          sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Form
          addAgent={props.addAgencyAgent}
          editAgent={props.editAgencyAgent}
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
        />
      </div>
    </MainComponent>
  );
};

export default AddAgent;
