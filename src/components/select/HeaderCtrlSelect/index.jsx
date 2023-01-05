import './headerSelect.scss';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DownArrow from '../../svg/downarrow';
import { US, AE, SA, QA, BH, IN, GE, TR } from 'country-flag-icons/react/3x2';

const HeaderSelect = ({
  name,
  options,
  customClass = '',
  onClick = () => {},
  flag = null,
  txtcls = '',
  txtcls2 = '',
}) => {
  const [stateName, setName] = useState(name);
  const [stateEl, setEl] = useState(flag);
  let location = useLocation();

  const renderOptions = () =>
    (options || []).map((option, i) => (
      <p
        style={{ display: 'flex' }}
        key={i}
        onClick={() => {
          setName(option.name);
          if (option.element) {
            setEl(option.element);
          }
          onClick(option.type);
        }}
      >
        {option.element ? getFlagElement(option.element) : null}
        <span className="ml-2">{option.name}</span>
      </p>
    ));

  function detectMob() {
    return window.innerWidth <= 600;
  }
  return (
    <div className={`header-ctrl-select ${customClass}`}>
      <p className={`drop-btn-ctrl flex relative  gap-2 w-25 ${txtcls} `}>
        <span className="mt-0.5">{flag ? getFlagElement(stateEl) : null}</span>
        <span className={`relative left-1 ${txtcls2} `}> {stateName}</span>
        <DownArrow
          className="cursor-pointer mt-1.5 ml-1 sm:left-2  sm:relative sm:-top-0.5"
          fill={
            location.pathname === '/' && !detectMob() ? '#ffffff' : '#000000'
          }
        />
      </p>
      <div className="dropdown-content">{renderOptions()}</div>
    </div>
  );
};

const getFlagElement = flag => {
  switch (flag) {
    case 'US':
      return <US className="w-4 h-4 mt-0.5" />;
    case 'SA':
      return <SA className="w-4 h-4 mt-0.5" />;
    case 'BH':
      return <BH className="w-4 h-4 mt-0.5" />;
    case 'IN':
      return <IN className="w-4 h-4 mt-0.5" />;
    case 'GE':
      return <GE className="w-4 h-4 mt-0.5" />;
    case 'TR':
      return <TR className="w-4 h-4 mt-0.5" />;
    case 'AE':
      return <AE className="w-4 h-4 mt-0.5" />;
    case 'QA':
      return <QA className="w-4 h-4 mt-0.5" />;
    default:
      return <AE className="w-4 h-4 mt-0.5" />;
  }
};

export default HeaderSelect;
