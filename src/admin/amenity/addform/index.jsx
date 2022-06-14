import './addform.scss';
import Input from '../../../components/input/admininput';
import UploadImage from '../../../components/uploadimage';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import Spinner from '../../../components/spinner';
import { checkIfAllKeyHasValue } from '../../../utils';
import { max } from 'moment';

const keyArr = ['name', 'amenityLogo'];

const AddForm = ({
  addAmenity,
  editAmenity,
  env,
  onChange,
  images,
  imgLoading,
  imgError,
  amenityValue,
  editing,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const onChangeInput = (key, value) => {
    document.getElementById('on-add-warning').style.opacity = '0';
    onChange({ key, value });
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
          amenityLogo: images[0] ? images[0] : amenityValue.amenityLogo[0],
        },
        () => navigate(`/admin/amenity/${amenityValue.agencyId}`)
      );
    } else {
      addAmenity(
        {
          ...amenityValue,
          amenityLogo: images[0],
        },
        () => navigate(`/admin/amenity`)
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
    <div className="add-amenity-form">
      <Input
        divClass="amenity-input"
        label="Name"
        required
        value={amenityValue.name}
        onChange={e => onChangeInput('name', e.target.value)}
      />
      <label className="property-image-label spinner-label">
        Amenity Image<span>*</span> {renderImageLoadingSpinner()}
      </label>

      <UploadImage
        editing={editing}
        linkIndex={0}
        customClass="amenity-logo-img"
        onChangeImage={() => {}}
        svg={true}
        value={amenityValue.amenityLogo}
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
