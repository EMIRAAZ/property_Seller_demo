import './header.scss';
import HamburgerLogo from '../../svg/hamburger';
import DownArrow from '../../svg/downarrow';
import HeaderButton from '../../button/HeaderButton';
import HeaderSelect from '../../select/HeaderSelect';
import Close from '../../svg/close';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ customClass }) => {
  const navigate = useNavigate();
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
          <li onClick={() => navigate('/management')}>Property Management</li>
          <li onClick={() => navigate('/blogs')}>Blogs</li>
          <li onClick={() => navigate('/news')}>News</li>
          <li onClick={() => navigate('/about')}>About Us</li>
          <li onClick={() => navigate('/aboutfounder')}>About Founder</li>
          <li onClick={() => navigate('/ourteam')}>Our Team</li>
          <li onClick={() => navigate('/ourpartner')}>Our Partners</li>
          <li onClick={() => navigate('/career')}>Careers</li>
          <li onClick={() => navigate('/terms')}>Teams And Conditions</li>
          <li onClick={() => navigate('/privacypolicy')}>Privacy Policy</li>
        </ul>
      </div>
      <div className={`mobile-sidebar ${state}`}>
        <ul>
          <li onClick={onSidebarWebToggle}>
            <Close />
          </li>
          <li onClick={() => navigate('/buy')}>Buy</li>
          <li onClick={() => navigate('/rent')}>Rent</li>
          {/* <li onClick={() => navigate('/sell')}>Sell</li> */}
          {/* <li onClick={() => navigate('/shortterm')}>Short Term</li> */}
          <li>Commercial</li>
          <li onClick={() => navigate('/management')}>Property Management</li>
          {/* <li onClick={() => navigate('/mortgage')}>Mortgages</li> */}
          <li>Off Plan</li>
          <li>Luxury Properties</li>
          <li onClick={() => navigate('/blogs')}>Blogs</li>
          <li onClick={() => navigate('/news')}>News</li>
          <li onClick={() => navigate('/about')}>About Us</li>
          <li onClick={() => navigate('/aboutfounder')}>About Founder</li>
          <li onClick={() => navigate('/ourteam')}>Our Team</li>
          <li onClick={() => navigate('/ourpartner')}>Our Partners</li>
          <li onClick={() => navigate('/career')}>Careers</li>
          <li onClick={() => navigate('/terms')}>Teams And Conditions</li>
          <li onClick={() => navigate('/privacypolicy')}>Privacy Policy</li>
        </ul>
      </div>
      <ul className="header-list">
        <li className="logo" onClick={onSidebarWebToggle}>
          <HamburgerLogo width="35" height="28" />
        </li>
        <li className="company-name" onClick={() => navigate('/')}>
          {/* <WhiteLogo /> */}
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
            {/* <li className="simple-list sell" onClick={() => navigate('/sell')}>
              Sell
            </li> */}
            {/* <li
              className="simple-list short"
              onClick={() => navigate('/shortterm')}
            >
              Short&nbsp;Term
            </li> */}
            {/* <li
              className="simple-list mortgages"
              onClick={() => navigate('/mortgage')}
            >
              Mortgages
            </li> */}

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
              <DownArrow fill="#ffffff" />
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
