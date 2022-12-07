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
  value,
}) => {
  const [dropdownClass, setdropdownClass] = useState('hide');

  const onMouseEnter = () => setdropdownClass('show');
  const onMouseLeave = () => setdropdownClass('hide');

  const onClick = () => {
    if (dropdownClass === 'hide') setdropdownClass('show');
    else setdropdownClass('hide');
  };

  const onClickOption = name => {
    onChange([...(value && value.length ? value : []), name.toLowerCase()]);
    dropdownClass === 'hide'
      ? setdropdownClass('show')
      : setdropdownClass('hide');
  };

  const renderOptions = () =>
    (options || []).map((option, i) => {
      if (value && !value.includes(option.value)) {
        return (
          <p key={i} onClick={() => onClickOption(option.name, option.value)}>
            {option.name}
          </p>
        );
      } else if (!value) {
        return (
          <p key={i} onClick={() => onClickOption(option.name, option.value)}>
            {option.name}
          </p>
        );
      }
    });

  const removeChip = item => {
    const removedSelectName = value.filter(name => name !== item);
    onChange([...removedSelectName]);
  };

  const renderChip = () => {
    return (value || []).map((item, i) => (
      <p key={i} className="drop-btn-chip">
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
