import './addform.scss';
import Input from '../../../components/input/admininput';
import UploadImage from '../../../components/uploadimage';
import Textarea from '../../../components/input/admintextarea';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkIfAllKeyHasValue } from '../../../utils';
import Spinner from '../../../components/spinner';

const keyArr = ['title', 'mainTitle', 'description'];

const AddForm = ({
  addBlog,
  editBlog,
  getBlog,
  env,
  onChange,
  blogValue,
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
    getBlog();
    navigate(`/admin/blog`);
    clear();
    clearUpload();
  };

  const addAdminBlog = () => {
    if (checkIfAllKeyHasValue(blogValue, keyArr)) {
      document.getElementById('on-add-warning').style.opacity = '100';
      return;
    }
    if (editing) {
      editBlog(
        getID(),
        {
          ...blogValue,
          images: images[0] ? images : blogValue.images,
        },
        () => editCB()
      );
    } else {
      addBlog(
        {
          ...blogValue,
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
    <div className="add-blog-form">
      <Input
        divClass="blog-input"
        label="Title"
        required
        value={blogValue.title}
        onChange={e => onChangeInput('title', e.target.value)}
      />
      <Input
        divClass="blog-input"
        label="Main Title"
        required
        value={blogValue.mainTitle}
        onChange={e => onChangeInput('mainTitle', e.target.value)}
      />
      <Textarea
        divClass="blog-input"
        label="Description"
        rows={8}
        onChange={e => onChangeInput('description', e.target.value)}
        value={blogValue.description}
        required
      />
      <label className="property-image-label spinner-label">
        Blog Image<span>*</span> {renderImageLoadingSpinner()}
      </label>

      <UploadImage
        editing={editing}
        linkIndex={0}
        customClass="blog-logo-img"
        onChangeImage={() => {}}
        svg={true}
        value={blogValue.images}
      />

      <span id="on-add-warning" className="pls-fill">
        please fill all the required fields !!
      </span>
      <Button
        customClass="add-blog-btn"
        onClick={addAdminBlog}
        loading={env.loading}
      >
        ADD
      </Button>
    </div>
  );
};

export default AddForm;
