import './basicButton.scss';

const BasicButton = ({ customClass, children, onClick }) => {
  return (
    <button className={`basic-btn ${customClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default BasicButton;
