import './addform.scss';
import Input from '../../../components/input/admininput';
import Checkbox from '../../../components/input/checkbox';
import Textarea from '../../../components/input/admintextarea';
import Select from '../../../components/select/adminSelect';
import Button from '../../../components/button/BasicButton';
import UploadImage from '../../../components/uploadimage';

const AddForm = ({ onChange, sale, propertyType }) => {
  const onChangeInput = (key, value) => {
    if (key === 'amenities') {
      onChange({ key, value: renderAmenities(value) });
    } else onChange({ key, value });
  };

  const renderAmenities = amenities => {
    return amenities.split(',');
  };
  return (
    <div className="add-property-form">
      <div className="add-property-form-left">
        <Input
          divClass="property-input"
          label="Title"
          required
          onChange={e => onChangeInput('title', e.target.value)}
        />
        <Textarea
          divClass="property-input"
          label="Description"
          rows={8}
          onChange={e => onChangeInput('description', e.target.value)}
          required
        />
        <Textarea
          divClass="property-input"
          label="Place Address"
          rows={5}
          onChange={e => onChangeInput('placeAddress', e.target.value)}
          required
        />
        <Input
          divClass="property-input"
          label="Building"
          onChange={e => onChangeInput('building', e.target.value)}
        />
        <Input
          divClass="property-input"
          label="City"
          required
          onChange={e => onChangeInput('city', e.target.value)}
        />
        <Select
          customClass="property-input"
          label="Agent"
          required
          onChange={v => onChangeInput('agentId', v)}
        />
        <span className="select-border"></span>
        <Textarea
          divClass="property-input"
          label="Amenities"
          rows={5}
          onChange={e => onChangeInput('amenities', e.target.value)}
          required
        />
        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="Property size"
            required
            onChange={e => onChangeInput('propertySize', e.target.value)}
          />
          <Input
            divClass="property-input"
            label="Property size unit"
            required
            onChange={e => onChangeInput('propertySizeUnit', e.target.value)}
          />
        </div>
        <Select
          customClass="property-input"
          label="Property type"
          required
          options={propertyType}
          onChange={v => onChangeInput('propertyType', v)}
        />
        <span className="select-border"></span>
        <Input
          divClass="property-input"
          label="Property age"
          required
          onChange={e => onChangeInput('propertyAge', e.target.value)}
        />
        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="No. of bedrooms"
            required
            onChange={e => onChangeInput('noOfBedroom', e.target.value)}
          />
          <Input
            divClass="property-input"
            label="No. of bathrooms"
            required
            onChange={e => onChangeInput('noOfBathroom', e.target.value)}
          />
        </div>
      </div>
      <div className="add-property-form-right">
        <label className="property-image-label">
          Property Images<span>*</span>
        </label>
        <div className="property-row-div-upload">
          <UploadImage linkIndex={0} onChangeImage={() => {}} />
          <div className="property-row-div-upload-flex">
            <UploadImage linkIndex={1} onChangeImage={() => {}} />
            <UploadImage linkIndex={2} onChangeImage={() => {}} />
          </div>
        </div>
        <label className="property-image-label">Property Video</label>
        <div className="property-row-div-upload">{/* <UploadImage /> */}</div>
        <Select
          customClass="property-input"
          label="Sale"
          required
          options={sale}
          onChange={v => onChangeInput('for', v)}
        />
        <span className="select-border"></span>
        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="Price"
            required
            onChange={e => onChangeInput('price', e.target.value)}
          />
          <Input
            divClass="property-input"
            label="Ownership"
            required
            onChange={e => onChangeInput('ownership', e.target.value)}
          />
        </div>
        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="Reference No"
            required
            onChange={e => onChangeInput('referenceNo', e.target.value)}
          />
          <Input
            divClass="property-input"
            label="Trakheesi Permit"
            required
            onChange={e => onChangeInput('trakheesiPermit', e.target.value)}
          />
        </div>
        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="Broker ORN"
            required
            onChange={e => onChangeInput('brokerORN', e.target.value)}
          />
          <Input
            divClass="property-input"
            label="Agent BRN"
            required
            onChange={e => onChangeInput('agentBRN', e.target.value)}
          />
        </div>
        <Input
          divClass="property-input"
          label="Call"
          required
          onChange={e => onChangeInput('call', e.target.value)}
        />
        <Input
          divClass="property-input"
          label="Email"
          required
          onChange={e => onChangeInput('email', e.target.value)}
        />
        <Input
          divClass="property-input"
          label="Whatsapp"
          required
          onChange={e => onChangeInput('whatsapp', e.target.value)}
        />
        <div className="property-row-div">
          <Checkbox
            label="Featured"
            onChange={e => onChangeInput('featured', e.target.checked)}
          />
          <Checkbox
            label="Luxury"
            onChange={e => onChangeInput('luxury', e.target.checked)}
          />
        </div>
        <div className="property-row-div">
          <Button customClass="add-property-btn">ADD</Button>
          <Button customClass="add-property-btn">CLEAR</Button>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
