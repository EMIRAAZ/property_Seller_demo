import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
export default function ImageUpload(props) {
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    setImgArr(props.value);
  }, [props.value]);

  const onRemoveImage = name => {
    props.onDelete(name);
  };

  const renderImage = () =>
    imgArr.map((item, i) => (
      <div key={`${item}-${i}`} className="relative">
        <svg
          className="absolute -top-1 -right-1"
          onClick={() => onRemoveImage(item)}
          id="Layer_1"
          data-name="Layer 1"
          width="15.5px"
          height="15.5px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 122.88"
        >
          <path
            style={{ fill: '#eb0100' }}
            d="M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0Z"
          />
          <path
            style={{ fill: '#fff' }}
            d="M35.38,49.72c-2.16-2.13-3.9-3.47-1.19-6.1l8.74-8.53c2.77-2.8,4.39-2.66,7,0L61.68,46.86,73.39,35.15c2.14-2.17,3.47-3.91,6.1-1.2L88,42.69c2.8,2.77,2.66,4.4,0,7L76.27,61.44,88,73.21c2.65,2.58,2.79,4.21,0,7l-8.54,8.74c-2.63,2.71-4,1-6.1-1.19L61.68,76,49.9,87.81c-2.58,2.64-4.2,2.78-7,0l-8.74-8.53c-2.71-2.63-1-4,1.19-6.1L47.1,61.44,35.38,49.72Z"
          />
        </svg>
        <img
          className="rounded"
          src={item}
          max-width={100}
          width={100}
          height={100}
          max-height={100}
          alt="img"
        />
      </div>
    ));

  const onChange = e => {
    const formData = new FormData();
    formData.append('file', e.target.files[0], e.target.files[0].name);
    props.onChange(formData);
  };

  return (
    <div className={`flex flex-col`}>
      <label
        for={props.name}
        className="block mb-2 font-medium text-gray-900 text-sm"
      >
        {props.label}{' '}
        {props.required ? <span className="text-red-600">*</span> : ''}
      </label>
      <div className="flex bg-gray-50 flex-col items-center border cursor-pointer justify-center pt-5 pb-6 w-full rounded-lg">
        <div className="grid grid-rows-1  grid-cols-4 gap-2 ml-1 mr-1">
          {renderImage()}
        </div>
        <label className="mt-6 flex justify-center" for="dropzone-file">
          <svg
            aria-hidden="true"
            className="w-10 h-10 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <div className="ml-2 mt-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
          </div>
        </label>
      </div>
      <input
        id="dropzone-file"
        type="file"
        className="hidden"
        accept='accept="image/png, image/jpeg, image/jpg" '
        onChange={e => onChange(e)}
      />
    </div>
  );
}

ImageUpload.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.array,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
};

ImageUpload.defaultProps = {
  required: false,
  rows: 5,
};
