import './headerSelect.scss';

const HeaderSelect = ({ name, options }) => {
  const renderOptions = () =>
    (options || []).map((option, i) => <p key={i}>{option.name}</p>);
  return (
    <div className="header-select">
      <p className="drop-btn">{name}</p>
      <div className="dropdown-content">{renderOptions()}</div>
    </div>
  );
};

export default HeaderSelect;
