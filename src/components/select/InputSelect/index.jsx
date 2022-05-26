import './inputSelect.scss';
import ExpandIcon from '../../svg/expand';
import { useState } from 'react';

const InputSelect = ({ name, options, customClass = '', onChange, value }) => {
  const [selectName, setSelectName] = useState(name);
  const [dropdownClass, setdropdownClass] = useState('hide');

  const onMouseEnter = () => setdropdownClass('show');
  const onMouseLeave = () => setdropdownClass('hide');

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      setdropdownClass('hide');
    }
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
      className={`input-select ${customClass}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="select-box">
        {/* <p className="drop-btn">{selectName}</p> */}
        <input
          className="drop-btn"
          placeholder={name}
          onChange={e => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          value={value}
        />
        <ExpandIcon
          className="input-select-icon"
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

export default InputSelect;
