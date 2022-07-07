import './headerSelect.scss';
import { useNavigate } from 'react-router-dom';

const HeaderSelect = ({ name, options }) => {
  const navigate = useNavigate();
  const renderOptions = () =>
    (options || []).map((option, i) => (
      <p
        key={i}
        onClick={() =>
          navigate(`/luxuryproperty/${option.type}`, { replace: true })
        }
      >
        {option.name}
      </p>
    ));
  return (
    <div className="header-select">
      <p className="drop-btn" onClick={() => navigate('/luxury-property')}>
        {name}
      </p>
      <div className="dropdown-content">{renderOptions()}</div>
    </div>
  );
};

export default HeaderSelect;
