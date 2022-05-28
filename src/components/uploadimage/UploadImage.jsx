import './uploadimage.scss';

import Camera from '../../components/svg/camera';

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
    if (props.link[props.linkIndex])
      return (
        <img
          className="upload-img-class"
          alt="pic"
          src={props.link[props.linkIndex]}
        />
      );
    else return <Camera customClass="upload-img-icon" />;
  };

  const getText = () => {
    if (props.loading) return 'loading..';
    else if (props.error)
      return (
        <>
          <strong>Error </strong> <span className="error">try again</span>
        </>
      );
    else if (props.link.length)
      return (
        <>
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
        <input
          accept="image/*"
          id="icon-button-file"
          className="upload-input"
          type="file"
          onChange={e => onChange(e)}
        />
        {getIcon()}
      </label>
      <p>{getText()}</p>
    </div>
  );
};

export default UploadImage;
