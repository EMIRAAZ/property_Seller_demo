import './buyformcard.scss';
import FormCard from '../../../components/formcard';
import BasicSelect from '../../../components/select/BasicSelect';
import InputSelect from '../../../components/select/InputSelect';
import LocationIcon from '../../../components/svg/location';
import BasicButton from '../../../components/button/BasicButton';
import SearchIcon from '../../../components/svg/search';
import { makeUrlParam } from '../../../utils';

const BuyFormCard = ({
  onInputChange,
  paramInput,
  getProperty,
  locationSearch,
  onSearchLocation,
}) => {
  const onChange = (key, value) => {
    if (key === 'priceFrom' || key === 'priceTo') {
      const num = Number(value);
      if (Number.isInteger(num)) {
        onInputChange({ key, value });
      }
    } else if (key === 'location') {
      onSearchLocation(value);

      onInputChange({ key, value });
    } else {
      onInputChange({ key, value });
    }
  };

  const onSearch = () => {
    const newParamInput = { ...paramInput };
    if (typeof newParamInput.location === 'object') {
      const inputWithoutLocation = {
        ...newParamInput,
        ...newParamInput.location,
      };
      delete inputWithoutLocation.location;
      getProperty(`&${makeUrlParam(inputWithoutLocation)}`);
    } else getProperty(`&${makeUrlParam(newParamInput)}`);
  };
  const getSearchValue = () => {
    const { location } = paramInput;
    if (typeof location === 'string') return location;
    else
      return `${location.placeAddress} ${
        location.building ? location.building : ''
      } ${location.city}`;
  };

  return (
    <div className="buy-form-card">
      <FormCard customClass="buy-formcard">
        <BasicSelect
          customClass="property"
          name="Property Type"
          value={paramInput.propertyType}
          onChange={value => onChange('propertyType', value)}
          options={[
            { name: 'Apartment', value: 'Apartment' },
            { name: 'Villa', value: 'Villa' },
            { name: 'Townhouse', value: 'Townhouse' },
            { name: 'Penthouse', value: 'Penthouse' },
            { name: 'Compound', value: 'Compound' },
            { name: 'Duplex', value: 'Duplex' },
            { name: 'Full Floor', value: 'Full Floor' },
            { name: 'Half Floor', value: 'Half Floor' },
            { name: 'Whole Building', value: 'Whole Building' },
            { name: 'Land', value: 'Land' },
            { name: 'Bulk Sale Unit', value: 'Bulk Sale Unit' },
            { name: 'Bungalow', value: 'Bungalow' },
            {
              name: 'Hotel & Hotel Apartment',
              value: 'Hotel & Hotel Apartment',
            },
          ]}
        />
        <InputSelect
          customClass="search"
          value={getSearchValue()}
          onChange={value => onChange('location', value)}
          name="Search City, Building, Community .."
          leftIcon={LocationIcon}
          options={locationSearch.location.map(location => {
            return {
              name: `${location.placeAddress} ${location.building} ${location.city}`,
              value: {
                placeAddress: location.placeAddress,
                building: location.building,
                city: location.city,
              },
            };
          })}
        />
        <BasicButton customClass="buy-search-btn" onClick={onSearch}>
          <SearchIcon /> Search
        </BasicButton>
        {/* <BasicSelect
          customClass="sale"
          name="Sale"
          onChange={value => onChange('sale', value)}
          options={[
            { name: 'Villas' },
            { name: 'Resorts' },
            { name: 'Estates' },
            { name: 'Apartments' },
          ]}
        /> */}
        <BasicSelect
          customClass="price-from"
          name="Price From"
          onChange={value => onChange('priceFrom', value)}
          options={[
            { name: '300,000', value: 300000 },
            { name: '400,000', value: 400000 },
            { name: '500,000', value: 500000 },
            { name: '600,000', value: 600000 },
          ]}
        />
        <BasicSelect
          customClass="price-two"
          name="Price To"
          onChange={value => onChange('priceTo', value)}
          options={[
            { name: '300,000', value: 300000 },
            { name: '400,000', value: 400000 },
            { name: '500,000', value: 500000 },
            { name: '600,000', value: 600000 },
          ]}
        />
        <BasicButton customClass="buy-advanced-search-btn">
          Advanced Search
        </BasicButton>
      </FormCard>
    </div>
  );
};

export default BuyFormCard;
