import './headerSelect.scss';
import { useState } from 'react';
import { US, AE, SA, QA, BH, IN, GE, TR } from 'country-flag-icons/react/3x2';

const HeaderSelect = ({ name, options, customClass = '', onClick, flag }) => {
  const [stateName, setName] = useState(name);
  const [stateEl, setEl] = useState(flag);
  const renderOptions = () =>
    (options || []).map((option, i) => (
      <p
        style={{ display: 'flex' }}
        key={i}
        onClick={() => {
          setName(option.name);
          setEl(option.element);
          onClick(option.type);
        }}
      >
        {getFlagElement(option.element)}
        <span className="ml-2">{option.name}</span>
      </p>
    ));
  return (
    <div className={`header-ctrl-select ${customClass}`}>
      <p className="drop-btn-ctrl flex relative top-1.5  gap-2 w-20">
        {getFlagElement(stateEl)}
        {stateName}
      </p>
      <div className="dropdown-content">{renderOptions()}</div>
    </div>
  );
};

const getFlagElement = flag => {
  switch (flag) {
    case 'US':
      return <US className="w-4" />;
    case 'SA':
      return <SA className="w-4" />;
    case 'BH':
      return <BH className="w-4" />;
    case 'IN':
      return <IN className="w-4" />;
    case 'GE':
      return <GE className="w-4" />;
    case 'TR':
      return <TR className="w-4" />;
    case 'AE':
      return <AE className="w-4" />;
    case 'QA':
      return <QA className="w-4" />;
    default:
      return <AE className="w-4" />;
  }
};

export default HeaderSelect;
