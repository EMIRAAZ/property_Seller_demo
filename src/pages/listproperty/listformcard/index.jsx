import './listformcard.scss';
import BasicSelect from '../../../components/select/BasicSelect';
import InputSelect from '../../../components/select/InputSelect';
import LocationIcon from '../../../components/svg/location';
import BasicButton from '../../../components/button/BasicButton';
import SearchIcon from '../../../components/svg/search';
import { makeUrlParam } from '../../../utils';

const ListFormCard = props => {
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

  const getSearchValue = () => {
    const { location } = props.listSearch;
    if (typeof location === 'string') return location;
    else
      return `${location.placeAddress} ${
        location.building ? location.building : ''
      } ${location.city}`;
  };

  const makeParam = () => {
    const newListSearch = { ...props.listSearch };
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
    <div className="list-form-card-listproperty">
      <div className="list-formcard-listproperty">
        <InputSelect
          bgColor="white"
          border
          customClass="search"
          name="Search City, Building, Community .."
          onChange={value => onInputChange('location', value)}
          value={getSearchValue()}
          leftIcon={LocationIcon}
          options={props.listSearch.locationSearch.location.map(location => {
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
          customClass="property"
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
          customClass="sale"
          name="Sale"
          border
          onChange={value => onInputChange('sale', value)}
          options={[
            { name: 'Buy', value: 'buy' },
            { name: 'Rent', value: 'rent' },
            { name: 'Both', value: 'both' },
          ]}
        />
        <InputSelect
          customClass="price-from-list"
          bgColor="white"
          border
          name="Price From"
          onChange={value => onInputChange('priceFrom', value)}
          value={props.listSearch.priceFrom}
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
          onChange={value => onInputChange('priceTo', value)}
          value={props.listSearch.priceTo}
          options={[
            { name: '300,0000', value: 3000000 },
            { name: '400,0000', value: 4000000 },
            { name: '500,0000', value: 5000000 },
            { name: '600,0000', value: 6000000 },
          ]}
        />
        <BasicButton
          customClass="list-search-btn"
          onClick={() => props.onSearch(makeParam())}
        >
          <SearchIcon /> Search
        </BasicButton>
      </div>
    </div>
  );
};

export default ListFormCard;
