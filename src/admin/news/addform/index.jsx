import './addform.scss';
import Input from '../../../components/input/admininput';
import Textarea from '../../../components/input/admintextarea';
import ChipSelect from '../../../components/select/ChipSelect';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkIfAllKeyHasValue } from '../../../utils';
import SingleImageUpload from '../../../components/singleimageupload';

const keyArr = ['title', 'description', 'image'];

const AddForm = ({
  addNews,
  editNews,
  getNews,
  env,
  onChange,
  newsValue,
  editing,
  clear,
  clearUpload,
  deleteNewsImage,
  addNewsImage,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const onChangeInput = (key, value) => {
    document.getElementById('on-add-warning').style.opacity = '0';
    onChange({ key, value });
  };

  const editCB = () => {
    getNews();
    navigate(`/admin/news`);
    clear();
    clearUpload();
  };

  const addAdminNews = () => {
    if (checkIfAllKeyHasValue(newsValue, keyArr)) {
      document.getElementById('on-add-warning').style.opacity = '100';
      return;
    }
    if (editing) {
      editNews(
        getID(),
        {
          ...newsValue,
        },
        () => editCB()
      );
    } else {
      addNews(
        {
          ...newsValue,
        },
        () => editCB()
      );
    }
  };

  return (
    <div className="add-news-form">
      <Input
        divClass="news-input"
        label="Title"
        required
        value={newsValue.title}
        onChange={e => onChangeInput('title', e.target.value)}
      />
      <Textarea
        divClass="news-input"
        label="Description"
        rows={8}
        onChange={e => onChangeInput('description', e.target.value)}
        value={newsValue.description}
        required
      />
      <SingleImageUpload
        name="image"
        label="Image"
        required
        value={newsValue.image}
        onChange={addNewsImage}
        onDelete={deleteNewsImage}
      />

      <span id="on-add-warning" className="pls-fill">
        please fill all the required fields !!
      </span>
      {/* 
      <ChipSelect
        customClass="news-input"
        label="Topics"
        options={topics}
        value={newsValue.topics}
        onChange={v => onChangeInput('topics', v)}
        required
      /> */}
      <Button
        customClass="add-news-btn"
        onClick={addAdminNews}
        loading={env.loading}
      >
        ADD
      </Button>
    </div>
  );
};

export default AddForm;
