import './footer.scss';
import RightArrow from '../../svg/rightarrow';
import BasicButton from '../../button/BasicButton';
import Facebook from '../../svg/facebook';
import Twitter from '../../svg/twitter';
import Instagram from '../../svg/instagram';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Footer(props) {
  const navigate = useNavigate();
  useEffect(() => {
    props.getTagHeadWeb();
    props.getTagLineWeb();
  }, []);

  return (
    <div className="footer-english">
      <div className="mini-container">
        <p className="header-text">
          Lets find you a <span className="text-span">Home</span>
        </p>
        <BasicButton customClass="list-your-property-button">
          Advertise With Us
          <RightArrow customClass="right-arrow" />
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
        {renderTag(props.taghead, props.tagline)}
      </div>
      <div className="third-container">
        <p className="abt" onClick={() => navigate('/about')}>
          About&nbsp;Us
        </p>
        <p className="abt-founder" onClick={() => navigate('/aboutfounder')}>
          About&nbsp;Founder
        </p>
        <p className="ourtm" onClick={() => navigate('/ourteam')}>
          Our&nbsp;Team
        </p>
        <p className="ourpart" onClick={() => navigate('/ourpartner')}>
          Our&nbsp;Partners
        </p>
        <p className="carrer" onClick={() => navigate('/career')}>
          Careers
        </p>
        <p className="terms" onClick={() => navigate('/terms')}>
          Teams&nbsp;And&nbsp;Conditions
        </p>
        <p className="policy" onClick={() => navigate('/privacypolicy')}>
          Privacy&nbsp;Policy
        </p>
      </div>
      <p className="copy-right">Copyright 2022 - Property Seller</p>
    </div>
  );
}

const renderTag = (taghead, tagline) => {
  return (
    taghead.rows &&
    taghead.rows.map((item, i) => (
      <div key={i} className={`column-${i + 2}`}>
        <p className="column-heading">{item.title}</p>
        {tagline.rows &&
          tagline.rows.map((link, j) => {
            if (link.tagheadId === item.id) {
              return (
                <p key={j + j} className="column-link">
                  {link.title}
                </p>
              );
            }
          })}
      </div>
    ))
  );
};

export default Footer;
