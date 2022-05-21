import './shorttermformcard.scss';
import FormCard from '../../../../components/formcard';
import BasicSelect from '../../../../components/select/BasicSelect';
import BasicInput from '../../../../components/input/BasicInput';
import BasicButton from '../../../../components/button/BasicButton';

const SellFormCard = () => {
  return (
    <div className="shortterm-form-card">
      <FormCard customClass="shortterm-formcard">
        <BasicInput
          divClass="location"
          type="text"
          placeholder="Search a location"
        />
        <BasicInput divClass="check-in" type="text" placeholder="Check in" />
        <BasicInput divClass="check-out" type="text" placeholder="Check out" />
        <BasicSelect
          customClass="property"
          name="Choose Guest"
          options={[
            { name: 'Villas' },
            { name: 'Resorts' },
            { name: 'Estates' },
            { name: 'Apartments' },
          ]}
        />
        <BasicButton customClass="shortterm-search-btn">Submit</BasicButton>
      </FormCard>
    </div>
  );
};

export default SellFormCard;
