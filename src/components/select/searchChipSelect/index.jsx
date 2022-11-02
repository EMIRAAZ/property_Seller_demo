import './inputSelect.scss';
import ExpandIcon from '../../svg/expand';
import CloseIcon from '../../svg/close';
import React, { useState } from 'react';

const SearchChipSelect = ({
  name,
  options,
  customClass = '',
  onChange,
  value = [],
  leftIcon,
  bgColor = '#f3f3fa',
  border = false,
  onArrayChange = () => {},
}) => {
  const [selectName, setSelectName] = useState(value.length ? value : []);
  const [selectObj, setSelectObj] = useState([]);
  const [inputValue, setInputValue] = useState('');
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
    setSelectObj([...selectObj, value]);
    setSelectName([...selectName, name]);
    onArrayChange([...selectObj, value]);
    setInputValue('');

    dropdownClass === 'hide'
      ? setdropdownClass('show')
      : setdropdownClass('hide');
  };

  const onChangeInput = e => {
    setdropdownClass('show');
    onChange(e.target.value);
    setInputValue(e.target.value);
  };

  const onClick = () => {
    if (dropdownClass === 'hide') setdropdownClass('show');
    else setdropdownClass('hide');
  };

  const renderOptions = () =>
    (options || []).map((option, i) => {
      if (!selectName.includes(option.name)) {
        return (
          <p key={i} onClick={() => onClickOption(option.name, option.value)}>
            {option.name}
          </p>
        );
      }
    });

  const onClickChipRemove = (item, obj) => {
    if (item !== 'REMOVE_ALL') {
      setSelectName(selectName.filter(loc => loc !== item));
    } else {
      setSelectName([selectName[0]]);
    }
    if (item !== 'REMOVE_ALL') {
      setSelectObj(
        selectObj.filter(loc => loc.placeAddress !== obj.placeAddress),
        i => onArrayChange(i)
      );
    } else {
      setSelectObj([selectObj[0]]);
      onArrayChange([selectObj[0]]);
    }
  };

  const renderChip = () => {
    const chipArray = [];
    if (selectName.length > 0) {
      chipArray.push(
        <span className="render-chip">
          {selectName[0].slice(0, 10)}
          <CloseIcon
            onClick={() => onClickChipRemove(selectName[0], selectObj[0])}
            className="close-class"
            width="17"
            height="11"
            viewBox="0 0 14 24"
          />
        </span>
      );
    }
    if (selectName.length > 1) {
      chipArray.push(
        <span className="render-chip">
          {selectName.length - 1} More
          <CloseIcon
            onClick={() => onClickChipRemove('REMOVE_ALL')}
            className="close-class"
            width="17"
            height="11"
            viewBox="0 0 14 24"
          />
        </span>
      );
    }
    return chipArray;
  };
  return (
    <div
      className={`search-chip-select ${customClass}`}
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
              fill: '#2e2e2e',
            })
          : null}
        <div className="input-visual">{renderChip()}</div>
        <input
          style={{ backgroundColor: bgColor }}
          className="drop-btn"
          placeholder={selectName.length ? 'Add More' : name}
          onChange={e => onChangeInput(e)}
          onKeyDown={handleKeyDown}
          value={inputValue}
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

export default SearchChipSelect;
