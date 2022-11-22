import './spinnerButton.scss';
import Spinner from '../../spinner';

const SpinnerButton = ({
  customClass,
  children,
  onClick,
  loading,
  style = {},
}) => {
  return (
    <button
      style={style}
      className={`spinner-btn ${customClass}`}
      onClick={onClick}
    >
      {loading ? (
        <span className="btn-spinner-rt">
          <Spinner />
        </span>
      ) : (
        <></>
      )}
      <>{children}</>
    </button>
  );
};

export default SpinnerButton;
