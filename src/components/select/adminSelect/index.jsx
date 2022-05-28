import './adminselect.scss';
import ExpandIcon from '../../svg/expand';
import { useState } from 'react';

const AdminSelect = ({
  name,
  options,
  customClass = '',
  onChange,
  label,
  required = false,
}) => {
  const [selectName, setSelectName] = useState(name);
  const [dropdownClass, setdropdownClass] = useState('hide');

  const onMouseEnter = () => setdropdownClass('show');
  const onMouseLeave = () => setdropdownClass('hide');

  const onClick = () => {
    if (dropdownClass === 'hide') setdropdownClass('show');
    else setdropdownClass('hide');
  };

  const onClickOption = (name, value) => {
    onChange(value);
    setSelectName(name);
    dropdownClass === 'hide'
      ? setdropdownClass('show')
      : setdropdownClass('hide');
  };

  const renderOptions = () =>
    (options || []).map((option, i) => (
      <p key={i} onClick={() => onClickOption(option.name, option.value)}>
        {option.name}
      </p>
    ));
  return (
    <div
      className={`admin-select ${customClass}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <label>
        {label}
        {required ? <span>*</span> : <></>}
      </label>
      <div className="select-box">
        <p className="drop-btn">{selectName}</p>
        <ExpandIcon
          className="admin-select-icon"
          width="12"
          height="10"
          viewbox="0 0 15 10"
        />
      </div>
      <div className={`dropdown-content ${dropdownClass}`}>
        {renderOptions()}
      </div>
    </div>
  );
};

export default AdminSelect;
