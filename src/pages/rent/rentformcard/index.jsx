import './rentformcard.scss';
import FormCard from '../../../components/formcard';
import BasicSelect from '../../../components/select/BasicSelect';
import BasicInput from '../../../components/input/BasicInput';
import LocationIcon from '../../../components/svg/location';
import BasicButton from '../../../components/button/BasicButton';
import SearchIcon from '../../../components/svg/search';

const RentFormCard = () => {
  return (
    <div className="rent-form-card">
      <FormCard customClass="rent-formcard">
        <BasicSelect
          customClass="property"
          name="Property Type"
          options={[
            { name: 'Villas' },
            { name: 'Resorts' },
            { name: 'Estates' },
            { name: 'Apartments' },
          ]}
        />
        <BasicInput
          divClass="search"
          type="text"
          placeholder={'Search a location'}
          leftIcon={LocationIcon}
        />
        <BasicButton customClass="rent-search-btn">
          <SearchIcon /> Search
        </BasicButton>
        <BasicSelect
          customClass="sale"
          name="Sale"
          options={[
            { name: 'Villas' },
            { name: 'Resorts' },
            { name: 'Estates' },
            { name: 'Apartments' },
          ]}
        />
        <BasicSelect
          customClass="price-from"
          name="Price From"
          options={[
            { name: 'Villas' },
            { name: 'Resorts' },
            { name: 'Estates' },
            { name: 'Apartments' },
          ]}
        />
        <BasicSelect
          customClass="price-two"
          name="Price To"
          options={[
            { name: 'Villas' },
            { name: 'Resorts' },
            { name: 'Estates' },
            { name: 'Apartments' },
          ]}
        />
        <BasicButton customClass="rent-advanced-search-btn">
          Advanced Search
        </BasicButton>
      </FormCard>
    </div>
  );
};

export default RentFormCard;
