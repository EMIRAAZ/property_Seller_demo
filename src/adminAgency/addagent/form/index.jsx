import './form.scss';
import Input from '../../../components/input/admininput';
import UploadImage from '../../../components/uploadimage';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkIfAllKeyHasValue } from '../../../utils';
import SingleImageUpload from '../../../components/singleimageupload';

const keyArr = [
  'agentName',
  'position',
  'yearsOfExperience',
  'username',
  'languages',
  'rera',
  'orn',
  'phoneNumber',
  'whatsAppNumber',
];

const Form = ({
  addAgent,
  editAgent,
  env,
  onChange,
  agentValue,
  editing,
  clearAddAgency,
  clrUpload,
  deleteAgencyAgentImage,
  addAgencyAgentImage,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const onChangeInput = (key, value) => {
    // document.getElementById('on-add-warning').style.opacity = '0';
    onChange({ key, value });
  };

  const addAdminAgent = () => {
    if (checkIfAllKeyHasValue(agentValue, keyArr)) {
      // document.getElementById('on-add-warning').style.opacity = '100';
      return;
    }
    if (editing) {
      editAgent(
        getID(),
        {
          ...agentValue,
          agencyId: localStorage.getItem('agency_id'),
        },
        () => {
          clearAddAgency();
          clrUpload();
          navigate(`/agency/list-agent`);
        }
      );
    } else {
      addAgent(
        {
          ...agentValue,
          agencyId: localStorage.getItem('agency_id'),
        },
        () => {
          clearAddAgency();
          clrUpload();
          navigate(`/agency/list-agent`);
        }
      );
    }
  };

  return (
    <div className="agency-form-add-agency">
      <div className="add-left-agent-form">
        <Input
          divClass="agent-input"
          label="Agent Name"
          required
          value={agentValue.agentName}
          onChange={e => onChangeInput('agentName', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Position"
          required
          value={agentValue.position}
          onChange={e => onChangeInput('position', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="RERA"
          required
          value={agentValue.rera}
          onChange={e => onChangeInput('rera', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="ORN"
          required
          value={agentValue.orn}
          onChange={e => onChangeInput('orn', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Years Of Experience"
          required
          value={agentValue.yearsOfExperience}
          onChange={e => onChangeInput('yearsOfExperience', e.target.value)}
        />
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
      </div>
      <div className="add-right-agent-form">
        <SingleImageUpload
          name="agentImage"
          label="Agent Image"
          required
          value={agentValue.agentImage}
          onChange={addAgencyAgentImage}
          onDelete={deleteAgencyAgentImage}
        />
        <Input
          divClass="agent-input"
          label="Languages"
          required
          value={agentValue.languages.toString()}
          onChange={e => onChangeInput('languages', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Username"
          required
          value={agentValue.username}
          onChange={e => onChangeInput('username', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Password"
          required
          value={editing ? '' : agentValue.password}
          onChange={e => onChangeInput('password', e.target.value)}
        />
        <div className="agency-control-btn">
          <Button
            customClass="add-agent-btn cancel"
            // onClick={addAdminAgent}
            // loading={env.loading}
          >
            CANCEL
          </Button>
          <Button
            customClass="add-agent-btn"
            onClick={addAdminAgent}
            loading={env.loading}
          >
            ADD AGENT
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Form;
