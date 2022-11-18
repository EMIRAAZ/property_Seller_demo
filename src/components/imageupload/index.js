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
          className="absolute -top-2 -right-1"
          onClick={() => onRemoveImage(item)}
          viewBox="0 0 20 30"
          width="20"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#606060"
            d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"
          />
        </svg>
        <img
          className="rounded"
          src={item}
          width={100}
          height={100}
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
      <div class="flex bg-gray-50 flex-col items-center border cursor-pointer justify-center pt-5 pb-6 w-full rounded-lg">
        <div class="grid grid-rows-2  grid-cols-3 gap-3">{renderImage()}</div>
        <label for="dropzone-file">
          <svg
            aria-hidden="true"
            class="w-10 h-10 mb-3 text-gray-400"
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
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
        </label>
      </div>
      <input
        id="dropzone-file"
        type="file"
        class="hidden"
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
