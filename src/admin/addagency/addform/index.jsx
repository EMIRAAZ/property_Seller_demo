import './addform.scss';
import Input from '../../../components/input/admininput';
import Button from '../../../components/button/SpinnerButton';
import UploadImage from '../../../components/uploadimage';
import { useNavigate, useLocation } from 'react-router-dom';
import Spinner from '../../../components/spinner';
import { checkIfAllKeyHasValue } from '../../../utils';

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
  editing,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const onChangeInput = (key, value) => {
    onChange({ key, value });
  };

  const addAdminAgency = () => {
    if (checkIfAllKeyHasValue(agencyValue, keyArr)) {
      document.getElementById('on-add-warning').style.display = 'block';
      setInterval(() => {
        document.getElementById('on-add-warning').style.display = 'none';
        return;
      }, 3000);
      return;
    }
    if (editing) {
      editAgency(getID(), { ...agencyValue, images: images }, () =>
        navigate('/admin')
      );
    } else {
      addAgency({ ...agencyValue, agencyLogo: images[0] }, () =>
        navigate('/admin')
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
    <div className="add-agency-form">
      <Input
        divClass="agency-input"
        label="Agency Name"
        required
        value={agencyValue.title}
        onChange={e => onChangeInput('agencyName', e.target.value)}
      />

      <UploadImage
        linkIndex={0}
        customClass="agency-logo-img"
        onChangeImage={() => {}}
        value={agencyValue.agencyLogo}
      />

      <Button
        customClass="add-agency-btn"
        onClick={addAdminAgency}
        loading={env.loading}
      >
        ADD
      </Button>
      <span id="on-add-warning" className="pls-fill">
        please fill all the required fields !!
      </span>
    </div>
  );
};

export default AddForm;
