import "./managementformcard.scss";
import FormCard from "../../../../components/formcard";
import BasicSelect from "../../../../components/select/BasicSelect";
import BasicInput from "../../../../components/input/BasicInput";
import BasicButton from "../../../../components/button/BasicButton";

const ManagementFormCard = () => {
  return (
    <div className="management-form-card">
      <FormCard customClass="management-formcard">
        <p className="management-list-main">La Rosa</p>
        {/* <p className="heading-location">
          Dubai
          <span className="heading-location-span">Dubai Land , Villa nova</span>
        </p> */}
        <p className="management-list-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam
          odio quae veniam eligendi nulla voluptatum blanditiis, debitis
          suscipit accusantium quasi obcaecati. Aut vel dignissimos obcaecati
          molestias officiis repudiandae enim.
        </p>

        <BasicButton customClass="management-search-btn">Submit</BasicButton>
      </FormCard>
    </div>
  );
};

export default ManagementFormCard;
