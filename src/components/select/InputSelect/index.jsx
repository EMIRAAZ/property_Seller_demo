import './inputSelect.scss';
import ExpandIcon from '../../svg/expand';
import React, { useState } from 'react';

const InputSelect = ({
  name,
  options,
  customClass = '',
  onChange,
  value,
  leftIcon,
  bgColor = '#f3f3fa',
  border = false,
}) => {
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

  const onChangeInput = e => {
    setdropdownClass('show');
    onChange(e.target.value);
  };

  const onClick = () => {
    if (dropdownClass === 'hide') setdropdownClass('show');
    else setdropdownClass('hide');
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
      onClick={onClick}
    >
      <div
        style={{
          backgroundColor: bgColor,
          border: border ? '1px solid #c1cdee' : 'none',
        }}
        className="select-box"
      >
        {/* <p className="drop-btn">{selectName}</p> */}
        {leftIcon
          ? React.createElement(leftIcon, {
              className: 'left-b-input-icon',
              width: '14',
              height: '20',
              viewbox: '0 0 19 20',
            })
          : null}
        <input
          style={{ backgroundColor: bgColor }}
          className="drop-btn"
          placeholder={name}
          onChange={e => onChangeInput(e)}
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
