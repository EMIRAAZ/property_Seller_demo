import './addform.scss';
import Input from '../../../components/input/admininput';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkIfAllKeyHasValue } from '../../../utils';

const keyArr = ['title'];

const AddForm = ({
  addTagHead,
  editTagHead,
  getTagHead,
  env,
  onChange,
  tagheadValue,
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
    getTagHead();
    navigate(`/admin/taghead`);
    clear();
  };

  const addAdminTagHead = () => {
    if (checkIfAllKeyHasValue(tagheadValue, keyArr)) {
      document.getElementById('on-add-warning').style.opacity = '100';
      return;
    }
    if (editing) {
      editTagHead(
        getID(),
        {
          ...tagheadValue,
        },
        () => editCB()
      );
    } else {
      addTagHead(
        {
          ...tagheadValue,
        },
        () => editCB()
      );
    }
  };

  return (
    <div className="add-taghead-form">
      <Input
        divClass="taghead-input"
        label="Name"
        required
        value={tagheadValue.title}
        onChange={e => onChangeInput('title', e.target.value)}
      />

      <span id="on-add-warning" className="pls-fill">
        please fill all the required fields !!
      </span>

      <Button
        customClass="add-taghead-btn"
        onClick={addAdminTagHead}
        loading={env.loading}
      >
        ADD
      </Button>
    </div>
  );
};

export default AddForm;
