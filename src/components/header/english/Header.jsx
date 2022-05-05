import './header.scss';
import HamburgerLogo from '../../svg/hamburger';
import DownArrow from '../../svg/downarrow';
import HeaderButton from '../../button/HeaderButton';

const Header = () => {
  return (
    <div className="header-english">
      <ul>
        <li className="logo">
          <HamburgerLogo width="35" height="28" />
        </li>
        <li className="company-name">
          <span className="main-name">UAE&nbsp;Assistant</span>
          <span className="sub-name">Properties</span>
        </li>
        <li className="simple-list buy">Buy</li>
        <li className="simple-list">Rent</li>
        <li className="simple-list">Sell</li>
        <li className="simple-list">Short&nbsp;Term</li>
        <li className="simple-list">Mortgages</li>
        <li className="simple-list">Off&nbsp;Plan</li>
        <li className="simple-list luxury">
          <div className="luxury-margin"> Luxury&nbsp;Properties</div>
          <DownArrow />
        </li>
        <li className="simple-list">List&nbsp;Your&nbsp;Property</li>
        <li className="header-btn">
          <HeaderButton>االعربية</HeaderButton>
        </li>
      </ul>
    </div>
  );
};

export default Header;
