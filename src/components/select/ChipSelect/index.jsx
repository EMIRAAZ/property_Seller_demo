import './chipselect.scss';
import ExpandIcon from '../../svg/expand';
import CloseIcon from '../../svg/close';
import { useState } from 'react';

const ChipSelect = ({
  options,
  customClass = '',
  onChange,
  label,
  required = false,
}) => {
  const [selectName, setSelectName] = useState([]);
  const [dropdownClass, setdropdownClass] = useState('hide');

  const onMouseEnter = () => setdropdownClass('show');
  const onMouseLeave = () => setdropdownClass('hide');

  const onClick = () => {
    if (dropdownClass === 'hide') setdropdownClass('show');
    else setdropdownClass('hide');
  };

  const onClickOption = name => {
    setSelectName([...selectName, name]);
    onChange([...selectName, name]);
    dropdownClass === 'hide'
      ? setdropdownClass('show')
      : setdropdownClass('hide');
  };

  const renderOptions = () =>
    (options || []).map((option, i) => (
      <p key={i} onClick={() => onClickOption(option)}>
        {option}
      </p>
    ));

  const removeChip = item => {
    const removedSelectName = selectName.filter(name => name !== item);
    setSelectName(removedSelectName);
  };

  const renderChip = () => {
    return selectName.map(item => (
      <p className="drop-btn-chip">
        <p>{item}</p>
        <span onClick={() => removeChip(item)}>
          <CloseIcon width="10" height="10" viewBox="0 0 15 15" />
        </span>
      </p>
    ));
  };
  return (
    <div
      className={`chip-select ${customClass}`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      <label>
        {label}
        {required ? <span>*</span> : <></>}
      </label>
      <div className="select-box">
        <div className="drop-btn">{renderChip()}</div>
        <ExpandIcon
          className="chip-select-icon"
          width="12"
          height="10"
          viewbox="0 0 15 10"
        />
      </div>
      <div
        className={`dropdown-content ${dropdownClass}`}
        onMouseLeave={onMouseLeave}
      >
        {renderOptions()}
      </div>
    </div>
  );
};

export default ChipSelect;
