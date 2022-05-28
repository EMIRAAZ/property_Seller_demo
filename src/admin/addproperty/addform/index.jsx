import './addform.scss';
import Input from '../../../components/input/admininput';
import Checkbox from '../../../components/input/checkbox';
import Textarea from '../../../components/input/admintextarea';
import Select from '../../../components/select/adminSelect';
import Button from '../../../components/button/BasicButton';
import UploadImage from '../../../components/uploadimage';

const AddForm = () => {
  return (
    <div className="add-property-form">
      <div className="add-property-form-left">
        <Input divClass="property-input" label="Title" required />
        <Textarea
          divClass="property-input"
          label="Description"
          rows={8}
          required
        />
        <Textarea
          divClass="property-input"
          label="Place Address"
          rows={5}
          required
        />
        <Input divClass="property-input" label="Building" />
        <Input divClass="property-input" label="City" required />
        <Select customClass="property-input" label="Agent" required />
        <span className="select-border"></span>
        <Select customClass="property-input" label="Amenities" required />
        <span className="select-border"></span>
        <div className="property-row-div">
          <Input divClass="property-input" label="Property size" required />
          <Input
            divClass="property-input"
            label="Property size unit"
            required
          />
        </div>
        <Select customClass="property-input" label="Property type" required />
        <span className="select-border"></span>
        <Input divClass="property-input" label="Property age" required />
        <div className="property-row-div">
          <Input divClass="property-input" label="No. of bedrooms" required />
          <Input divClass="property-input" label="No. of bathrooms" required />
        </div>
      </div>
      <div className="add-property-form-right">
        <label className="property-image-label">
          Property Images<span>*</span>
        </label>
        <div className="property-row-div-upload">
          <UploadImage />
          <div className="property-row-div-upload-flex">
            <UploadImage />
            <UploadImage />
          </div>
        </div>
        <label className="property-image-label">Property Video</label>
        <div className="property-row-div-upload">{/* <UploadImage /> */}</div>
        <Select customClass="property-input" label="Sale" required />
        <span className="select-border"></span>
        <div className="property-row-div">
          <Input divClass="property-input" label="Price" required />
          <Input divClass="property-input" label="Ownership" required />
        </div>
        <div className="property-row-div">
          <Input divClass="property-input" label="Reference No" required />
          <Input divClass="property-input" label="Trakheesi Permit" required />
        </div>
        <div className="property-row-div">
          <Input divClass="property-input" label="Broker ORN" required />
          <Input divClass="property-input" label="Agent BRN" required />
        </div>
        <Input divClass="property-input" label="Call" required />
        <Input divClass="property-input" label="Email" required />
        <Input divClass="property-input" label="Whatsapp" required />
        <div className="property-row-div">
          <Checkbox label="Featured" required />
          <Checkbox label="Luxury" required />
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
