import './admincheckbox.scss';

const AdminCheckbox = ({
  value,
  onChange,
  customClass,
  divClass,
  label,
  required = false,
}) => {
  return (
    <div className={`admin-checkbox-div ${divClass} `}>
      <label>
        {label}
        {required ? <span>*</span> : <></>}
      </label>
      <input
        className={`admin-checkbox ${customClass} `}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AdminCheckbox;
