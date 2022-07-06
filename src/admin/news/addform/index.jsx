import './addform.scss';
import Input from '../../../components/input/admininput';
import UploadImage from '../../../components/uploadimage';
import Textarea from '../../../components/input/admintextarea';
import ChipSelect from '../../../components/select/ChipSelect';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkIfAllKeyHasValue } from '../../../utils';
import Spinner from '../../../components/spinner';

const keyArr = ['title', 'mainTitle', 'description'];

const AddForm = ({
  addNews,
  topics,
  editNews,
  getNews,
  env,
  onChange,
  newsValue,
  editing,
  clear,
  images,
  imgLoading,
  imgError,
  clearUpload,
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
          images: images[0] ? images : newsValue.images,
        },
        () => editCB()
      );
    } else {
      addNews(
        {
          ...newsValue,
          images: images,
        },
        () => editCB()
      );
    }
  };

  const renderImageLoadingSpinner = () => {
    if (imgLoading) {
      return <Spinner />;
    } else if (imgError) {
      return <span className="img-add-error">Errored ! please try again</span>;
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
      <Input
        divClass="news-input"
        label="Main Title"
        required
        value={newsValue.mainTitle}
        onChange={e => onChangeInput('mainTitle', e.target.value)}
      />
      <Textarea
        divClass="news-input"
        label="Description"
        rows={8}
        onChange={e => onChangeInput('description', e.target.value)}
        value={newsValue.description}
        required
      />
      <label className="property-image-label spinner-label">
        News Image<span>*</span> {renderImageLoadingSpinner()}
      </label>

      <UploadImage
        editing={editing}
        linkIndex={0}
        customClass="news-logo-img"
        onChangeImage={() => {}}
        svg={true}
        value={newsValue.images}
      />

      <span id="on-add-warning" className="pls-fill">
        please fill all the required fields !!
      </span>

      <ChipSelect
        customClass="news-input"
        label="Topics"
        options={topics}
        value={newsValue.topics}
        onChange={v => onChangeInput('topics', v)}
        required
      />

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
