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
    else if (props.value && props.value[props.linkIndex])
      return (
        <>
          <img
            className="upload-img-class"
            alt="pic"
            src={props.value[props.linkIndex]}
          />
        </>
      );
    else <></>;
  };

  return (
    <div className={`upload-container ${props.customClass || ''}`}>
      <label htmlFor="icon-button-file">
        <input
          accept="image/*"
          id="icon-button-file"
          className="upload-input"
          type="file"
          onChange={e => onChange(e)}
        />
        <Camera customClass="upload-img-icon" />
        {getIcon()}
      </label>
    </div>
  );
};

export default UploadImage;
