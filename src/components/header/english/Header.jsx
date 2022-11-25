import './header.scss';
import DownArrow from '../../svg/downarrow';
import HeaderSelect from '../../select/HeaderSelect';
import HeaderCtrlSelect from '../../select/HeaderCtrlSelect';
import Close from '../../svg/close';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { HeaderCtrl } from '../headerctrl';
import HamburgerLogo from '../../svg/hamburger';

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

  const luxuryPropertyOnClick = type => {
    navigate(`/luxury-property/${type}`);
  };

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
            <Close className="pb-1" />
          </li>
          <li onClick={() => navigate('/')}>
            <span className="border rounded-sm px-2 py-0.5 border-black">
              Log In
            </span>
          </li>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About Us</li>
          <li onClick={() => navigate('/off-plan')}>Off Plan</li>
          <li>Commercial</li>
          <li onClick={() => navigate('/listproperty/readytomove')}>Ready</li>

          <li className="-left-2 relative">
            <HeaderCtrlSelect
              customClass="mx-2 cursor-pointer"
              name="English"
              options={[
                {
                  name: 'English',
                  type: 'en',
                },
                {
                  name: 'Arabic',
                  type: 'ar',
                },
              ]}
            />
          </li>
          <li className="-left-2 relative">
            <HeaderCtrlSelect
              customClass="mx-2 cursor-pointer"
              name="UAE"
              flag="AE"
              options={[
                {
                  name: 'UAE',
                  type: 'UAE',
                  element: 'AE',
                },
                {
                  name: 'SAUDI',
                  type: 'SAUDI',
                  element: 'SA',
                },
                {
                  name: 'QATAR',
                  type: 'QATAR',
                  element: 'QA',
                },
                {
                  name: 'BAHRAIN',
                  type: 'BAHRAIN',
                  element: 'BH',
                },
                {
                  name: 'INDIA',
                  type: 'INDIA',
                  element: 'IN',
                },
                {
                  name: 'GEORGIA',
                  type: 'GEORGIA',
                  element: 'GE',
                },
                {
                  name: 'TURKEY',
                  type: 'TURKEY',
                  element: 'TR',
                },
              ]}
            />
          </li>
          <li onClick={() => navigate('/dailyblog')}>Blogs</li>
          <li onClick={() => navigate('/news')}>News</li>
          <li onClick={() => navigate('/')}>Land</li>
          <li onClick={() => navigate('/career')}>Careers</li>
          {/* <li onClick={() => navigate('/terms')}>Teams And Conditions</li>
          <li onClick={() => navigate('/privacypolicy')}>Privacy Policy</li> */}
          <li onClick={() => navigate('/luxury-property')}>
            Luxury Properties
          </li>
          <li className="simple-list" onClick={() => navigate('/sell')}>
            List&nbsp;Your&nbsp;Property
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
        <li className="company-name absolute" onClick={() => navigate('/')}>
          {/* {location.pathname === '/' ? (
            <img
              width={200}
              className="relative"
              src="/assets/image/pa.png"
              alt="Property Assistant"
            />
          ) : ( */}
          <span className="main-name">
            Property<span>Assistant</span>
          </span>
          {/* )} */}
        </li>
        <li
          className={`desktop-li ${
            location.pathname === '/'
              ? 'desktop-li-home-margin'
              : 'desktop-li-margin'
          }`}
        >
          <ul className="desktop-ul">
            {location.pathname !== '/' ? (
              <li className="simple-list buy" onClick={() => navigate('/')}>
                Home
              </li>
            ) : null}
            <li
              className="simple-list off"
              onClick={() => navigate('/off-plan')}
            >
              Off&nbsp;Plan
            </li>
            <li className="simple-list luxury">
              <HeaderSelect
                name="Luxury&nbsp;Properties"
                onClick={luxuryPropertyOnClick}
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
              List&nbsp;Your&nbsp;Property
            </li>
          </ul>
        </li>
        <li className="desktop-li-updated absolute right-4">
          <HeaderCtrl />
        </li>
      </ul>
    </div>
  );
};

export default Header;
