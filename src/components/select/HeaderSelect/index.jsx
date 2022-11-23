import './headerSelect.scss';

const HeaderSelect = ({ name, options, customClass = '', onClick }) => {
  const renderOptions = () =>
    (options || []).map((option, i) => (
      <p key={i} onClick={() => onClick(option.type)}>
        {option.name}
      </p>
    ));
  return (
    <div className={`header-select ${customClass}`}>
      <p className="drop-btn">{name}</p>
      <div className="dropdown-content">{renderOptions()}</div>
    </div>
  );
};

export default HeaderSelect;
