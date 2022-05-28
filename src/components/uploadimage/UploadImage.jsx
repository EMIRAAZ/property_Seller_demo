import './uploadimage.scss';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Avatar from '@mui/material/Avatar';
import ErrorIcon from '@mui/icons-material/Error';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Input from '@mui/material/Input';

const UploadImage = props => {
  const onChange = e => {
    onUploadFile(e.target.files[0]);
  };

  const onUploadFile = file => {
    const formData = new FormData();
    formData.append('file', file, file.name);
    props.uploadImage(formData, props.onChangeImage);
  };

  const getIcon = () => {
    if (props.loading) return <CircularProgress className="upload-icon" />;
    else if (props.error) return <ErrorIcon className="upload-icon" />;
    else if (props.link)
      return <Avatar alt="uploaded photo" src={props.link} />;
    else return <AddAPhotoIcon className="upload-icon" />;
  };
  const getText = () => {
    if (props.loading) return 'loading..';
    else if (props.error)
      return (
        <>
          <strong>Error </strong>{' '}
          <span className="error">Please try again</span>
        </>
      );
    else if (props.link)
      return (
        <>
          <strong>Successfully </strong>
          <span className="success">uploaded image</span>
        </>
      );
    else
      return (
        <>
          <strong>Click </strong> <span className="add">to add Image.</span>
        </>
      );
  };
  return (
    <div className="upload-container">
      <label htmlFor="icon-button-file">
        <Input
          accept="image/*"
          id="icon-button-file"
          className="upload-input"
          type="file"
          onChange={e => onChange(e)}
        />
        <div className="upload-picture">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            {getIcon()}
          </IconButton>
        </div>
      </label>
      <p>{getText()}</p>
    </div>
  );
};

export default UploadImage;
