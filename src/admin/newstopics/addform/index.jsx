import './addform.scss';
import Input from '../../../components/input/admininput';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkIfAllKeyHasValue } from '../../../utils';

const keyArr = ['name'];

const AddForm = ({
  addNewsTopics,
  editNewsTopics,
  getNewsTopics,
  env,
  onChange,
  newstopicsValue,
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
    getNewsTopics();
    navigate(`/admin/newstopics`);
    clear();
  };

  const addAdminNewsTopics = () => {
    if (checkIfAllKeyHasValue(newstopicsValue, keyArr)) {
      document.getElementById('on-add-warning').style.opacity = '100';
      return;
    }
    if (editing) {
      editNewsTopics(
        getID(),
        {
          ...newstopicsValue,
        },
        () => editCB()
      );
    } else {
      addNewsTopics(
        {
          ...newstopicsValue,
        },
        () => editCB()
      );
    }
  };

  return (
    <div className="add-newstopics-form">
      <Input
        divClass="newstopics-input"
        label="Name"
        required
        value={newstopicsValue.name}
        onChange={e => onChangeInput('name', e.target.value)}
      />

      <span id="on-add-warning" className="pls-fill">
        please fill all the required fields !!
      </span>

      <Button
        customClass="add-newstopics-btn"
        onClick={addAdminNewsTopics}
        loading={env.loading}
      >
        ADD
      </Button>
    </div>
  );
};

export default AddForm;
