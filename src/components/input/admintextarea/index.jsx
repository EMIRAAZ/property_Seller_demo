import './admintextarea.scss';

const AdminTextarea = ({
  rows,
  cols,
  type,
  value,
  onChange,
  placeholder,
  customClass,
  divClass,
  label,
  required = false,
  name,
}) => {
  return (
    <div className={`admin-textarea-div ${divClass} `}>
      <label>
        {label}
        {required ? <span>*</span> : <></>}
      </label>
      <textarea
        rows={rows}
        cols={cols}
        className={`admin-textarea ${customClass} `}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default AdminTextarea;
