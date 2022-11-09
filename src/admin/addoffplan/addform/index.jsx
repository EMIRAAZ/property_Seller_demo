import './addform.scss';
import Input from '../../../components/input/admininput';
import Textarea from '../../../components/input/admintextarea';
import Select from '../../../components/select/adminSelect';
import Plus from '../../../components/svg/plus';
import Close from '../../../components/svg/close';
import ChipSelect from '../../../components/select/ChipSelect';
import Button from '../../../components/button/SpinnerButton';
import UploadImage from '../../../components/uploadimage';
import { useNavigate, useLocation } from 'react-router-dom';
import Spinner from '../../../components/spinner';
import { checkIfAllKeyHasValue } from '../../../utils';
import { useState } from 'react';

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
  changeAdminOffplanMultipleInput,
}) => {
  let navigate = useNavigate();
  let location = useLocation();
  const [uploadCount, setUploadCount] = useState([0]);

  const onSetUploadCount = () => {
    setUploadCount([...uploadCount, 0]);
  };

  const getID = () => location.pathname.split('/').pop();

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
  const loopThroughObjectAndMakeInput = (obj, i, mainKey) => {
    const objArray = [];
    for (var keyValue in obj) {
      if (keyValue === 'description') {
        objArray.push(
          <textarea
            class="multiple-textarea-class"
            value={obj[keyValue]}
            onChange={e =>
              changeAdminOffplanMultipleInput(
                mainKey,
                keyValue,
                e.target.value,
                i
              )
            }
          />
        );
      } else
        objArray.push(
          <input
            class="multiple-input-class"
            value={obj[keyValue]}
            onChange={e =>
              changeAdminOffplanMultipleInput(
                mainKey,
                keyValue,
                e.target.value,
                i
              )
            }
          />
        );
    }
    return objArray;
  };

  const renderMultipleInput = (data, label, mainKey) => {
    return (
      <div className="multiple-input-container">
        <label>{label}</label>
        {data.map((item, i) => (
          <div className="multiple-input-control">
            <div className="control-div">
              <Close className="close-btn" fill="#ffffff" />
            </div>
            <div className="multiple-input-row">
              {loopThroughObjectAndMakeInput(item, i, mainKey)}
            </div>
          </div>
        ))}
      </div>
    );
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
        <Input
          divClass="offplan-input"
          label="Project Name"
          required
          value={offplanValue.projectName}
          onChange={e => onChangeInput('projectName', e.target.value)}
        />
        <Textarea
          divClass="offplan-input"
          label="Project Overview"
          rows={8}
          onChange={e => onChangeInput('projectOverview', e.target.value)}
          value={offplanValue.projectOverview}
          required
        />
        <Textarea
          divClass="offplan-input"
          label="Interior Details"
          rows={8}
          onChange={e => onChangeInput('interiorDetails', e.target.value)}
          value={offplanValue.interiorDetails}
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
          label="City"
          required
          value={offplanValue.city}
          onChange={e => onChangeInput('city', e.target.value)}
        />
        <Select
          customClass="offplan-input"
          label="Emirate"
          required
          value={offplanValue.emirate}
          options={offplanOptions.emirate}
          onChange={v => onChangeInput('emirate', v)}
        />
        <span className="select-border"></span>
        <Input
          divClass="offplan-input"
          label="Building"
          value={offplanValue.building}
          onChange={e => onChangeInput('building', e.target.value)}
        />
      </div>
      <div className="add-offplan-form-right">
        <label className="offplan-image-label spinner-label">
          Offplan Images<span>*</span> {renderImageLoadingSpinner()}
        </label>
        <div className="offplan-row-div-upload">
          {uploadCount.map((_, i) => (
            <UploadImage
              key={i}
              multiple={true}
              linkIndex={i}
              customClass="first-img-Class-admin"
              onChangeImage={() => {}}
              value={offplanValue.images}
              editing={editing}
            />
          ))}
          {uploadCount.length < 15 ? (
            <div className="add-new-img-upload" onClick={onSetUploadCount}>
              <Plus />
            </div>
          ) : null}
        </div>
        <Input
          divClass="offplan-input"
          label="Video Link"
          value={offplanValue.videoLink}
          onChange={e => onChangeInput('videoLink', e.target.value)}
        />
        <Select
          customClass="offplan-input"
          label="Property type"
          required
          value={offplanValue.propertyType}
          options={offplanOptions.propertyType}
          onChange={v => onChangeInput('propertyType', v)}
        />
        <span className="select-border"></span>
        <div className="offplan-row-div">
          <Input
            divClass="offplan-input"
            label="No. of bedrooms"
            required
            value={offplanValue.noOfBedroom}
            onChange={e => onChangeInput('noOfBedroom', e.target.value)}
          />
          <Input
            divClass="offplan-input"
            label="No. of bathrooms"
            required
            value={offplanValue.noOfBathroom}
            onChange={e => onChangeInput('noOfBathroom', e.target.value)}
          />
        </div>
        <div className="offplan-row-div">
          <Input
            divClass="offplan-input"
            label="Property size"
            required
            value={offplanValue.propertySize}
            onChange={e => onChangeInput('propertySize', e.target.value)}
          />
          <Input
            divClass="offplan-input"
            label="Property size unit"
            required
            value={offplanValue.propertySizeUnit}
            onChange={e => onChangeInput('propertySizeUnit', e.target.value)}
          />
        </div>
        <Select
          customClass="offplan-input"
          label="Agent"
          required
          value={`${offplanValue.agentId} ${offplanValue.agencyId}`}
          options={offplanOptions.agent}
          onChange={v => onChangeInput('agentId', v)}
        />
        <Input
          divClass="offplan-input"
          label="Price"
          required
          value={offplanValue.price.toString()}
          onChange={e => onChangeInput('price', e.target.value)}
        />
        {renderMultipleInput(
          offplanValue.paymentPlan,
          'Payment Plan',
          'paymentPlan'
        )}
        <Input
          divClass="offplan-input"
          label="Price Availability"
          required
          value={offplanValue.priceAvailability}
          onChange={e => onChangeInput('paymentPlan', e.target.value)}
        />
        <Input
          divClass="offplan-input"
          label="Why This Property ?"
          required
          value={offplanValue.paymentPlan.toString()}
          onChange={e => onChangeInput('paymentPlan', e.target.value)}
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
