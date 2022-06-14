import "./managementformcard.scss";
import FormCard from "../../../../components/formcard";
import BasicSelect from "../../../../components/select/BasicSelect";
import BasicInput from "../../../../components/input/BasicInput";
import BasicButton from "../../../../components/button/BasicButton";

const ManagementFormCard = () => {
  return (
    <div className="management-form-card">
      <FormCard customClass="management-formcard">
        <p className="management-list-main">Register now.</p>

        <BasicInput divClass="name" type="text" placeholder="Name" />
        <BasicInput divClass="email" type="text" placeholder="Email" />
        <BasicInput divClass="phone" type="text" placeholder="Phone Number" />

        <BasicSelect
          customClass="loc-list"
          name="Country of Residence"
          options={[
            { name: "uae" },
            { name: "india" },
            { name: "uk" },
            { name: "usa" },
          ]}
        />
        <BasicButton customClass="management-search-btn">Submit</BasicButton>
      </FormCard>
    </div>
  );
};

export default ManagementFormCard;
