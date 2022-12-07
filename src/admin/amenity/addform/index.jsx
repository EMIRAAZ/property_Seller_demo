import './addform.scss';
import Input from '../../../components/input/admininput';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkIfAllKeyHasValue } from '../../../utils';
import SingleImageUpload from '../../../components/singleimageupload';

const keyArr = ['name'];

const AddForm = ({
  addAmenity,
  editAmenity,
  getAmenity,
  env,
  onChange,
  amenityValue,
  editing,
  clear,
  deleteAmenityLogo,
  addAmenityLogo,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const onChangeInput = (key, value) => {
    document.getElementById('on-add-warning').style.opacity = '0';
    onChange({ key, value });
  };

  const editCB = () => {
    getAmenity();
    navigate(`/admin/amenity`);
    clear();
  };

  const addAdminAmenity = () => {
    if (checkIfAllKeyHasValue(amenityValue, keyArr)) {
      document.getElementById('on-add-warning').style.opacity = '100';
      return;
    }
    if (editing) {
      editAmenity(
        getID(),
        {
          ...amenityValue,
        },
        () => editCB()
      );
    } else {
      addAmenity(
        {
          ...amenityValue,
        },
        () => editCB()
      );
    }
  };

  return (
    <div className="add-amenity-form">
      <Input
        divClass="amenity-input"
        label="Name"
        required
        value={amenityValue.name}
        onChange={e => onChangeInput('name', e.target.value)}
      />
      <SingleImageUpload
        name="amenityLogo"
        label="Amenity Logo"
        value={amenityValue.amenityLogo}
        onChange={addAmenityLogo}
        onDelete={deleteAmenityLogo}
      />

      <span id="on-add-warning" className="pls-fill">
        please fill all the required fields !!
      </span>

      <Button
        customClass="add-amenity-btn"
        onClick={addAdminAmenity}
        loading={env.loading}
      >
        ADD
      </Button>
    </div>
  );
};

export default AddForm;
