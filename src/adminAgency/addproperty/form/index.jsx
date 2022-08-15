import './form.scss';
import Input from '../../../components/input/admininput';
import UploadImage from '../../../components/uploadimage';
import Textarea from '../../../components/input/admintextarea';
import Select from '../../../components/select/adminSelect';
import ChipSelect from '../../../components/select/ChipSelect';
import Button from '../../../components/button/SpinnerButton';
import Checkbox from '../../../components/input/checkbox';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../../../components/spinner';
import { checkIfAllKeyHasValue } from '../../../utils';
import Plus from '../../../components/svg/plus';
import { useRef } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  StandaloneSearchBox,
  Marker,
} from '@react-google-maps/api';

const Form = () => {
  return (
    <div className="agency-form-add-property">
      <div className="add-left-agent-form">
        <Input
          divClass="property-input"
          label="Title"
          required
          // value={propertyValue.title}
          // onChange={e => onChangeInput('title', e.target.value)}
        />
        <Input
          divClass="property-input"
          label="Main Title"
          required
          // value={propertyValue.mainTitle}
          // onChange={e => onChangeInput('mainTitle', e.target.value)}
        />
        <Textarea
          divClass="property-input"
          label="Description"
          rows={8}
          // onChange={e => onChangeInput('description', e.target.value)}
          // value={propertyValue.description}
          required
        />
        <Textarea
          divClass="property-input"
          label="Place Address"
          rows={5}
          // onChange={e => onChangeInput('placeAddress', e.target.value)}
          // value={propertyValue.placeAddress}
          required
        />
        <Input
          divClass="property-input"
          label="Building"
          // value={propertyValue.building}
          // onChange={e => onChangeInput('building', e.target.value)}
        />
        <Input
          divClass="property-input"
          label="City"
          required
          // value={propertyValue.city}
          // onChange={e => onChangeInput('city', e.target.value)}
        />
        <Select
          customClass="property-input"
          label="Agent"
          required
          // value={`${propertyValue.agentId} ${propertyValue.agencyId}`}
          // options={agent}
          // onChange={v => onChangeInput('agentId', v)}
        />
        <span className="select-border"></span>
        <span className="property-input amenities-instruction">
          Select multiple amenities from the drop down list to add multiple
          amenities to the property.
        </span>
        <ChipSelect
          customClass="property-input"
          label="Amenities"
          // options={amenities}
          // value={propertyValue.amenities}
          // onChange={v => onChangeInput('amenities', v)}
          required
        />
        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="Property size"
            required
            // value={propertyValue.propertySize}
            // onChange={e => onChangeInput('propertySize', e.target.value)}
          />
          <Input
            divClass="property-input"
            label="Property size unit"
            required
            // value={propertyValue.propertySizeUnit}
            // onChange={e => onChangeInput('propertySizeUnit', e.target.value)}
          />
        </div>
        <Select
          customClass="property-input"
          label="Property type"
          required
          // value={propertyValue.propertyType}
          // options={propertyType}
          // onChange={v => onChangeInput('propertyType', v)}
        />
        <span className="select-border"></span>
        <Input
          divClass="property-input"
          label="Property age"
          required
          // value={propertyValue.propertyAge}
          // onChange={e => onChangeInput('propertyAge', e.target.value)}
        />
        <div className="property-row-div">
          <Input
            divClass="property-input"
            label="No. of bedrooms"
            required
            // value={propertyValue.noOfBedroom}
            // onChange={e => onChangeInput('noOfBedroom', e.target.value)}
          />
          <Input
            divClass="property-input"
            label="No. of bathrooms"
            required
            // value={propertyValue.noOfBathroom}
            // onChange={e => onChangeInput('noOfBathroom', e.target.value)}
          />
        </div>
      </div>
      <div className="add-right-agent-form">
        <label className="property-image-label spinner-label">
          Property Images<span>*</span> {renderImageLoadingSpinner()}
        </label>
        <div className="property-row-div-upload">
          {uploadCount.map((_, i) => (
            <UploadImage
              key={i}
              multiple={true}
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
        <ChipSelect
          customClass="property-input"
          label="Famous Neighborhoods"
          options={neighbor}
          value={propertyValue.neighborhood}
          onChange={v => onChangeInput('neighborhood', v)}
          required
        />
        <Select
          customClass="property-input"
          label="Tagline"
          required
          value={`${propertyValue.taglineId}`}
          options={tagline}
          onChange={v => onChangeInput('taglineId', v)}
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
        <Select
          customClass="property-input"
          label="Emirate"
          required
          value={propertyValue.emirate}
          options={emirate}
          onChange={v => onChangeInput('emirate', v)}
        />
        <span className="select-border"></span>
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
        <Input
          divClass="property-input"
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
          <Checkbox
            label="ReadyToMove"
            value={propertyValue.readyToMove}
            onChange={e => onChangeInput('readyToMove', e.target.checked)}
          />
        </div>
        <div className="agency-control-btn">
          <Button
            customClass="add-agent-btn cancel"
            //   onClick={addAdminAgent}
            //   loading={env.loading}
          >
            CANCEL
          </Button>
          <Button
            customClass="add-agent-btn"
            //   onClick={addAdminAgent}
            //   loading={env.loading}
          >
            ADD AGENT
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Form;
