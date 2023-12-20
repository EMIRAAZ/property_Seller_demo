import './addform.scss';
import Input from '../../../components/input/admininput';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkIfAllKeyHasValue } from '../../../utils';
import SingleImageUpload from '../../../components/singleimageupload';

const keyArr = [
  'agentName',
  'languages',
  'phoneNumber',
  'whatsAppNumber',
];

const AddForm = ({
  addAgent,
  editAgent,
  env,
  onChange,
  agentValue,
  editing,
  clearAddAgency,
  clrUpload,
  deleteAgentImage,
  addAgentImage,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const onChangeInput = (key, value) => {
    document.getElementById('on-add-warning').style.opacity = '0';
    onChange({ key, value });
  };

  const addAdminAgent = () => {
    if (checkIfAllKeyHasValue(agentValue, keyArr)) {
      document.getElementById('on-add-warning').style.opacity = '100';
      return;
    }
    if (editing) {
      editAgent(
        getID(),
        {
          ...agentValue,
        },
        () => {
          clearAddAgency();
          clrUpload();
          navigate(`/admin/add-agency/${agentValue.agencyId}`);
        }
      );
    } else {
      addAgent({ ...agentValue, agencyId: location.state.id }, () => {
        clearAddAgency();
        clrUpload();
        navigate(`/admin/add-agency/${location.state.id}`);
      });
    }
  };

  return (
    <div className="add-agent-form">
      <div className="add-left-agent-form">
      <br />
        <br />
        <br />
        
        {
          JSON.stringify(agentValue) 
        }
        agentValue
        <br />
        <br />
        <br />
        <br />
        {
          JSON.stringify(keyArr)
        }
        keyArr
        <Input
          divClass="agent-input"
          label="Name"
          required
          value={agentValue.agentName}
          onChange={e => onChangeInput('agentName', e.target.value)}
        />
        <SingleImageUpload
          name="agentLogo"
          label="Agent Logo"
          required
          value={agentValue.agentImage}
          onChange={addAgentImage}
          onDelete={deleteAgentImage}
        />
      </div>
      <div className="add-right-agent-form">
        <Input
          divClass="agent-input"
          label="Phone Number"
          required
          value={agentValue.phoneNumber}
          onChange={e => onChangeInput('phoneNumber', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Whatsapp Number"
          required
          value={agentValue.whatsAppNumber}
          onChange={e => onChangeInput('whatsAppNumber', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Languages"
          required
          value={agentValue.languages.toString()}
          onChange={e => onChangeInput('languages', e.target.value)}
        />
        <span id="on-add-warning" className="pls-fill">
          please fill all the required fields !!
        </span>
        <Button
          customClass="add-agent-btn"
          onClick={addAdminAgent}
          loading={env.loading}
        >
          ADD
        </Button>
      </div>
    </div>
  );
};

export default AddForm;
