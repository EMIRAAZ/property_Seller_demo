import './chipinput.scss';
import React from 'react';

const ChipInput = ({
  type,
  customClass = '',
  divClass = '',
  placeholder,
  value,
  onChange,
  leftIcon,
  rightIcon,
}) => {
  const removeLeftPaddingIfNotLeftIcon = () =>
    leftIcon ? '' : 'remove-left-padding';
  return (
    <div className={`chip-input-container ${divClass}`}>
      {leftIcon
        ? React.createElement(leftIcon, {
            className: 'left-b-input-icon',
            width: '14',
            height: '20',
            viewbox: '0 0 19 20',
          })
        : null}
      <input
        className={`chip-input ${customClass} ${removeLeftPaddingIfNotLeftIcon()}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {rightIcon
        ? React.createElement(rightIcon, { className: 'right-b-input-icon' })
        : null}
    </div>
  );
};

export default ChipInput;
