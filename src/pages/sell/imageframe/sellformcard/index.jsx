import './sellformcard.scss';
import FormCard from '../../../../components/formcard';
import BasicSelect from '../../../../components/select/BasicSelect';
import BasicInput from '../../../../components/input/BasicInput';
import BasicButton from '../../../../components/button/BasicButton';

const SellFormCard = () => {
  return (
    <div className="sell-form-card">
      <FormCard customClass="sell-formcard">
        <p className="sell-list-main">List your property</p>
        <p className="sell-list-sub">
          If you list now, property valuation is on us.
        </p>
        <BasicInput divClass="name" type="text" placeholder="Name" />
        <BasicInput divClass="email" type="text" placeholder="Email" />
        <BasicInput divClass="mobile" type="text" placeholder="Mobile" />
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
        <BasicSelect
          customClass="location"
          name="Location"
          options={[
            { name: 'Villas' },
            { name: 'Resorts' },
            { name: 'Estates' },
            { name: 'Apartments' },
          ]}
        />

        <BasicButton customClass="sell-search-btn">Submit</BasicButton>
      </FormCard>
    </div>
  );
};

export default SellFormCard;
