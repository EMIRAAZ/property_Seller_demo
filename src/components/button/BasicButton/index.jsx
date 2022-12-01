import './basicButton.scss';
import { useNavigate } from 'react-router-dom';

const BasicButton = ({ customClass, children, onClick }) => {
  return (
    <button className={`basic-btn ${customClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default BasicButton;
