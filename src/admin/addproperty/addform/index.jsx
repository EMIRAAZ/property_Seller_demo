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
        <Input label="Title" required />
        <Textarea label="Description" rows={8} required />
        <Textarea label="Place Address" rows={5} required />
        <Input label="Building" />
        <Input label="City" required />
        <Select label="Agent" required />
        <span className="select-border"></span>
        <Select label="Amenities" required />
        <span className="select-border"></span>
        <div className="property-row-div">
          <Input label="Property size" required />
          <Input label="Property size unit" required />
        </div>
        <Select label="Property type" required />
        <span className="select-border"></span>
        <Input label="Property age" required />
        <div className="property-row-div">
          <Input label="No. of bedrooms" required />
          <Input label="No. of bathrooms" required />
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
        <div className="property-row-div-upload">
          <UploadImage />
        </div>
        <Select label="Sale" required />
        <span className="select-border"></span>
        <div className="property-row-div">
          <Input label="Price" required />
          <Input label="Ownership" required />
        </div>
        <div className="property-row-div">
          <Input label="Reference No" required />
          <Input label="Trakheesi Permit" required />
        </div>
        <div className="property-row-div">
          <Input label="Broker ORN" required />
          <Input label="Agent BRN" required />
        </div>
        <Input label="Call" required />
        <Input label="Email" required />
        <Input label="Whatsapp" required />
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
