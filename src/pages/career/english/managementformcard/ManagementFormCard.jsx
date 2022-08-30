import "./managementformcard.scss";
import FormCard from "../../../../components/formcard";
import BasicSelect from "../../../../components/select/BasicSelect";
import BasicInput from "../../../../components/input/BasicInput";
import BasicButton from "../../../../components/button/BasicButton";

const ManagementFormCard = () => {
  return (
    <div className="management-form-card-career">
      <FormCard customClass="management-formcard">
        <p className="management-list-main">Send your Resume.</p>

        <BasicInput divClass="name" type="text" placeholder="Name" />
        <BasicInput divClass="email" type="text" placeholder="Email" />
        <BasicInput divClass="phone" type="text" placeholder="Phone Number" />
        <BasicInput divClass="phone" type="file" />

        <BasicButton customClass="management-search-btn">Submit</BasicButton>
      </FormCard>
    </div>
  );
};

export default ManagementFormCard;
