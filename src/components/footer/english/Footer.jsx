import './footer.scss';
import RightArrow from '../../svg/rightarrow';
import BasicButton from '../../button/BasicButton';
import Facebook from '../../svg/facebook';
import Twitter from '../../svg/twitter';
import Instagram from '../../svg/instagram';

function Footer() {
  return (
    <div className="footer-english">
      <div className="mini-container">
        <p className="header-text">
          Lets find you a <span className="text-span">Home</span>
        </p>
        <BasicButton customClass="list-your-property-button">
          List Your Property <RightArrow customClass="right-arrow" />
        </BasicButton>
      </div>
      <div className="second-container">
        <div className="column-1">
          <p>Properties.</p>
          <div className="icons">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
        <div className="column-2">
          <p className="column-heading">Column Heading</p>
          <p className="column-link">Link goes here</p>
          <p className="column-link">Link goes here</p>
          <p className="column-link">Link goes here</p>
          <p className="column-link">Link goes here</p>
        </div>
        <div className="column-3">
          <p className="column-heading">Column Heading</p>
          <p className="column-link">Link goes here</p>
          <p className="column-link">Link goes here</p>
          <p className="column-link">Link goes here</p>
          <p className="column-link">Link goes here</p>
        </div>
        <div className="column-4">
          <p className="column-heading">Column Heading</p>
          <p className="column-link">Link goes here</p>
          <p className="column-link">Link goes here</p>
          <p className="column-link">Link goes here</p>
          <p className="column-link">Link goes here</p>
        </div>
      </div>
      <div className="third-container">
        <p className="copy-right">Copyright 2021 - UAEAssistant</p>
        <p className="abt">About Us</p>
        <p className="ourtm">Our Team</p>
        <p className="ourpart">Our Partners</p>
        <p className="blogs">Blogs</p>
        <p className="news">News</p>
      </div>
    </div>
  );
}

export default Footer;
