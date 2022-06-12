import './header.scss';
import HamburgerLogo from '../../svg/hamburger';
import HeaderButton from '../../button/HeaderButton';
import Close from '../../svg/close';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = props => {
  const navigate = useNavigate();
  const [state, changeState] = useState('hide');
  const onSidebarWebToggle = () => {
    changeState(state === 'hide' ? 'show' : 'hide');
  };

  const onClickAddProperty = () => {
    props.clearAddProperty();
    navigate('/admin/add-property');
  };

  const onClickAddAgency = () => {
    props.clearAddAgency();
    navigate('/admin/add-agency');
  };

  return (
    <div className="header-english">
      <div className={`web-sidebar ${state}`}>
        <ul>
          <li onClick={onSidebarWebToggle}>
            <Close />
          </li>
          <li onClick={() => navigate('/admin')}>Property </li>
          <li onClick={onClickAddProperty}>Add Property </li>
          <li onClick={() => navigate('/admin')}>Agency </li>
          <li onClick={onClickAddAgency}>Add Agency </li>
        </ul>
      </div>
      <div className={`mobile-sidebar ${state}`}>
        <ul>
          <li onClick={onSidebarWebToggle}>
            <Close />
          </li>
          <li onClick={() => navigate('/admin')}>Property</li>
          <li onClick={onClickAddProperty}>Add Property</li>
          <li onClick={() => navigate('/admin')}>Agency</li>
          <li onClick={onClickAddAgency}>Add Agency</li>
        </ul>
      </div>
      <ul className="header-list">
        <li className="logo" onClick={onSidebarWebToggle}>
          <HamburgerLogo width="35" height="28" />
        </li>
        <li className="company-name" onClick={() => navigate('/admin')}>
          <span className="main-name">UAE&nbsp;Assistant</span>
          <span className="sub-name">ADMIN</span>
        </li>
        <li className="desktop-li">
          <ul className="desktop-ul">
            <li className="simple-list" onClick={() => navigate('/admin')}>
              Property
            </li>
            <li className="simple-list" onClick={onClickAddProperty}>
              Add Property
            </li>
            <li className="simple-list" onClick={() => navigate('/admin')}>
              Agency
            </li>
            <li className="simple-list" onClick={onClickAddAgency}>
              Add Agency
            </li>
          </ul>
        </li>
        <li className="header-btn">
          <HeaderButton>االعربية</HeaderButton>
        </li>
      </ul>
    </div>
  );
};

export default Header;
