import './socialpanel.scss';
import Apple from '../svg/apple';
import Google from '../svg/google';

const SocialPanel = ({ customClass }) => {
  return (
    <div className={`social-panel ${customClass}`}>
      <p>Download Now On</p>
      <div className="social-link">
        <Apple />
        <Google />
      </div>
    </div>
  );
};

export default SocialPanel;
