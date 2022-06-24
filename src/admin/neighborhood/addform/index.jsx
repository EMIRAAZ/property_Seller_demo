import './addform.scss';
import Input from '../../../components/input/admininput';
import UploadImage from '../../../components/uploadimage';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import Spinner from '../../../components/spinner';
import { checkIfAllKeyHasValue } from '../../../utils';

const keyArr = ['title'];

const AddForm = ({
  addNeighborhood,
  editNeighborhood,
  getNeighborhood,
  env,
  onChange,
  images,
  imgLoading,
  imgError,
  neighborValue,
  editing,
  clear,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const onChangeInput = (key, value) => {
    document.getElementById('on-add-warning').style.opacity = '0';
    onChange({ key, value });
  };

  const editCB = () => {
    getNeighborhood();
    navigate(`/admin/neighborhood`);
    clear();
  };

  const addAdminNeighborhood = () => {
    if (checkIfAllKeyHasValue(neighborValue, keyArr)) {
      document.getElementById('on-add-warning').style.opacity = '100';
      return;
    }
    if (editing) {
      editNeighborhood(
        getID(),
        {
          ...neighborValue,
          images: images[0] ? images : neighborValue.images,
        },
        () => editCB()
      );
    } else {
      addNeighborhood(
        {
          ...neighborValue,
          images: images,
        },
        () => editCB()
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
    <div className="add-neighbor-form">
      <Input
        divClass="neighbor-input"
        label="Name"
        required
        value={neighborValue.title}
        onChange={e => onChangeInput('title', e.target.value)}
      />
      <label className="property-image-label spinner-label">
        Neighborhood Image<span>*</span> {renderImageLoadingSpinner()}
      </label>

      <UploadImage
        editing={editing}
        linkIndex={0}
        customClass="neighbor-logo-img"
        onChangeImage={() => {}}
        svg={true}
        value={neighborValue.images}
      />

      <span id="on-add-warning" className="pls-fill">
        please fill all the required fields !!
      </span>

      <Button
        customClass="add-neighbor-btn"
        onClick={addAdminNeighborhood}
        loading={env.loading}
      >
        ADD
      </Button>
    </div>
  );
};

export default AddForm;
