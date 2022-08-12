import './addform.scss';
import Input from '../../../components/input/admininput';
import Textarea from '../../../components/input/admintextarea';
import Select from '../../../components/select/adminSelect';
import ChipSelect from '../../../components/select/ChipSelect';
import Button from '../../../components/button/SpinnerButton';
import UploadImage from '../../../components/uploadimage';
import { useNavigate, useLocation } from 'react-router-dom';
import Spinner from '../../../components/spinner';
import { checkIfAllKeyHasValue } from '../../../utils';

const keyArr = ['title', 'description'];

const AddForm = ({
  addOffplan,
  editOffplan,
  env,
  onChange,
  images,
  imgLoading,
  imgError,
  offplanValue,
  offplanOptions,
  editing,
  clear,
}) => {
  let navigate = useNavigate();
  let location = useLocation();
  console.log(offplanValue);

  const getID = () => location.pathname.split('/').pop();

  const { amenities } = offplanOptions;

  const onChangeInput = (key, value) => {
    document.getElementById('on-add-warning').style.display = 'none';
    onChange({ key, value });
  };

  const addAdminOffplan = () => {
    if (checkIfAllKeyHasValue(offplanValue, keyArr)) {
      document.getElementById('on-add-warning').style.display = 'block';
      return;
    }
    if (editing) {
      editOffplan(
        getID(),
        { ...offplanValue, images: [...offplanValue.images, ...images] },
        () => {
          clear();
          navigate('/admin');
        }
      );
    } else {
      addOffplan({ ...offplanValue, images: [...images] }, () => {
        clear();
        navigate('/admin');
      });
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
    <div className="add-offplan-form">
      <div className="add-offplan-form-left">
        <Input
          divClass="offplan-input"
          label="Title"
          required
          value={offplanValue.title}
          onChange={e => onChangeInput('title', e.target.value)}
        />
        <Textarea
          divClass="offplan-input"
          label="Description"
          rows={8}
          onChange={e => onChangeInput('description', e.target.value)}
          value={offplanValue.description}
          required
        />
        <Textarea
          divClass="offplan-input"
          label="Place Address"
          rows={5}
          onChange={e => onChangeInput('placeAddress', e.target.value)}
          value={offplanValue.placeAddress}
          required
        />
        <Input
          divClass="offplan-input"
          label="Building"
          value={offplanValue.building}
          onChange={e => onChangeInput('building', e.target.value)}
        />
        <Input
          divClass="offplan-input"
          label="City"
          required
          value={offplanValue.city}
          onChange={e => onChangeInput('city', e.target.value)}
        />
        <p className="property-input amenities-instruction">
          Use comma to add multiple values in availability
        </p>
        <Input
          divClass="offplan-input"
          label="Availability"
          required
          value={offplanValue.availability.toString()}
          onChange={e => onChangeInput('availability', e.target.value)}
        />
        <p className="property-input amenities-instruction">
          Use comma to add multiple values in payment plan
        </p>
        <Input
          divClass="offplan-input"
          label="Payment Plan"
          required
          value={offplanValue.paymentPlan.toString()}
          onChange={e => onChangeInput('paymentPlan', e.target.value)}
        />
      </div>
      <div className="add-offplan-form-right">
        <p className="property-input amenities-instruction">
          Select multiple amenities from the drop down list to add multiple
          amenities to the property.
        </p>
        <ChipSelect
          customClass="property-input"
          label="Amenities"
          options={amenities}
          value={offplanValue.amenities}
          onChange={v => onChangeInput('amenities', v)}
          required
        />
        <Select
          customClass="property-input"
          label="Emirate"
          required
          value={offplanValue.emirate}
          options={offplanOptions.emirate}
          onChange={v => onChangeInput('emirate', v)}
        />
        <span className="select-border"></span>
        <label className="offplan-image-label spinner-label">
          Offplan Image<span>*</span> {renderImageLoadingSpinner()}
        </label>
        <UploadImage
          editing={editing}
          linkIndex={0}
          customClass="first-img-Class-admin"
          onChangeImage={() => {}}
          value={offplanValue.images}
        />

        <Button
          customClass="add-offplan-btn"
          onClick={addAdminOffplan}
          loading={env.loading}
        >
          ADD
        </Button>
        <span id="on-add-warning" className="offplan-input pls-fill">
          please fill all the required fields !!
        </span>
      </div>
    </div>
  );
};

export default AddForm;
