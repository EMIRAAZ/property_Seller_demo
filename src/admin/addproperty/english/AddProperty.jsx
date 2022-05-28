import './addproperty.scss';
import AdminHeader from '../../../components/adminheader';
import PropertyHeader from '../propertyheader';
import AddForm from '../addform';

const AddProperty = props => {
  console.log(props.addProperty);
  return (
    <div className="admin-add-property">
      <AdminHeader />
      <div className="admin-add-property-container">
        <PropertyHeader />
        <AddForm
          onChange={props.onInputChange}
          sale={props.sale}
          propertyType={props.propertyType}
        />
      </div>
    </div>
  );
};

export default AddProperty;
