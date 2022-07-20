import './querycard.scss';
import BasicSelect from '../select/BasicSelect';
import InputSelect from '../select/InputSelect';
import LocationIcon from '../svg/location';
import BasicButton from '../button/BasicButton';
import SearchIcon from '../svg/search';
import { makeUrlParam } from '../../utils';

const QueryCard = ({
  onInputChange,
  onSearchLocation,
  cardInput,
  onSearch,
  isSale = true,
}) => {
  const onChange = (key, value) => {
    if (
      key === 'priceFrom' ||
      key === 'priceTo' ||
      key === 'noOfBed' ||
      key === 'noOfBath'
    ) {
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

  const getSearchValue = () => {
    const { location } = cardInput;
    if (typeof location === 'string') return location;
    else
      return `${location.placeAddress} ${
        location.building ? location.building : ''
      } ${location.city}`;
  };

  const makeParam = () => {
    const newListSearch = { ...cardInput };
    const { location } = newListSearch;
    let loc = '';
    if (typeof location === 'string') loc = location;
    else {
      loc = {
        placeAddress: location.placeAddress,
        city: location.city,
        ...(location.building ? { building: location.building } : {}),
      };
    }
    delete newListSearch.locationSearch;
    delete newListSearch.location;

    return `&${makeUrlParam({
      ...newListSearch,
      ...(typeof loc === 'string' ? { location: loc } : loc),
    })}`;
  };

  return (
    <div className="query-card-component">
      <div className="container">
        <InputSelect
          bgColor="white"
          border
          customClass="search"
          name="Search City, Building, Community .."
          onChange={value => onChange('location', value)}
          value={getSearchValue()}
          leftIcon={LocationIcon}
          options={cardInput.locationSearch.location.map(location => {
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
          customClass={`property ${isSale ? '' : 'no-sale'}`}
          name="Property Type"
          onChange={value => onChange('propertyType', value)}
          options={[
            { name: 'Villas', value: 'villas' },
            { name: 'Resorts', value: 'resorts' },
            { name: 'Estates', value: 'estates' },
            { name: 'Apartments', value: 'apartment' },
          ]}
        />
        {isSale ? (
          <BasicSelect
            bgColor="white"
            customClass="sale"
            name="Sale"
            border
            onChange={value => onChange('sale', value)}
            options={[
              { name: 'Buy', value: 'buy' },
              { name: 'Rent', value: 'rent' },
              { name: 'Both', value: 'both' },
            ]}
          />
        ) : null}
        <InputSelect
          customClass="price-from-list"
          bgColor="white"
          border
          name="Price From"
          onChange={value => onChange('priceFrom', value)}
          value={cardInput.priceFrom}
          options={[
            { name: '300,000', value: 300000 },
            { name: '400,000', value: 400000 },
            { name: '500,000', value: 500000 },
            { name: '600,000', value: 600000 },
          ]}
        />
        <InputSelect
          customClass="price-two-list"
          name="Price To"
          bgColor="white"
          border
          onChange={value => onChange('priceTo', value)}
          value={cardInput.priceTo}
          options={[
            { name: '300,0000', value: 3000000 },
            { name: '400,0000', value: 4000000 },
            { name: '500,0000', value: 5000000 },
            { name: '600,0000', value: 6000000 },
          ]}
        />
        <InputSelect
          customClass="bed-list"
          name="Beds"
          bgColor="white"
          border
          onChange={value => onChange('noOfBed', value)}
          value={cardInput.noOfBed}
          options={[
            { name: '1', value: 1 },
            { name: '2', value: 2 },
            { name: '3', value: 3 },
            { name: '4', value: 4 },
          ]}
        />
        <InputSelect
          customClass="bath-list"
          name="Bathrooms"
          bgColor="white"
          border
          onChange={value => onChange('noOfBath', value)}
          value={cardInput.noOfBath}
          options={[
            { name: '1', value: 1 },
            { name: '2', value: 2 },
            { name: '3', value: 3 },
            { name: '4', value: 4 },
          ]}
        />
        <BasicButton
          customClass="list-search-btn"
          onClick={() => onSearch(makeParam())}
        >
          <SearchIcon /> Search
        </BasicButton>
      </div>
    </div>
  );
};

export default QueryCard;
