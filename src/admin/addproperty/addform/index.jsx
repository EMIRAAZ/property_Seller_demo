import './addform.scss';
import Input from '../../../components/input/admininput';
import Checkbox from '../../../components/input/checkbox';
import Textarea from '../../../components/input/admintextarea';
import Select from '../../../components/select/adminSelect';
import ChipSelect from '../../../components/select/ChipSelect';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
// import { useState } from 'react';
import { checkIfAllKeyHasValue } from '../../../utils';
// import { useRef } from 'react';
// import {
//   useJsApiLoader,
//   GoogleMap,
//   StandaloneSearchBox,
//   Marker,
// } from '@react-google-maps/api';
import ImageUpload from '../../../components/imageupload';

const keyArr = [
  'title',
  'description',
  'placeAddress',
  'city',
  'propertySize',
  // 'propertySizeUnit',
  'propertyType',
  'propertyAge',
  'noOfBedroom',
  'noOfBathroom',
  'trakheesiPermit',
  // 'ownership',
  'propertyStatus',
  'brokerORN',
  'agentBRN',
  'call',
  'email',
  'whatsapp',
  'city',
  'agentId',
  // 'emirate',
];

const AddForm = ({
  addProperty,
  editProperty,
  env,
  onChange,
  propertyValue,
  propertyOptions,
  editing,
  clear,
  addPropertyImages,
  deletePropertyImages,
  getCityByEmirateProperty,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  // const inputRef = useRef();

  // const [center, setCenter] = useState({ lat: 24.4539, lng: 54.3773 });
  // const [marker, setMarker] = useState({ lat: 24.4539, lng: 54.3773 });

  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  //   libraries: ['places'],
  // });

  // const onChangeMapInput = e => {
  //   const [place] = inputRef.current.getPlaces();
  //   if (place) {
  //     setCenter({
  //       lat: place.geometry.location.lat(),
  //       lng: place.geometry.location.lng(),
  //     });
  //     setMarker({
  //       lat: place.geometry.location.lat(),
  //       lng: place.geometry.location.lng(),
  //     });
  //     onChangeInput('coordinates', {
  //       lat: place.geometry.location.lat(),
  //       lng: place.geometry.location.lng(),
  //     });
  //   }
  // };

  // const onMapClick = e => {
  //   setMarker({
  //     lat: e.latLng.lat(),
  //     lng: e.latLng.lng(),
  //   });
  //   onChangeInput('coordinates', {
  //     lat: e.latLng.lat(),
  //     lng: e.latLng.lng(),
  //   });
  // };

  const getID = () => location.pathname.split('/').pop();

  const {
    agent,
    propertyType,
    amenities,
    neighbor,
    tagline,
    // emirate,
    // propertyCategory,
  } = propertyOptions;

  const onChangeInput = (key, value) => {
    if (key === 'emirate') {
      getCityByEmirateProperty(value);
    }
    document.getElementById('on-add-warning').style.display = 'none';
    onChange({ key, value });
  };

  const addAdminProperty = () => {
    // mandotary validation
    if (checkIfAllKeyHasValue(propertyValue, keyArr)) {
      document.getElementById('on-add-warning').style.display = 'block';
      return;
    }
    if (editing) {
      editProperty(getID(), { ...propertyValue }, () => {
        clear();
        navigate('/admin');
      });
    } else {
      addProperty({ ...propertyValue }, () => {
        clear();
        navigate('/admin');
      });
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
        {/* <Input
          divClass="property-input"
          label="Main Title"
          required
          value={propertyValue.mainTitle}
          onChange={e => onChangeInput('mainTitle', e.target.value)}
        /> */}
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
        {/* <Select
          customClass="property-input"
          label="Emirate"
          required
          value={propertyValue.emirate}
          options={emirate}
          onChange={v => onChangeInput('emirate', v)}
        /> */}
        <span className="select-border"></span>
        <Select
          customClass="property-input"
          label="City"
          required
          value={propertyValue.city}
          options={propertyOptions.city}
          onChange={v => onChangeInput('city', v)}
        />
        {/* <Select
          customClass="property-input"
          label="Developer"
          required
          value={`${propertyValue.agentId} ${propertyValue.agencyId}`}
          options={agent}
          onChange={v => onChangeInput('agentId', v)}
        /> */}
        <span className="select-border"></span>
        {console.log(agent,'agent')}
        <Select
          customClass="property-input"
          label="Agent"
          required
          value={`${propertyValue.agentId} ${propertyValue.agencyId}`}
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
          {/* <Input
            divClass="property-input"
            label="Property size unit"
            required
            value={propertyValue.propertySizeUnit}
            onChange={e => onChangeInput('propertySizeUnit', e.target.value)}
          /> */}
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
        {/* <Select
          customClass="property-input"
          label="Property Category"
          required
          value={propertyValue.propertyCategory}
          options={propertyCategory}
          onChange={v => onChangeInput('propertyCategory', v)}
        /> */}
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
        <div className="property-row-div-upload">
          <ImageUpload
            name="images"
            label="Images"
            required
            value={propertyValue.images}
            onChange={addPropertyImages}
            onDelete={deletePropertyImages}
          />
        </div>
        <ChipSelect
          customClass="property-input"
          label="Famous Neighborhoods"
          options={neighbor}
          value={propertyValue.neighborhood}
          onChange={v => onChangeInput('neighborhood', v)}
          required
        />
        <ChipSelect
          customClass="property-input"
          label="Tagline"
          options={tagline}
          value={propertyValue.tagline}
          onChange={v => onChangeInput('tagline', v)}
          required
        />

        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="Price"
            required
            value={propertyValue.price}
            onChange={e => onChangeInput('price', e.target.value)}
          />
          {/* <Input
            divClass="property-input"
            label="Ownership"
            required
            value={propertyValue.ownership}
            onChange={e => onChangeInput('ownership', e.target.value)}
          /> */}
        </div>
        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="Trakheesi Permit"
            required
            value={propertyValue.trakheesiPermit}
            onChange={e => onChangeInput('trakheesiPermit', e.target.value)}
          />
          {editing ? (
            <Input
              divClass="property-input"
              label="Reference Id"
              required
              value={propertyValue.referenceNo}
              onChange={e => onChangeInput('referenceNo', e.target.value)}
            />
          ) : null}
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

        <div className="add-property-google-map">
        <Input
            divClass="property-input"
            label="Map Link"
            value={propertyValue.locationLinkOfGoogleMap}
            onChange={e => onChangeInput('locationLinkOfGoogleMap', e.target.value)}
          />
          
          {/* {isLoaded ? (
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
          ) : null} */}
          
          <iframe style={{width:"100%",height:"100%",border:"0px"}} src={propertyValue.locationLinkOfGoogleMap} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        <Input
          divClass="property-input mt-7rem"
          label="Youtube Link"
          value={propertyValue.videoView}
          onChange={e => onChangeInput('videoView', e.target.value)}
        />
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
        <Input
        required
          divClass="property-input"
          label="Property Status"
          value={propertyValue.propertyStatus}
          onChange={e => onChangeInput('propertyStatus', e.target.value)}
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
            label="Highest Roi"
            value={propertyValue.verified}
            onChange={e => onChangeInput('verified', e.target.checked)}
          />
          <Checkbox
            label="Offplan"
            value={propertyValue.offplan}
            onChange={e => onChangeInput('offplan', e.target.checked)}
          />
          <Checkbox
            label="ReadyToMove"
            value={propertyValue.readyToMove}
            onChange={e => onChangeInput('readyToMove', e.target.checked)}
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
