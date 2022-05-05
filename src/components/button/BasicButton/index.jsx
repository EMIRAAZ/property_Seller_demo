import './basicButton.scss';

const BasicButton = ({ customClass, children }) => {
  return <button className={`basic-btn ${customClass}`}>{children}</button>;
};

export default BasicButton;
