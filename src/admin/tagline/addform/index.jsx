import './addform.scss';
import Input from '../../../components/input/admininput';
import Select from '../../../components/select/adminSelect';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkIfAllKeyHasValue } from '../../../utils';

const keyArr = ['title'];

const AddForm = ({
  addTagLine,
  taghead,
  editTagLine,
  getTagLine,
  env,
  onChange,
  taglineValue,
  editing,
  clear,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const onChangeInput = (key, value) => {
    document.getElementById('on-add-warning').style.opacity = '0';
    onChange({ key, value });
  };

  const editCB = () => {
    getTagLine();
    navigate(`/admin/tagline`);
    clear();
  };

  const addAdminTagLine = () => {
    if (checkIfAllKeyHasValue(taglineValue, keyArr)) {
      document.getElementById('on-add-warning').style.opacity = '100';
      return;
    }
    if (editing) {
      editTagLine(
        getID(),
        {
          ...taglineValue,
        },
        () => editCB()
      );
    } else {
      addTagLine(
        {
          ...taglineValue,
        },
        () => editCB()
      );
    }
  };

  return (
    <div className="add-tagline-form">
      <Input
        divClass="tagline-input"
        label="Name"
        required
        value={taglineValue.title}
        onChange={e => onChangeInput('title', e.target.value)}
      />

      <span id="on-add-warning" className="pls-fill">
        please fill all the required fields !!
      </span>

      <Select
        customClass="property-input"
        label="Tagline"
        required
        value={taglineValue.tagheadId}
        options={taghead}
        onChange={v => onChangeInput('tagheadId', v)}
      />
      <span className="select-border"></span>

      <Button
        customClass="add-tagline-btn"
        onClick={addAdminTagLine}
        loading={env.loading}
      >
        ADD
      </Button>
    </div>
  );
};

export default AddForm;
