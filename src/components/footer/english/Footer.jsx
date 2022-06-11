import './footer.scss';
import RightArrow from '../../svg/rightarrow';
import BasicButton from '../../button/BasicButton';
import Facebook from '../../svg/facebook';
import Twitter from '../../svg/twitter';
import Instagram from '../../svg/instagram';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

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
        <p className="abt" onClick={() => navigate('/about')}>
          About Us
        </p>
        <p className="abt-founder" onClick={() => navigate('/aboutfounder')}>
          About Founder
        </p>
        <p className="ourtm" onClick={() => navigate('/ourteam')}>
          Our Team
        </p>
        <p className="ourpart" onClick={() => navigate('/ourpartner')}>
          Our Partners
        </p>
        <p className="carrer" onClick={() => navigate('/career')}>
          Careers
        </p>
        <p className="terms" onClick={() => navigate('/terms')}>
          Teams And Conditions
        </p>
        <p className="policy" onClick={() => navigate('/privacypolicy')}>
          Privacy Policy
        </p>
        {/* <p className="blog" onClick={() => navigate('/privacypolicy')}>
          Blog
        </p>
        <p className="news" onClick={() => navigate('/privacypolicy')}>
          News
        </p> */}
        <p className="copy-right">Copyright 2021 - UAEAssistant</p>
      </div>
    </div>
  );
}

export default Footer;
