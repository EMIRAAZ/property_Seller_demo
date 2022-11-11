import './uploadimage.scss';
import Camera from '../svg/camera';

const UploadOffplanImage = ({
  onChangeImage,
  uploadOffplanAdminImage,
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
    uploadOffplanAdminImage(formData, onChangeImage, linkIndex);
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
          <>
            <img className="upload-img-class" alt="pic" src={link[linkIndex]} />
          </>
        );
      } else <></>;
    } else <></>;
  };

  return (
    <div key={key} className={`upload-container ${customClass || ''}`}>
      <label htmlFor="icon-button-file-2">
        <input
          accept="image/*"
          id="icon-button-file-2"
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

export default UploadOffplanImage;
