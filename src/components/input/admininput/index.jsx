import './admininput.scss';

const AdminInput = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  customClass,
  divClass,
  label,
  required = false,
}) => {
  return (
    <div className={`admin-input-div ${divClass} `}>
      <label>
        {label}
        {required ? <span>*</span> : <></>}
      </label>
      <input
        className={`admin-input ${customClass} `}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AdminInput;
