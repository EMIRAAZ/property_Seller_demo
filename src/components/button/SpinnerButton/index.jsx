import './spinnerButton.scss';
import Spinner from '../../spinner';

const SpinnerButton = ({ customClass, children, onClick, loading }) => {
  return (
    <button className={`spinner-btn ${customClass}`} onClick={onClick}>
      {loading ? <Spinner /> : <></>}
      <>{children}</>
    </button>
  );
};

export default SpinnerButton;
