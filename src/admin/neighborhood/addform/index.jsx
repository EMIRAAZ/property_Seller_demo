import './addform.scss';
import Input from '../../../components/input/admininput';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkIfAllKeyHasValue } from '../../../utils';
import SingleImageUpload from '../../../components/singleimageupload';
import Select from '../../../components/select/adminSelect';

const keyArr = ['title'];

const AddForm = ({
  addNeighborhood,
  editNeighborhood,
  getNeighborhood,
  env,
  onChange,
  neighborValue,
  editing,
  clear,
  deleteNeighImage,
  addNeighImage,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const onChangeInput = (key, value) => {
    document.getElementById('on-add-warning').style.opacity = '0';
    onChange({ key, value });
  };

  const editCB = () => {
    getNeighborhood();
    navigate(`/admin/neighborhood`);
    clear();
  };

  const addAdminNeighborhood = () => {
    if (checkIfAllKeyHasValue(neighborValue, keyArr)) {
      document.getElementById('on-add-warning').style.opacity = '100';
      return;
    }
    if (editing) {
      editNeighborhood(
        getID(),
        {
          ...neighborValue,
        },
        () => editCB()
      );
    } else {
      addNeighborhood(
        {
          ...neighborValue,
        },
        () => editCB()
      );
    }
  };

  return (
    <div className="add-neighbor-form">
      <Input
        divClass="neighbor-input"
        label="Name"
        required
        value={neighborValue.title}
        onChange={e => onChangeInput('title', e.target.value)}
      />
      <SingleImageUpload
        name="image"
        label="Image"
        required
        value={neighborValue.image}
        onChange={addNeighImage}
        onDelete={deleteNeighImage}
      />
      <Select
        customClass="w-full"
        label="Emirate"
        required
        value={neighborValue.emirate}
        options={[
          { name: 'Abu Dhabi', value: 'Abu Dhabi' },
          { name: 'Dubai', value: 'Dubai' },
          { name: 'Sharjah', value: 'Sharjah' },
          { name: 'Ajman', value: 'Ajman' },
          { name: 'Umm Al Quwain', value: 'Umm Al Quwain' },
          { name: 'Ras Al Khaimah', value: 'Ras Al Khaimah' },
          { name: 'Fujairah', value: 'Fujairah' },
        ]}
        onChange={value => onChangeInput('emirate', value)}
      />

      <span id="on-add-warning" className="pls-fill">
        please fill all the required fields !!
      </span>

      <Button
        customClass="add-neighbor-btn"
        onClick={addAdminNeighborhood}
        loading={env.loading}
      >
        ADD
      </Button>
    </div>
  );
};

export default AddForm;
