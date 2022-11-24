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
    props.clearUpload();
  };

  const onClickAddAgency = () => {
    props.clearAddAgency();
    navigate('/admin/add-agency');
    props.clearUpload();
  };

  const onClickAddOffplan = () => {
    props.clearAddOffplan();
    navigate('/admin/add-offplan');
    props.clearUpload();
  };

  return (
    <div className="adminheader-english">
      <div className={`web-sidebar ${state}`}>
        <ul>
          <li onClick={onSidebarWebToggle}>
            <Close />
          </li>
          <li onClick={() => navigate('/admin')}>Property </li>
          <li onClick={onClickAddProperty}>Add Property </li>
          <li onClick={() => navigate('/admin/agency')}>Agency </li>
          <li onClick={onClickAddAgency}>Add Agency </li>
          <li onClick={() => navigate('/admin/amenity')}>Amenity </li>
          <li onClick={() => navigate('/admin/offplan')}>Offplan </li>
          <li onClick={onClickAddOffplan}>Add Offplan </li>
          <li onClick={() => navigate('/admin/neighborhood')}>Neighbourhood</li>
          <li onClick={() => navigate('/admin/taghead')}>Tag&nbsp;Header</li>
          <li onClick={() => navigate('/admin/tagline')}>Tag&nbsp;Line</li>
          {/* <li onClick={() => navigate('/admin/newstopics')}>
            News&nbsp;Topics
          </li> */}
          <li onClick={() => navigate('/admin/news')}>News</li>
          <li onClick={() => navigate('/admin/blog')}>Blog</li>
          <li onClick={() => navigate('/admin/city')}>City</li>
        </ul>
      </div>
      <div className={`mobile-sidebar ${state}`}>
        <ul>
          <li onClick={onSidebarWebToggle}>
            <Close />
          </li>
          <li onClick={() => navigate('/admin')}>Property</li>
          <li onClick={onClickAddProperty}>Add Property</li>
          <li onClick={() => navigate('/admin/agency')}>Agency</li>
          <li onClick={onClickAddAgency}>Add Agency</li>
          <li onClick={() => navigate('/admin/amenity')}>Amenity </li>
          <li onClick={() => navigate('/admin/neighborhood')}>
            Neighbor&nbsp;Hood
          </li>
          <li onClick={() => navigate('/admin/offplan')}>Offplan </li>
          <li onClick={onClickAddOffplan}>Add Offplan </li>
          <li onClick={() => navigate('/admin/taghead')}>Tag&nbsp;Header</li>
          <li onClick={() => navigate('/admin/tagline')}>Tag&nbsp;Line</li>
          <li onClick={() => navigate('/admin/newstopics')}>
            News&nbsp;Topics
          </li>
          <li onClick={() => navigate('/admin/news')}>News</li>
          <li onClick={() => navigate('/admin/blog')}>Blog</li>
          <li onClick={() => navigate('/admin/city')}>City</li>
        </ul>
      </div>
      <ul className="adminheader-list">
        <li className="logo" onClick={onSidebarWebToggle}>
          <HamburgerLogo fill="#1c3988" width="35" height="28" />
        </li>
        <li className="company-name" onClick={() => navigate('/admin')}>
          <span className="main-name">Property&nbsp;Assistant</span>
          <span className="sub-name">ADMIN</span>
        </li>
        <li className="desktop-li">
          <ul className="desktop-ul">
            <li className="simple-list" onClick={() => navigate('/admin')}>
              Property
            </li>
            <li
              className="simple-list"
              onClick={() => navigate('/admin/agency')}
            >
              Agency
            </li>

            <li
              className="simple-list"
              onClick={() => navigate('/admin/amenity')}
            >
              Amenity
            </li>
            <li
              className="simple-list"
              onClick={() => navigate('/admin/offplan')}
            >
              Offplan
            </li>
            <li
              className="simple-list"
              onClick={() => navigate('/admin/tagline')}
            >
              Tag&nbsp;Line
            </li>
          </ul>
        </li>
        <li className="adminheader-btn">
          <HeaderButton>االعربية</HeaderButton>
        </li>
      </ul>
    </div>
  );
};

export default Header;
