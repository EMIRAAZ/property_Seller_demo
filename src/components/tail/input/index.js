import PropTypes from 'prop-types';

export default function Input(props) {
  return (
    <div className={`flex flex-col pr-10 w-full ${props.cls}`}>
      <label
        for={props.name}
        className="block mb-2 font-medium text-gray-900 text-sm"
      >
        {props.label}{' '}
        {props.required ? <span className="text-red-600">*</span> : ''}
      </label>
      <input
        outline="none"
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
        className="bg-gray-50 text-md border px-2.5 py-2 w-full placeholder:italic placeholder:text-sm focus:border-blue-400 focus:outline-none  rounded-lg"
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  cls: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  required: false,
  cls: '',
};
