import './homeformcard.scss';
import { useState } from 'react';
import BasicSelect from '../../../components/select/BasicSelect';
import InputSelect from '../../../components/select/InputSelect';
import SearchChiptSelect from '../../../components/select/searchChipSelect';
import LocationIcon from '../../../components/svg/location';
import BasicButton from '../../../components/button/BasicButton';
import SearchIcon from '../../../components/svg/search';
import PlusIcon from '../../../components/svg/plus';
import MinusIcon from '../../../components/svg/minus';
import { makeUrlParam } from '../../../utils';

const HomeFormCard = props => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const onInputChange = (key, value) => {
    if (key === 'priceFrom' || key === 'priceTo') {
      const num = Number(value);
      if (Number.isInteger(num)) {
        props.onInputChange({ key, value });
      }
    } else if (key === 'location') {
      props.onSearchLocation(value);
      props.onInputChange({ key, value });
    } else {
      props.onInputChange({ key, value });
    }
  };

  const makeParam = () => {
    const newListSearch = { ...props.homeSearch };
    delete newListSearch.locationSearch;
    delete newListSearch.location;
    delete newListSearch.searchArray;

    return `&${makeUrlParam({
      ...newListSearch,
    })}${makeMultipleLocString()}`;
  };

  const makeMultipleLocString = () => {
    const newSearchArray = [...props.homeSearch.searchArray];
    let mlString = '';
    for (let i = 0; i < newSearchArray.length; i++) {
      let currentObject = newSearchArray[i];
      mlString += `&placeAddress=${currentObject.placeAddress}&city=${currentObject.city}&building=${currentObject.building}`;
    }
    return mlString;
  };

  return (
    <div className="home-form-card">
      <div
        className={`home-formcard ${advancedSearch ? 'advanced-formcard' : ''}`}
      >
        <SearchChiptSelect
          bgColor="white"
          border
          customClass={`search ${
            advancedSearch ? 'advanced-search-input' : ''
          }`}
          name="Search City, Building, Community .."
          onChange={value => onInputChange('location', value)}
          onArrayChange={value => onInputChange('searchArray', value)}
          leftIcon={LocationIcon}
          options={props.homeSearch.locationSearch.location.map(location => {
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
        <BasicSelect
          bgColor="white"
          border
          customClass={`property ${advancedSearch ? 'advanced-property' : ''}`}
          name="Property Type"
          onChange={value => onInputChange('propertyType', value)}
          options={[
            { name: 'Villas', value: 'villas' },
            { name: 'Resorts', value: 'resorts' },
            { name: 'Estates', value: 'estates' },
            { name: 'Apartments', value: 'apartment' },
          ]}
        />
        <BasicSelect
          bgColor="white"
          customClass={`sale ${advancedSearch ? 'advanced-sale' : ''}`}
          name="Sale"
          border
          onChange={value => onInputChange('sale', value)}
          options={[
            { name: 'Buy', value: 'buy' },
            { name: 'Rent', value: 'buy' },
            { name: 'Both', value: 'both' },
          ]}
        />
        <InputSelect
          customClass={`price-from ${
            advancedSearch ? 'advanced-price-from' : ''
          }`}
          bgColor="white"
          border
          name="Price From"
          onChange={value => onInputChange('priceFrom', value)}
          value={props.homeSearch.priceFrom}
          options={[
            { name: '300,000', value: 300000 },
            { name: '400,000', value: 400000 },
            { name: '500,000', value: 500000 },
            { name: '600,000', value: 600000 },
          ]}
        />
        <InputSelect
          customClass={`price-two ${
            advancedSearch ? 'advanced-price-two' : ''
          }`}
          name="Price To"
          bgColor="white"
          border
          onChange={value => onInputChange('priceTo', value)}
          value={props.homeSearch.priceTo}
          options={[
            { name: '300,0000', value: 3000000 },
            { name: '400,0000', value: 4000000 },
            { name: '500,0000', value: 5000000 },
            { name: '600,0000', value: 6000000 },
          ]}
        />
        <InputSelect
          customClass={`bed-home ${advancedSearch ? 'advanced-bed-home' : ''}`}
          name="Beds"
          bgColor="white"
          border
          onChange={value => onInputChange('noOfBed', value)}
          value={props.homeSearch.noOfBed}
          options={[
            { name: '1', value: 1 },
            { name: '2', value: 2 },
            { name: '3', value: 3 },
            { name: '4', value: 4 },
          ]}
        />
        <InputSelect
          customClass={`bath-home ${
            advancedSearch ? 'advanced-bath-home' : ''
          }`}
          name="Bathrooms"
          bgColor="white"
          border
          onChange={value => onInputChange('noOfBath', value)}
          value={props.homeSearch.noOfBath}
          options={[
            { name: '1', value: 1 },
            { name: '2', value: 2 },
            { name: '3', value: 3 },
            { name: '4', value: 4 },
          ]}
        />
        <BasicButton
          customClass={`home-search-btn ${
            advancedSearch ? 'advanced-home-search-btn' : ''
          }`}
          onClick={() => props.onSearch(makeParam())}
        >
          <SearchIcon /> Search
        </BasicButton>
        <p
          className="advanced-search"
          onClick={() => {
            setAdvancedSearch(!advancedSearch);
          }}
        >
          {advancedSearch ? (
            <span className="icon-class">
              <MinusIcon
                width="10"
                height="6"
                viewBox="0 0 8 8"
                fill="#2f70ff"
              />{' '}
              Less Search
            </span>
          ) : (
            <span className="icon-class">
              <PlusIcon
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="#2f70ff"
              />{' '}
              Advanced Search
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default HomeFormCard;
