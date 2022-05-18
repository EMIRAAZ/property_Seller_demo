import './socialpanel.scss';
import Apple from '../svg/apple';
import Google from '../svg/google';

const SocialPanel = () => {
  return (
    <div className="social-panel">
      <p>Download Now On</p>
      <div className="social-link">
        <Apple />
        <Google />
      </div>
    </div>
  );
};

export default SocialPanel;
