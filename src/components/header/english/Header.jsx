import './header.scss';
import HamburgerLogo from '../../svg/hamburger';
import DownArrow from '../../svg/downarrow';
import HeaderButton from '../../button/HeaderButton';
import HeaderSelect from '../../select/HeaderSelect';
import Close from '../../svg/close';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [state, changeState] = useState('hide');
  const onSidebarWebToggle = () => {
    changeState(state === 'hide' ? 'show' : 'hide');
  };

  return (
    <div className="header-english">
      <div className={`web-sidebar ${state}`}>
        <ul>
          <li onClick={onSidebarWebToggle}>
            <Close />
          </li>
          <li>Blogs</li>
          <li>About Us</li>
          <li>About Founder</li>
          <li>Our Team</li>
          <li>Our Partners</li>
          <li>Careers</li>
          <li>Teams And Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className={`mobile-sidebar ${state}`}>
        <ul>
          <li onClick={onSidebarWebToggle}>
            <Close />
          </li>
          <li onClick={() => navigate('/buy')}>Buy</li>
          <li onClick={() => navigate('/rent')}>Rent</li>
          <li onClick={() => navigate('/sell')}>Sell</li>
          <li>Short Term</li>
          <li>Commercial</li>
          <li>Property Management</li>
          <li>Mortgages</li>
          <li>Off Plan</li>
          <li>Luxury Properties</li>
          <li>Blogs</li>
          <li>News</li>
        </ul>
      </div>
      <ul className="header-list">
        <li className="logo" onClick={onSidebarWebToggle}>
          <HamburgerLogo width="35" height="28" />
        </li>
        <li className="company-name" onClick={() => navigate('/')}>
          <span className="main-name">UAE&nbsp;Assistant</span>
          <span className="sub-name">Properties</span>
        </li>
        <li className="desktop-li">
          <ul className="desktop-ul">
            <li className="simple-list buy" onClick={() => navigate('/buy')}>
              Buy
            </li>
            <li className="simple-list rent" onClick={() => navigate('/rent')}>
              Rent
            </li>
            <li className="simple-list sell" onClick={() => navigate('/sell')}>
              Sell
            </li>
            <li className="simple-list short">Short&nbsp;Term</li>
            <li className="simple-list mortgages">Mortgages</li>
            <li className="simple-list off">Off&nbsp;Plan</li>
            <li className="simple-list luxury">
              <HeaderSelect
                name="Luxury&nbsp;Properties"
                options={[
                  { name: 'Villas' },
                  { name: 'Resorts' },
                  { name: 'Estates' },
                  { name: 'Apartments' },
                ]}
              />
              <DownArrow />
            </li>
            <li className="simple-list">List&nbsp;Your&nbsp;Property</li>
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
