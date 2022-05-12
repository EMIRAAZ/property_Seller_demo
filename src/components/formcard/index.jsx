import './formcard.scss';

const FormCard = ({ children, customClass }) => {
  return <div className={`form-card ${customClass}`}>{children}</div>;
};

export default FormCard;
