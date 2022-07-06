import './uploadimage.scss';

import Camera from '../../components/svg/camera';

const UploadImage = ({
  onChangeImage,
  uploadImage,
  linkIndex,
  editing,
  value,
  link,
  customClass,
  key,
  multiple = false,
}) => {
  const onChange = (e, i) => {
    onUploadFile(e.target.files[0]);
  };

  const onUploadFile = file => {
    const formData = new FormData();
    formData.append('file', file, file.name);
    uploadImage(formData, onChangeImage, linkIndex);
  };

  const getIcon = () => {
    if (editing) {
      const imgArr = [...value, ...link];
      return (
        <>
          <img
            className="upload-img-class"
            alt="pic"
            src={multiple ? imgArr[linkIndex] : imgArr.pop()}
          />
        </>
      );
    } else if (!editing) {
      if (link[linkIndex]) {
        return (
          <img className="upload-img-class" alt="pic" src={link[linkIndex]} />
        );
      } else <></>;
    } else <></>;
  };

  return (
    <div key={key} className={`upload-container ${customClass || ''}`}>
      <label htmlFor="icon-button-file">
        <input
          accept="image/*"
          id="icon-button-file"
          className="upload-input"
          type="file"
          onChange={e => onChange(e, linkIndex)}
        />
        <Camera customClass="upload-img-icon" />
        {getIcon()}
      </label>
    </div>
  );
};

export default UploadImage;
