import './mortgageformcard.scss';
import FormCard from '../../../../components/formcard';
import BasicSelect from '../../../../components/select/BasicSelect';
import BasicInput from '../../../../components/input/BasicInput';
import BasicButton from '../../../../components/button/BasicButton';

const MortgageFormCard = () => {
  return (
    <div className="mortgage-form-card">
      <FormCard customClass="mortgage-formcard">
        <BasicInput
          divClass="location"
          type="text"
          placeholder="Search a location"
        />

        <BasicSelect
          customClass="residence"
          name="Country of residence"
          options={[
            { name: 'Villas' },
            { name: 'Resorts' },
            { name: 'Estates' },
            { name: 'Apartments' },
          ]}
        />
        <BasicInput divClass="message" type="text" placeholder="Message" />
        <BasicButton customClass="mortgage-search-btn">Submit</BasicButton>
      </FormCard>
    </div>
  );
};

export default MortgageFormCard;
