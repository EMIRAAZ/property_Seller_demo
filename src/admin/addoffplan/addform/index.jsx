import './addform.scss';
import Input from '../../../components/input/admininput';
import Textarea from '../../../components/input/admintextarea';
import Select from '../../../components/select/adminSelect';
import Plus from '../../../components/svg/plus';
import Close from '../../../components/svg/close';
import Button from '../../../components/button/SpinnerButton';
import ImageUpload from '../../../components/imageupload';
import UploadImageOffplan from '../../../components/uploadimageoffplan';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkIfAllKeyHasValue } from '../../../utils';
import { useState, useRef } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  StandaloneSearchBox,
  Marker,
} from '@react-google-maps/api';
import SingleImageUpload from '../../../components/singleimageupload';

const keyArr = [];

const AddForm = ({
  addOffplan,
  editOffplan,
  env,
  onChange,
  offplanValue,
  offplanOptions,
  editing,
  clear,
  changeAdminOffplanMultipleInput,
  deleteAdminOffplanMultipleInput,
  addNewBoxOffplan,
  deleteOffplanImages,
  addOffplanImages,
  addOffplanImgPrcAvl,
  deleteOffplanImagePriceAvail,
  getCityByEmirateOffplan,
}) => {
  let navigate = useNavigate();
  let location = useLocation();
  const inputRef = useRef();

  const [center, setCenter] = useState({ lat: 24.4539, lng: 54.3773 });
  const [marker, setMarker] = useState({ lat: 24.4539, lng: 54.3773 });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries: ['places'],
  });

  const getID = () => location.pathname.split('/').pop();

  const onChangeInput = (key, value) => {
    if (key === 'emirate') {
      getCityByEmirateOffplan(value);
    }
    document.getElementById('on-add-warning').style.display = 'none';
    onChange({ key, value });
  };

  const addAdminOffplan = () => {
    if (checkIfAllKeyHasValue(offplanValue, keyArr)) {
      document.getElementById('on-add-warning').style.display = 'block';
      return;
    }
    if (editing) {
      editOffplan(getID(), { ...offplanValue }, () => {
        clear();
        navigate('/admin/offplan');
      });
    } else {
      addOffplan({ ...offplanValue }, () => {
        clear();
        navigate('/admin/offplan');
      });
    }
  };

  const onChangeMapInput = e => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      setMarker({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      onChangeInput('coordinates', {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  const onMapClick = e => {
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
    onChangeInput('coordinates', {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  const loopThroughObjectAndMakeInput = (obj, i, mainKey) => {
    const objArray = [];
    for (var keyValue in obj) {
      if (keyValue === 'description') {
        const key = keyValue;
        objArray.push(
          <div className="for-label-cls-txt">
            <label>{keyValue}</label>
            <textarea
              class="multiple-textarea-class"
              value={obj[keyValue]}
              onChange={e =>
                changeAdminOffplanMultipleInput(mainKey, key, e.target.value, i)
              }
            />
          </div>
        );
      } else if (keyValue === 'image') {
        const key = keyValue;
        objArray.push(
          <div className="for-label-cls-txt">
            <SingleImageUpload
              name="image"
              label="Image"
              value={obj[key]}
              onDelete={name => deleteOffplanImagePriceAvail(name, mainKey, i)}
              onChange={formData => addOffplanImgPrcAvl(formData, mainKey, i)}
            />
          </div>
        );
      } else {
        const key = keyValue;
        objArray.push(
          <div className="for-label-cls">
            <label>{keyValue}</label>
            <input
              class="multiple-input-class"
              value={obj[keyValue]}
              onChange={e => {
                changeAdminOffplanMultipleInput(
                  mainKey,
                  key,
                  e.target.value,
                  i
                );
              }}
            />
          </div>
        );
      }
    }
    return objArray;
  };

  const keyObj = {
    paymentPlan: { percentage: '', type: '', description: '' },
    whyThisProperty: { feature: '', description: '' },
    priceForAvailability: { name: '', price: '', image: '' },
  };

  const renderMultipleInput = (data, label, mainKey) => {
    return (
      <div className="multiple-input-container">
        <div className="add-n-label">
          <label>{label}</label>
          <Plus
            className="plus-add-n-label"
            width="14"
            height="14"
            onClick={() => addNewBoxOffplan(mainKey, keyObj[mainKey])}
          />
        </div>
        {data.map((item, i) => (
          <div className="multiple-input-control">
            <div className="control-div">
              <Close
                className="close-btn"
                fill="#ffffff"
                onClick={() => deleteAdminOffplanMultipleInput(mainKey, i)}
              />
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
        <Select
          customClass="offplan-input"
          label="Emirate"
          required
          value={offplanValue.emirate}
          options={offplanOptions.emirate}
          onChange={v => onChangeInput('emirate', v)}
        />
        <span className="select-border"></span>
        <Select
          customClass="offplan-input"
          label="City"
          required
          value={offplanValue.city}
          options={offplanOptions.city}
          onChange={v => onChangeInput('city', v)}
        />
        <span className="select-border"></span>
        <Input
          divClass="offplan-input"
          label="Building"
          value={offplanValue.building}
          onChange={e => onChangeInput('building', e.target.value)}
        />

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

        <Select
          customClass="offplan-input"
          label="Agent"
          required
          value={`${offplanValue.agentId}`}
          options={offplanOptions.agent}
          onChange={v => onChangeInput('agentId', v)}
        />
        <span className="select-border"></span>

        <Input
          divClass="offplan-input"
          label="Price"
          required
          value={offplanValue.price.toString()}
          onChange={e => onChangeInput('price', e.target.value)}
        />
        <div className="add-property-google-map">
          {isLoaded ? (
            <>
              <StandaloneSearchBox
                onLoad={ref => (inputRef.current = ref)}
                onPlacesChanged={e => onChangeMapInput(e)}
              >
                <input className="google-map-input" type="text" />
              </StandaloneSearchBox>
              <GoogleMap
                center={center}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                zoom={15}
                onClick={onMapClick}
              >
                <Marker position={marker} />
              </GoogleMap>
            </>
          ) : null}
        </div>
      </div>
      <div className="add-offplan-form-right">
        <div className="offplan-row-div-upload">
          <ImageUpload
            name="images"
            label="Images"
            required
            value={offplanValue.images}
            onChange={addOffplanImages}
            onDelete={deleteOffplanImages}
          />
        </div>

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
        {renderMultipleInput(
          offplanValue.paymentPlan,
          'Payment Plan',
          'paymentPlan'
        )}
        {renderMultipleInput(
          offplanValue.whyThisProperty,
          'Why This Property',
          'whyThisProperty'
        )}
        {renderMultipleInput(
          offplanValue.priceForAvailability,
          'Price Availability',
          'priceForAvailability'
        )}
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
