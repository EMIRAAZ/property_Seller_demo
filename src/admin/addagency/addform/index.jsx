import './addform.scss';
import Input from '../../../components/input/admininput';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkIfAllKeyHasValue } from '../../../utils';
import Agent from '../agent';
import SingleImageUpload from '../../../components/singleimageupload';

const keyArr = [
  'agencyName',
  'username',
  'website',
];

const AddForm = ({
  addAgency,
  editAgency,
  env,
  onChange,
  deleteAgent,
  agencyValue,
  agentValue,
  editing,
  getAgentAgency,
  addAgencyLogo,
  deleteAgencyLogo,
  clearAgent,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const onChangeInput = (key, value) => {
    document.getElementById('on-add-warning').style.opacity = '0';
    onChange({ key, value });
  };

  const addAdminAgency = () => {
    if (checkIfAllKeyHasValue(agencyValue, keyArr)) {
      document.getElementById('on-add-warning').style.opacity = '100';
      return;
    }
    if (editing) {
      editAgency(
        getID(),
        {
          ...agencyValue,
        },
        () => navigate('/admin/agency')
      );
    } else {
      addAgency({ ...agencyValue }, () => navigate('/admin/agency'));
    }
  };

  const renderAgent = () => {
    return agentValue?.agent?.map((agent, i) => (
      <Agent
        key={i}
        {...agent}
        deleteAgent={deleteAgent}
        getAgentAgency={getAgentAgency}
      />
    ));
  };

  return (
    <div className="add-agency-form">
      <div className="add-left-agency-form">
      
        <Input
          divClass="agency-input"
          label="Agency Name"
          required
          value={agencyValue.agencyName}
          onChange={e => onChangeInput('agencyName', e.target.value)}
        />
        <Input
          divClass="agency-input"
          label="Username"
          required
          value={agencyValue.username}
          onChange={e => onChangeInput('username', e.target.value)}
        />{' '}
        <Input
          divClass="agency-input"
          label="Password"
          required
          value={agencyValue.password}
          onChange={e => onChangeInput('password', e.target.value)}
        />
        <SingleImageUpload
          name="agencyLogo"
          label="Agency Logo"
          required
          value={agencyValue.agencyLogo}
          onChange={addAgencyLogo}
          onDelete={deleteAgencyLogo}
        />
        <Input
          divClass="agency-input"
          label="Website"
          required
          value={agencyValue.website}
          onChange={e => onChangeInput('website', e.target.value)}
        />
    
        <span id="on-add-warning" className="pls-fill">
          please fill all the required fields !!
        </span>
        <Button
          customClass="add-agency-btn"
          onClick={addAdminAgency}
          loading={env.loading}
        >
          ADD
        </Button>
      </div>
      <div className="add-right-agency-form">
        {editing ? (
          <div className="agent-in-agency">
            <h2>Agent</h2>
            {renderAgent()}
            <Button
              customClass="add-agency-btn"
              onClick={() => {
                clearAgent();
                navigate('/admin/add-agent', { state: { id: getID() } });
              }}
            >
              ADD AGENT
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AddForm;
