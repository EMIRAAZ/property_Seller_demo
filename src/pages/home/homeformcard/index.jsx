import './homeformcard.scss';
import FormCard from '../../../components/formcard';
import BasicSelect from '../../../components/select/BasicSelect';
import InputSelect from '../../../components/select/InputSelect';
import BasicInput from '../../../components/input/BasicInput';
import LocationIcon from '../../../components/svg/location';
import BasicButton from '../../../components/button/BasicButton';
import SearchIcon from '../../../components/svg/search';
import { makeUrlParam } from '../../../utils';

const HomeFormCard = props => {
  const onInputChange = (key, value) => {
    props.onInputChange({ key, value });
  };
  return (
    <div className="home-form-card">
      <FormCard customClass="home-formcard">
        <BasicInput
          divClass="search"
          type="text"
          placeholder={'Search a location'}
          onChange={e => onInputChange('location', e.target.value)}
          leftIcon={LocationIcon}
        />
        <BasicSelect
          customClass="property"
          name="Property Type"
          onChange={value => onInputChange('propertyType', value)}
          options={[
            { name: 'Villas', value: 'villas' },
            { name: 'Resorts', value: 'resorts' },
            { name: 'Estates', value: 'estates' },
            { name: 'Apartments', value: 'apartments' },
          ]}
        />
        <BasicSelect
          customClass="sale"
          name="Sale"
          onChange={value => onInputChange('sale', value)}
          options={[
            { name: 'Buy', value: 'buy' },
            { name: 'Rent', value: 'buy' },
            { name: 'Both', value: 'both' },
          ]}
        />
        <InputSelect
          customClass="price-from"
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
          customClass="price-two"
          name="Price To"
          onChange={value => onInputChange('priceTo', value)}
          value={props.homeSearch.priceTo}
          options={[
            { name: '300,0000', value: 3000000 },
            { name: '400,0000', value: 4000000 },
            { name: '500,0000', value: 5000000 },
            { name: '600,0000', value: 6000000 },
          ]}
        />
        <BasicButton
          customClass="home-search-btn"
          onClick={() => props.onSearch(makeUrlParam(props.homeSearch))}
        >
          <SearchIcon /> Search
        </BasicButton>
      </FormCard>
    </div>
  );
};

export default HomeFormCard;
