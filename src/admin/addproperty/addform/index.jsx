import './addform.scss';
import Input from '../../../components/input/admininput';
import Checkbox from '../../../components/input/checkbox';
import Textarea from '../../../components/input/admintextarea';
import Select from '../../../components/select/adminSelect';
import ChipSelect from '../../../components/select/ChipSelect';
import Button from '../../../components/button/SpinnerButton';
import UploadImage from '../../../components/uploadimage';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../../../components/spinner';
import { checkIfAllKeyHasValue } from '../../../utils';
import Plus from '../../../components/svg/plus';

const keyArr = [
  'title',
  'description',
  'placeAddress',
  'city',
  'propertySize',
  'propertySizeUnit',
  'propertyType',
  'propertyAge',
  'noOfBedroom',
  'noOfBathroom',
  'referenceNo',
  'trakheesiPermit',
  'ownership',
  'brokerORN',
  'agentBRN',
  'call',
  'email',
  'whatsapp',
  'for',
  'city',
  'agentId',
  'mainTitle',
];

const AddForm = ({
  addProperty,
  editProperty,
  env,
  onChange,
  images,
  imgLoading,
  imgError,
  propertyValue,
  propertyOptions,
  editing,
  clear,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const [uploadCount, setUploadCount] = useState([0]);

  useEffect(() => {
    if (propertyValue.images.length > 0 && editing) {
      setUploadCount([...propertyValue.images]);
    }
  }, [propertyValue.images]);

  const getID = () => location.pathname.split('/').pop();

  const { agent, propertyType, amenities, sale } = propertyOptions;

  const onChangeInput = (key, value) => {
    document.getElementById('on-add-warning').style.display = 'none';
    onChange({ key, value });
  };

  const onSetUploadCount = () => {
    setUploadCount([...uploadCount, 0]);
  };

  const addAdminProperty = () => {
    if (checkIfAllKeyHasValue(propertyValue, keyArr)) {
      document.getElementById('on-add-warning').style.display = 'block';
      return;
    }
    if (editing) {
      editProperty(
        getID(),
        { ...propertyValue, images: [...propertyValue.images, ...images] },
        () => {
          clear();
          navigate('/admin');
        }
      );
    } else {
      addProperty({ ...propertyValue, images: [...images] }, () => {
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
    <div className="add-property-form">
      <div className="add-property-form-left">
        <Input
          divClass="property-input"
          label="Title"
          required
          value={propertyValue.title}
          onChange={e => onChangeInput('title', e.target.value)}
        />
        <Input
          divClass="property-input"
          label="Main Title"
          required
          value={propertyValue.mainTitle}
          onChange={e => onChangeInput('mainTitle', e.target.value)}
        />
        <Textarea
          divClass="property-input"
          label="Description"
          rows={8}
          onChange={e => onChangeInput('description', e.target.value)}
          value={propertyValue.description}
          required
        />
        <Textarea
          divClass="property-input"
          label="Place Address"
          rows={5}
          onChange={e => onChangeInput('placeAddress', e.target.value)}
          value={propertyValue.placeAddress}
          required
        />
        <Input
          divClass="property-input"
          label="Building"
          value={propertyValue.building}
          onChange={e => onChangeInput('building', e.target.value)}
        />
        <Input
          divClass="property-input"
          label="City"
          required
          value={propertyValue.city}
          onChange={e => onChangeInput('city', e.target.value)}
        />
        <Select
          customClass="property-input"
          label="Agent"
          required
          value={propertyValue.agentId}
          options={agent}
          onChange={v => onChangeInput('agentId', v)}
        />
        <span className="select-border"></span>
        <span className="property-input amenities-instruction">
          Select multiple amenities from the drop down list to add multiple
          amenities to the property.
        </span>
        <ChipSelect
          customClass="property-input"
          label="Amenities"
          options={amenities}
          value={propertyValue.amenities}
          onChange={v => onChangeInput('amenities', v)}
          required
        />
        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="Property size"
            required
            value={propertyValue.propertySize}
            onChange={e => onChangeInput('propertySize', e.target.value)}
          />
          <Input
            divClass="property-input"
            label="Property size unit"
            required
            value={propertyValue.propertySizeUnit}
            onChange={e => onChangeInput('propertySizeUnit', e.target.value)}
          />
        </div>
        <Select
          customClass="property-input"
          label="Property type"
          required
          value={propertyValue.propertyType}
          options={propertyType}
          onChange={v => onChangeInput('propertyType', v)}
        />
        <span className="select-border"></span>
        <Input
          divClass="property-input"
          label="Property age"
          required
          value={propertyValue.propertyAge}
          onChange={e => onChangeInput('propertyAge', e.target.value)}
        />
        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="No. of bedrooms"
            required
            value={propertyValue.noOfBedroom}
            onChange={e => onChangeInput('noOfBedroom', e.target.value)}
          />
          <Input
            divClass="property-input"
            label="No. of bathrooms"
            required
            value={propertyValue.noOfBathroom}
            onChange={e => onChangeInput('noOfBathroom', e.target.value)}
          />
        </div>
      </div>
      <div className="add-property-form-right">
        <label className="property-image-label spinner-label">
          Property Images<span>*</span> {renderImageLoadingSpinner()}
        </label>
        <div className="property-row-div-upload">
          {uploadCount.map((_, i) => (
            <UploadImage
              linkIndex={i}
              customClass="first-img-Class-admin"
              onChangeImage={() => {}}
              value={propertyValue.images}
              editing={editing}
            />
          ))}
          {uploadCount.length < 15 ? (
            <div className="add-new-img-upload" onClick={onSetUploadCount}>
              <Plus />
            </div>
          ) : null}
        </div>
        <Select
          customClass="property-input"
          label="Sale"
          required
          value={propertyValue.for}
          options={sale}
          onChange={v => onChangeInput('for', v)}
        />
        <span className="select-border"></span>
        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="Price"
            required
            value={propertyValue.price}
            onChange={e => onChangeInput('price', e.target.value)}
          />
          <Input
            divClass="property-input"
            label="Ownership"
            required
            value={propertyValue.ownership}
            onChange={e => onChangeInput('ownership', e.target.value)}
          />
        </div>
        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="Reference No"
            required
            value={propertyValue.referenceNo}
            onChange={e => onChangeInput('referenceNo', e.target.value)}
          />
          <Input
            divClass="property-input"
            label="Trakheesi Permit"
            required
            value={propertyValue.trakheesiPermit}
            onChange={e => onChangeInput('trakheesiPermit', e.target.value)}
          />
        </div>
        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="Broker ORN"
            required
            value={propertyValue.brokerORN}
            onChange={e => onChangeInput('brokerORN', e.target.value)}
          />
          <Input
            divClass="property-input"
            label="Agent BRN"
            required
            value={propertyValue.agentBRN}
            onChange={e => onChangeInput('agentBRN', e.target.value)}
          />
        </div>
        <Input
          divClass="property-input"
          label="Call"
          required
          value={propertyValue.call}
          onChange={e => onChangeInput('call', e.target.value)}
        />
        <Input
          divClass="property-input"
          label="Email"
          required
          value={propertyValue.email}
          onChange={e => onChangeInput('email', e.target.value)}
        />
        <Input
          divClass="property-input"
          label="Whatsapp"
          required
          value={propertyValue.whatsapp}
          onChange={e => onChangeInput('whatsapp', e.target.value)}
        />
        <div className="property-row-div">
          <Checkbox
            label="Featured"
            value={propertyValue.featured}
            onChange={e => onChangeInput('featured', e.target.checked)}
          />
          <Checkbox
            label="Luxury"
            value={propertyValue.luxury}
            onChange={e => onChangeInput('luxury', e.target.checked)}
          />
          <Checkbox
            label="Verified"
            value={propertyValue.verified}
            onChange={e => onChangeInput('verified', e.target.checked)}
          />
        </div>
        <Button
          customClass="add-property-btn"
          onClick={addAdminProperty}
          loading={env.loading}
        >
          ADD
        </Button>
        <span id="on-add-warning" className="property-input pls-fill">
          please fill all the required fields !!
        </span>
      </div>
    </div>
  );
};

export default AddForm;
