import './basicInput.scss';
import React from 'react';

const BasicInput = ({
  type,
  customClass = '',
  placeholder,
  value,
  onChange,
  leftIcon,
  rightIcon,
}) => {
  return (
    <div className="basic-input-container">
      {leftIcon
        ? React.createElement(leftIcon, {
            className: 'left-b-input-icon',
            width: '14',
            height: '20',
            viewbox: '0 0 19 20',
          })
        : null}
      <input
        className={`basic-input ${customClass}`}
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

export default BasicInput;
