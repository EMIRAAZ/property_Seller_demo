import './addform.scss';
import Input from '../../../components/input/admininput';
import Button from '../../../components/button/SpinnerButton';
import UploadImage from '../../../components/uploadimage';
import { useNavigate, useLocation } from 'react-router-dom';
import Spinner from '../../../components/spinner';
import { checkIfAllKeyHasValue } from '../../../utils';
import Agent from '../agent';

const keyArr = ['agencyName'];

const AddForm = ({
  addAgency,
  editAgency,
  env,
  onChange,
  images,
  imgLoading,
  imgError,
  agencyValue,
  agentValue,
  editing,
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
          agencyLogo: images[0] ? images[0] : agencyValue.agencyLogo[0],
        },
        () => navigate('/admin/agency')
      );
    } else {
      addAgency({ ...agencyValue, agencyLogo: images[0] }, () =>
        navigate('/admin/agency')
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

  const renderAgent = () => {
    return agentValue.agent.map((agent, i) => <Agent key={i} {...agent} />);
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
        <label className="property-image-label spinner-label">
          Property Images<span>*</span> {renderImageLoadingSpinner()}
        </label>

        <UploadImage
          editing={editing}
          linkIndex={0}
          customClass="agency-logo-img"
          onChangeImage={() => {}}
          value={agencyValue.agencyLogo}
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
              onClick={() =>
                navigate('/admin/add-agent', { state: { id: getID() } })
              }
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
