import './basicSelect.scss';
import ExpandIcon from '../../svg/expand';
import { useState } from 'react';

const BasicSelect = ({
  name,
  options,
  customClass = '',
  onChange,
  bgColor = '#f3f3fa',
  border = false,
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
      className={`basic-select ${customClass}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div
        className="select-box"
        style={{
          backgroundColor: bgColor,
          border: border ? '1px solid #c1cdee' : 'none',
        }}
      >
        <p className="drop-btn">{selectName}</p>
        <ExpandIcon
          className="basic-select-icon"
          width="12"
          height="10"
          viewbox="0 0 15 10"
        />
      </div>
      <div
        style={{
          webkitOverflowScrolling: 'touch',
          overflowScrolling: 'scroll',
        }}
        className={`dropdown-content ${dropdownClass}`}
      >
        {renderOptions()}
      </div>
    </div>
  );
};

export default BasicSelect;
