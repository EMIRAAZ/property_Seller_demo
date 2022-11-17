import './header.scss';
import HamburgerLogo from '../../svg/hamburger';
import DownArrow from '../../svg/downarrow';
import HeaderButton from '../../button/HeaderButton';
import HeaderSelect from '../../select/HeaderSelect';
import Close from '../../svg/close';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = ({ customClass }) => {
  const navigate = useNavigate();
  let location = useLocation();

  const getLoc = () => location.pathname.split('/').pop();
  const [state, changeState] = useState('hide');
  const onSidebarWebToggle = () => {
    changeState(state === 'hide' ? 'show' : 'hide');
  };

  document.addEventListener('scroll', function (e) {
    if (state === 'show') {
      onSidebarWebToggle();
    }
  });

  return (
    <div className={`header-english ${customClass} ${state}`}>
      <div className={`web-sidebar ${state}`}>
        <ul>
          <li onClick={onSidebarWebToggle}>
            <Close />
          </li>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/dailyblog')}>Blogs</li>
          <li onClick={() => navigate('/news')}>News</li>
          <li onClick={() => navigate('/about')}>About Us</li>
          {/* <li onClick={() => navigate("/aboutfounder")}>About Founder</li> */}
          <li onClick={() => navigate('/career')}>Careers</li>
          <li onClick={() => navigate('/terms')}>Teams And Conditions</li>
          <li onClick={() => navigate('/')}>Land</li>
          <li onClick={() => navigate('/privacypolicy')}>Privacy Policy</li>
          <li className="simple-list" onClick={() => navigate('/sell')}>
            Advertise&nbsp;With&nbsp;Us
          </li>
        </ul>
      </div>
      <div className={`mobile-sidebar ${state}`}>
        <ul>
          <li onClick={onSidebarWebToggle}>
            <Close />
          </li>
          <li onClick={() => navigate('/')}>Home</li>

          <li onClick={() => navigate('/buy')}>Buy</li>
          <li onClick={() => navigate('/rent')}>Rent</li>
          <li>Commercial</li>
          <li onClick={() => navigate('/off-plan')}>Off Plan</li>
          <li onClick={() => navigate('/luxury-property')}>
            Luxury Properties
          </li>
          <li onClick={() => navigate('/dailyblog')}>Blogs</li>
          <li onClick={() => navigate('/news')}>News</li>
          <li onClick={() => navigate('/')}>Land</li>
          <li onClick={() => navigate('/about')}>About Us</li>
          {/* <li onClick={() => navigate("/aboutfounder")}>About Founder</li> */}
          <li onClick={() => navigate('/career')}>Careers</li>
          <li onClick={() => navigate('/terms')}>Teams And Conditions</li>
          <li onClick={() => navigate('/privacypolicy')}>Privacy Policy</li>
          <li className="simple-list" onClick={() => navigate('/sell')}>
            Advertise&nbsp;With&nbsp;Us
          </li>
        </ul>
      </div>
      <ul className="header-list">
        <li className="logo" onClick={onSidebarWebToggle}>
          <HamburgerLogo
            width="27"
            height="26"
            fill={getLoc() === '' ? '#ffffff' : '#2f70ff'}
          />
        </li>
        <li className="company-name" onClick={() => navigate('/')}>
          <span className="main-name">
            Property<span>Assistant</span>
          </span>
        </li>
        <li className="desktop-li">
          <ul className="desktop-ul">
            <li className="simple-list buy" onClick={() => navigate('/')}>
              Home
            </li>{' '}
            <li className="simple-list buy" onClick={() => navigate('/buy')}>
              Buy
            </li>
            <li className="simple-list rent" onClick={() => navigate('/rent')}>
              Rent
            </li>
            <li
              className="simple-list off"
              onClick={() => navigate('/off-plan')}
            >
              Off&nbsp;Plan
            </li>
            <li className="simple-list luxury">
              <HeaderSelect
                name="Luxury&nbsp;Properties"
                options={[
                  { name: 'Villas', type: 'Villa' },
                  { name: 'Apartments', type: 'Apartment' },
                  { name: 'Town House', type: 'Townhouse' },
                  { name: 'Pent House', type: 'Penthouse' },
                ]}
              />
              <DownArrow fill={getLoc() === '' ? '#ffffff' : '#000000'} />
            </li>
            <li className="simple-list" onClick={() => navigate('/sell')}>
              Advertise&nbsp;With&nbsp;Us
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
