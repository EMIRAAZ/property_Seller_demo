import './addform.scss';
import Input from '../../../components/input/admininput';
import UploadImage from '../../../components/uploadimage';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import Spinner from '../../../components/spinner';
import { checkIfAllKeyHasValue } from '../../../utils';

const keyArr = [
  'agentName',
  'position',
  'yearsOfExperience',
  'username',
  'password',
  'languages',
];

const AddForm = ({
  addAgency,
  editAgency,
  env,
  onChange,
  images,
  imgLoading,
  imgError,
  agentValue,
  editing,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const onChangeInput = (key, value) => {
    onChange({ key, value });
  };

  const addAdminAgency = () => {
    if (checkIfAllKeyHasValue(agentValue, keyArr)) {
      document.getElementById('on-add-warning').style.opacity = '100';
      setInterval(() => {
        document.getElementById('on-add-warning').style.opacity = '0';
        return;
      }, 3000);
      return;
    }
    if (editing) {
      editAgency(
        getID(),
        {
          ...agentValue,
          agentLogo: images[0] ? images[0] : agentValue.agentLogo[0],
        },
        () => navigate('/admin/agent')
      );
    } else {
      addAgency({ ...agentValue, agentLogo: images[0] }, () =>
        navigate('/admin/agent')
      );
    }
  };

  const renderImageLoadingSpinner = () => {
    if (imgLoading) {
      return <Spinner />;
    } else if (imgError) {
      return <span className="img-add-error">Errored ! please try again</span>;
    }
  };

  return (
    <div className="add-agent-form">
      <div className="add-left-agent-form">
        <Input
          divClass="agent-input"
          label="Agent Name"
          required
          value={agentValue.agentName}
          onChange={e => onChangeInput('agentName', e.target.value)}
        />
        <label className="property-image-label spinner-label">
          Agent Image<span>*</span> {renderImageLoadingSpinner()}
        </label>

        <UploadImage
          editing={editing}
          linkIndex={0}
          customClass="agent-logo-img"
          onChangeImage={() => {}}
          value={[]}
        />
        <Input
          divClass="agent-input"
          label="Position"
          required
          value={agentValue.position}
          onChange={e => onChangeInput('position', e.target.value)}
        />
      </div>
      <div className="add-right-agent-form">
        <Input
          divClass="agent-input"
          label="Years Of Experience"
          required
          value={agentValue.yearsOfExperience}
          onChange={e => onChangeInput('yearsOfExperience', e.target.value)}
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
          value={''}
          onChange={e => onChangeInput('password', e.target.value)}
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
          onClick={addAdminAgency}
          loading={env.loading}
        >
          ADD
        </Button>
      </div>
    </div>
  );
};

export default AddForm;
