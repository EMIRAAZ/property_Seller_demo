import './managementformcard.scss';
import FormCard from '../../../../components/formcard';
import BasicSelect from '../../../../components/select/BasicSelect';
import BasicInput from '../../../../components/input/BasicInput';
import BasicButton from '../../../../components/button/BasicButton';

const ManagementFormCard = () => {
  return (
    <div className="management-form-card">
      <FormCard customClass="management-formcard">
        <p className="management-list-main">
          Maximise your property investment
        </p>
        <p className="management-list-sub">
          List your property with us by filling out the form or by calling us
          directly on 600 52 2233.
        </p>
        <BasicInput
          divClass="location"
          type="text"
          placeholder="Search a location"
        />

        <BasicSelect
          customClass="prop-type"
          name="Property Type"
          options={[
            { name: 'Villas' },
            { name: 'Resorts' },
            { name: 'Estates' },
            { name: 'Apartments' },
          ]}
        />
        <BasicSelect
          customClass="loc-list"
          name="Location"
          options={[
            { name: 'Villas' },
            { name: 'Resorts' },
            { name: 'Estates' },
            { name: 'Apartments' },
          ]}
        />
        <BasicButton customClass="management-search-btn">Submit</BasicButton>
      </FormCard>
    </div>
  );
};

export default ManagementFormCard;
